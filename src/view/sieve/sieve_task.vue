<template>
  <div class="authority">
    <warning-bar title="注：当前系统处于初始开发阶段时，当前仅支持批量筛号功能" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <!-- 搜索框区域 -->
        <div class="search-section flex space-x-2">
          <el-input
            v-model="searchText"
            placeholder="请输入任务名称"
            clearable
            style="width: 200px;"
            @clear="clearSearch"
            @keyup.enter.native="searchTask"
          />
          <el-button
            type="primary"
            icon="Search"
            @click="searchTask"
          >搜索</el-button>

        </div>
        <!-- 按钮区域 -->
        <div class="button-section ml-auto">
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
              @click="$router.push({ name: 'sieve_number', params: { id: scope.row.ID } })"
            >详情</el-button>
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
              @click="deleteTask(scope.row)"
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
  getSieveTaskList,
  createSieveTask,
  deleteSieveTask,
} from '@/api/sieve'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { formatTimeToStr } from '@/utils/date'
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const drawer2 = ref(false)
const direction = ref('rtl')

const handleClose = () => {
  drawer.value = false
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

const drawer = ref(false)

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchText = ref('')
const currentSearchText = ref('')

const handlePageChange = (val) => {
  page.value = val
  getTableData()
}

const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const searchTask = async() => {
  currentSearchText.value = searchText.value
  await getTableData()
}

const clearSearch = () => {
  searchText.value = ''
  currentSearchText.value = ''
  getTableData() // 重新获取数据，不带搜索条件
}

// 查询
const getTableData = async() => {
  const table = await getSieveTaskList(page.value, pageSize.value, currentSearchText.value)
  if (table.code === 0) {
    tableData.value = []
    setTimeout(() => {
      table.data.list.forEach((item) => {
        item.createdAt = item.createdAt ? formatTimeToStr(item.createdAt, 'yyyy-MM-dd hh:mm:ss') : ''
        item.updatedAt = item.updatedAt ? formatTimeToStr(item.updatedAt, 'yyyy-MM-dd hh:mm:ss') : ''
      })
      tableData.value = table.data.list
    }, 100)
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// 删除任务
const deleteTask = (row) => {
  ElMessageBox.confirm('此操作将永久删除该任务, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await deleteSieveTask({ ID: row.ID })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '任务删除成功 !',
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
    const response = await createSieveTask(formData)
    if (response && response.code === 0) {
      ElMessage.success('创建成功！')
      handleClose()
    } else {
      ElMessage.error(response.message || '创建任务失败')
    }
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
