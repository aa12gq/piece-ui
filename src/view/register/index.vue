<template>
  <div class="authority">
    <warning-bar title="注：账号注册" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button
          type="primary"
          icon="CirclePlus"
          @click="addAuthority(0)"
        >新建任务</el-button>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        >
          <el-button
            type="primary"
            icon="Expand"
            disabled="true"
          >导出账号</el-button>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        >
          <el-button
            type="warning"
            icon="VideoPlay"
            disabled="true"
          >暂停任务</el-button>

        </el-tooltip>

        <el-tooltip
          class="box-item"
          effect="dark"
          content="暂未开发，敬请期待"
          placement="top-start"
        >
          <el-button
            type="info"
            icon="VideoPause"
            disabled="true"
          >恢复任务</el-button>

        </el-tooltip>

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
          prop="task_name"
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
            >
              {{ getStatusButtonType(row.status) }}
            </el-button>
          </template>
        </el-table-column>

        <el-table-column
          align="left"
          label="总数/已处理"
          min-width="180"
          prop="authorityName"
        >
          <template #default="{ row }">
            {{ row.phone_number_total }}/{{ row.processed_count }}
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
          prop="start_time"
        />
        <el-table-column
          align="left"
          label="更新时间"
          min-width="180"
          prop="end_time"
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
    <!-- 新增角色弹窗 -->
    <el-dialog
      v-model="dialogFormVisible"
      :title="dialogTitle"
    >
      <el-form
        ref="authorityForm"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="父级角色"
          prop="parentId"
        >
          <el-cascader
            v-model="form.parentId"
            style="width: 100%"
            :disabled="dialogType === 'add'"
            :options="AuthorityOption"
            :props="{
              checkStrictly: true,
              label: 'authorityName',
              value: 'authorityId',
              disabled: 'disabled',
              emitPath: false,
            }"
            :show-all-levels="false"
            filterable
          />
        </el-form-item>
        <el-form-item
          label="角色ID"
          prop="authorityId"
        >
          <el-input
            v-model="form.authorityId"
            :disabled="dialogType === 'edit'"
            autocomplete="off"
            maxlength="15"
          />
        </el-form-item>
        <el-form-item
          label="角色姓名"
          prop="authorityName"
        >
          <el-input
            v-model="form.authorityName"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button
            type="primary"
            @click="enterDialog"
          >确 定</el-button>
        </div>
      </template>
    </el-dialog>

    <el-drawer
      v-if="drawer"
      v-model="drawer"
      custom-class="auth-drawer"
      :with-header="false"
      size="40%"
      title="角色配置"
    >
      <el-tabs
        :before-leave="autoEnter"
        type="border-card"
      >
        <el-tab-pane label="角色菜单">
          <Menus
            ref="menus"
            :row="activeRow"
            @changeRow="changeRow"
          />
        </el-tab-pane>
        <el-tab-pane label="角色api">
          <Apis
            ref="apis"
            :row="activeRow"
            @changeRow="changeRow"
          />
        </el-tab-pane>
        <el-tab-pane label="资源权限">
          <Datas
            ref="datas"
            :authority="tableData"
            :row="activeRow"
            @changeRow="changeRow"
          />
        </el-tab-pane>
      </el-tabs>
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
  getRegisterTaskList,
} from '@/api/registerTask'
import Menus from '@/view/superAdmin/authority/components/menus.vue'
import Apis from '@/view/superAdmin/authority/components/apis.vue'
import Datas from '@/view/superAdmin/authority/components/datas.vue'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { formatTimeToStr } from '@/utils/date'

import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

defineOptions({
  name: 'Authority',
})

const mustUint = (rule, value, callback) => {
  if (!/^[0-9]*[1-9][0-9]*$/.test(value)) {
    return callback(new Error('请输入正整数'))
  }
  return callback()
}

const AuthorityOption = ref([
  {
    authorityId: 0,
    authorityName: '根角色',
  },
])
const drawer = ref(false)
const dialogType = ref('add')
const activeRow = ref({})

const dialogTitle = ref('新增角色')
const dialogFormVisible = ref(false)
const apiDialogFlag = ref(false)
const copyForm = ref({})

const form = ref({
  authorityId: 0,
  authorityName: '',
  parentId: 0,
})
const rules = ref({
  authorityId: [
    { required: true, message: '请输入角色ID', trigger: 'blur' },
    { validator: mustUint, trigger: 'blur', message: '必须为正整数' },
  ],
  authorityName: [{ required: true, message: '请输入角色名', trigger: 'blur' }],
  parentId: [{ required: true, message: '请选择父角色', trigger: 'blur' }],
})

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
  const table = await getRegisterTaskList(page.value, pageSize.value)
  if (table.code === 0) {
    tableData.value = []
    setTimeout(() => {
      table.data.list.forEach((item) => {
        item.start_time = item.start_time ? formatTimeToStr(item.start_time, 'yyyy-MM-dd hh:mm:ss') : ''
        item.end_time = item.end_time ? formatTimeToStr(item.end_time, 'yyyy-MM-dd hh:mm:ss') : ''
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

const changeRow = (key, value) => {
  activeRow.value[key] = value
}
const menus = ref(null)
const apis = ref(null)
const datas = ref(null)
const autoEnter = (activeName, oldActiveName) => {
  const paneArr = [menus, apis, datas]
  if (oldActiveName) {
    if (paneArr[oldActiveName].value.needConfirm) {
      paneArr[oldActiveName].value.enterAndNext()
      paneArr[oldActiveName].value.needConfirm = false
    }
  }
}
// 删除角色
const deleteAuth = (row) => {
  ElMessageBox.confirm('此操作将永久删除该角色, 是否继续?', '提示', {
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
// 增加角色
const addAuthority = (parentId) => {
  initForm()
  dialogTitle.value = '新增角色'
  dialogType.value = 'add'
  form.value.parentId = parentId
  setOptions()
  dialogFormVisible.value = true
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
