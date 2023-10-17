<template>
  <div class="authority">
    <warning-bar title="注：当前系统处于初始开发阶段时，批量筛号功能正在被研发人员加工开发。在使用该功能时，您需要注意到其仍未经过完整的测试和验证，可能会受到限制和缺陷的影响" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button
          type="primary"
          icon="CirclePlus"
          @click="drawer = true"
        >新建任务</el-button>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        />
        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        />

        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        />

        <el-button
          type="primary"
          icon="refresh"
          @click="getTableData"
        >刷新</el-button>
      </div>
      <el-table
        :data="tableData"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        row-key="authorityId"
        style="width: 100%"
      >
        <el-table-column
          label="ID"
          min-width="180"
          prop="ID"
        />
        <el-table-column
          align="left"
          label="任务名称"
          min-width="180"
          prop="taskName"
        />
        <el-table-column
          align="left"
          label="文件名称"
          min-width="180"
          prop="file_name"
        />
        <el-table-column
          align="left"
          label="任务状态"
          min-width="180"
        >
          <template #default="{ row }">
            <el-button
              :type="getButtonType(row.status)"
              size="small"
              :loading-icon="Eleme"
              :loading="row.status == 'Running'"
              :icon="getButtonIcon(row.status)"
              plain
            >
              {{ getStatusButtonType(row.status) }}
            </el-button>
          </template>
        </el-table-column>

        <el-table-column
          align="left"
          label="总数"
          min-width="180"
          prop="totalNumber"
        >
          <template #default="{ row }">
            {{ row.totalNumber }}
          </template>
        </el-table-column>
        <!-- <el-table-column
          align="left"
          label="代理"
          min-width="180"
          prop="authorityName"
        /> -->
        <el-table-column
          align="left"
          label="创建时间"
          min-width="180"
          prop="createdAt"
        />
        <el-table-column
          align="left"
          label="更新时间"
          min-width="180"
          prop="updatedAt"
        />
        <el-table-column
          align="left"
          label="操作"
          width="150"
          fixed="right"
        >
          <template #default="scope">
            <el-button
              icon="edit"
              type="primary"
              link
              @click="editAuthority(scope.row)"
            >编辑</el-button>
            <!-- <el-button
              v-if="scope.row.status === 'Pause'"
              type="info"
              icon="VideoPause"
              link
            >恢复</el-button>

            <el-button
              v-if="scope.row.status === 'Running'"
              type="danger"
              icon="VideoPlay"
              link
            >暂停</el-button> -->

            <el-button
              icon="delete"
              type="primary"
              link
              @click="deleteAuth(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="page"
        :page-size="pageSize"
        :page-sizes="[10, 30, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handlePageChange"
        @size-change="handleSizeChange"
      />
    </div>

    <el-drawer
      v-model="drawer"
      title="新建任务"
      :before-close="handleClose"
    >
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
      >

        <el-form-item
          label="任务名称"
          prop="taskName"
        >
          <el-input
            v-model="form.taskName"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item
          label="上传文件"
          prop="file"
        >
          <el-upload
            class="upload-demo"
            :file-list="fileList"
            :on-change="handleUploadChange"
            :before-upload="() => false"
          >
            <el-button slot="trigger">选择文件</el-button>
          </el-upload>
          <div v-if="form.file">{{ form.file.name }}</div>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm"
          >提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>

      </el-form>
    </el-drawer>
    <el-drawer
      v-model="drawer2"
      :direction="direction"
    >
      <template #header>
        <h4>set title by slot</h4>
      </template>
      <template #default>
        <div>
          <el-radio
            v-model="radio1"
            label="Option 1"
            size="large"
          >Option 1</el-radio>
          <el-radio
            v-model="radio1"
            label="Option 2"
            size="large"
          >Option 2</el-radio>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">cancel</el-button>
          <el-button
            type="primary"
            @click="confirmClick"
          >confirm</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import {
  deleteAuthority,
  createAuthority,
  updateAuthority,
  copyAuthority,
} from '@/api/authority'
import {
  getSieveTaskList,
  createSieveTask,
} from '@/api/sieve'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { formatTimeToStr } from '@/utils/date'
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const drawer2 = ref(false)
const direction = ref('rtl')

const handleClose = (done) => {
  done()
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
    })
}

defineOptions({
  name: 'Authority',
})

const AuthorityOption = ref([
  {
    authorityId: 0,
    authorityName: '根角色',
  },
])
const drawer = ref(false)
const dialogType = ref('add')

const dialogTitle = ref('新建任务')
const dialogFormVisible = ref(false)
const apiDialogFlag = ref(false)
const copyForm = ref({})

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
// const searchInfo = ref({})

const handlePageChange = (val) => {
  page.value = val
  getTableData()
}

const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getSieveTaskList(page.value, pageSize.value)
  if (table.code === 0) {
    tableData.value = []
    setTimeout(() => {
      table.data.list.forEach((item) => {
        item.createdAt = item.createdAt ? formatTimeToStr(item.createdAt, 'yyyy-MM-dd hh:mm:ss') : ''
        item.updatedAt = item.updatedAt ? formatTimeToStr(item.updatedAt, 'yyyy-MM-dd hh:mm:ss') : ''
      })
      tableData.value = table.data.list
    }, 100)
    console.log('测试', table)
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 删除任务
const deleteAuth = (row) => {
  ElMessageBox.confirm('此操作将永久删除该任务, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await deleteAuthority({ authorityId: row.authorityId })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功!',
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getTableData()
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
// 初始化表单
const authorityForm = ref(null)
const initForm = () => {
  if (authorityForm.value) {
    authorityForm.value.resetFields()
  }
  form.value = {
    authorityId: 0,
    authorityName: '',
    parentId: 0,
  }
}
// 关闭窗口
const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
  apiDialogFlag.value = false
}
// 确定弹窗

const enterDialog = () => {
  authorityForm.value.validate(async(valid) => {
    if (valid) {
      form.value.authorityId = Number(form.value.authorityId)
      switch (dialogType.value) {
        case 'add':
          {
            const res = await createAuthority(form.value)
            if (res.code === 0) {
              ElMessage({
                type: 'success',
                message: '添加成功!',
              })
              getTableData()
              closeDialog()
            }
          }
          break
        case 'edit':
          {
            const res = await updateAuthority(form.value)
            if (res.code === 0) {
              ElMessage({
                type: 'success',
                message: '添加成功!',
              })
              getTableData()
              closeDialog()
            }
          }
          break
        case 'copy': {
          const data = {
            authority: {
              authorityId: 0,
              authorityName: '',
              datauthorityId: [],
              parentId: 0,
            },
            oldAuthorityId: 0,
          }
          data.authority.authorityId = form.value.authorityId
          data.authority.authorityName = form.value.authorityName
          data.authority.parentId = form.value.parentId
          data.authority.dataAuthorityId = copyForm.value.dataAuthorityId
          data.oldAuthorityId = copyForm.value.authorityId
          const res = await copyAuthority(data)
          if (res.code === 0) {
            ElMessage({
              type: 'success',
              message: '复制成功！',
            })
            getTableData()
          }
        }
      }

      initForm()
      dialogFormVisible.value = false
    }
  })
}

const setOptions = () => {
  AuthorityOption.value = [
    {
      authorityId: 0,
      authorityName: '根角色',
    },
  ]
  setAuthorityOptions(tableData.value, AuthorityOption.value, false)
}
const setAuthorityOptions = (AuthorityData, optionsData, disabled) => {
  form.value.authorityId = String(form.value.authorityId)
  AuthorityData &&
    AuthorityData.forEach((item) => {
      if (item.children && item.children.length) {
        const option = {
          authorityId: item.authorityId,
          authorityName: item.authorityName,
          disabled: disabled || item.authorityId === form.value.authorityId,
          children: [],
        }
        setAuthorityOptions(
          item.children,
          option.children,
          disabled || item.authorityId === form.value.authorityId
        )
        optionsData.push(option)
      } else {
        const option = {
          authorityId: item.authorityId,
          authorityName: item.authorityName,
          disabled: disabled || item.authorityId === form.value.authorityId,
        }
        optionsData.push(option)
      }
    })
}
// 编辑角色
const editAuthority = (row) => {
  setOptions()
  dialogTitle.value = '编辑角色'
  dialogType.value = 'edit'
  for (const key in form.value) {
    form.value[key] = row[key]
  }
  setOptions()
  dialogFormVisible.value = true
}

const getStatusButtonType = (status) => {
  switch (status) {
    case 'Pending':
      return '等待'
    case 'Success':
      return '已成功'
    case 'Failed':
      return '失败'
    case 'Running':
      return '运行中'
    case 'Pause':
      return '已暂停'
    default:
      return ''
  }
}

const getButtonType = (status) => {
  switch (status) {
    case 'Pending':
      return 'warning'
    case 'Success':
      return 'success'
    case 'Failed':
      return 'danger'
    case 'Running':
      return 'info'
    case 'Pause':
      return 'danger'
    default:
      return ''
  }
}

const getButtonIcon = (status) => {
  switch (status) {
    case 'Pending':
      return 'el-icon-clock'
    case 'Success':
      return 'CircleCheck'
    case 'Failed':
      return 'el-icon-circle-close'
    case 'Running':
      return 'el-icon-loading'
    case 'Pause':
      return 'VideoPlay'
    default:
      return ''
  }
}

// 新建任务
const formRef = ref(null)

const fileList = ref([])
const handleUploadChange = (file, fileListUpdated) => {
  fileList.value = fileListUpdated
  if (fileListUpdated.length > 0) {
    form.file = fileListUpdated[0].raw
  } else {
    form.file = null
  }
}

const form = reactive({
  taskName: '',
  file: null,
})

const rules = {
  taskName: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
  file: [{ required: true, message: '请上传文件', trigger: 'change' }],
}

const submitForm = async() => {
  const valid = await formRef.value.validate()
  if (!valid) return

  const formData = new FormData()
  formData.append('taskName', form.taskName)
  if (form.file) {
    formData.append('file', form.file, form.file.name)
  }

  try {
    await createSieveTask(formData)
    ElMessage.success('创建成功！')
    handleClose()
  } catch (error) {
    ElMessage.error(error.message || '创建任务失败')
  }
}

const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
}
</script>

<style lang="scss">
.authority {
  .el-input-number {
    margin-left: 15px;
    span {
      display: none;
    }
  }
}
.tree-content {
  margin-top: 10px;
  height: calc(100vh - 158px);
  overflow: auto;
}
</style>
