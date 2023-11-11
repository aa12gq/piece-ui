<template>
  <div class="authority">
    <warning-bar title="注：批量筛号" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <!-- 按钮区域 -->
        <div class="button-section">
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
        </div>
        <!-- 搜索框区域 -->
        <div class="search-section flex space-x-4 -ml-2">
          <el-input
            v-model="searchText"
            placeholder="请输入任务名称"
            clearable
            style="width: 200px"
            @clear="clearSearch"
            @keyup.enter.native="searchTask"
          />
          <el-button
            type="primary"
            icon="Search"
            @click="searchTask"
          >搜索</el-button>
        </div>
        <el-button
          icon="refresh"
          @click="getTableData"
        >刷新</el-button>
        <el-button
          type="primary"
          icon="CirclePlus"
          class="ml-auto mr-4"
          @click="drawer = true"
        >新建任务</el-button>
      </div>

      <el-table
        :data="tableData"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        row-key="authorityId"
        style="width: 100%"
        :show-summary="true"
        @sort-change="handleSortChange"
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
              loading-icon="Eleme"
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
          label="正常账号数量"
          min-width="180"
          prop="nonDisabledAccounts"
        >
          <template #default="{ row }">
            {{ row.nonDisabledAccounts }}
            <span v-if="row.nonDisabledAccounts + row.disabledAccounts > 0">
              ({{
                Math.floor(
                  (Number(row.nonDisabledAccounts) / Number(row.totalNumber)) *
                    100
                )
              }}%)
            </span>
            <span v-else> (0%) </span>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          label="禁用账号数量"
          min-width="180"
          prop="disabledAccounts"
        >
          <template #default="{ row }">
            {{ row.disabledAccounts }}
            <span v-if="row.totalNumber > 0">
              ({{
                Math.floor(
                  ((row.disabledAccounts / row.totalNumber) * 100).toFixed(2),
                  100
                )
              }}%)
            </span>
            <span v-else>0%</span>
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
        <el-table-column
          align="left"
          label="并发数"
          min-width="180"
          prop="concurrency"
        />
        <el-table-column
          align="left"
          label="提交时间"
          min-width="180"
          prop="createdAt"
          sortable="custom"
        />
        <el-table-column
          align="left"
          label="更新时间"
          min-width="180"
          prop="updatedAt"
          sortable="custom"
        />
        <el-table-column
          align="left"
          label="操作"
          width="250"
          fixed="right"
        >
          <template #default="scope">
            <!-- Button Group Container -->
            <div class="button-group">
              <!-- 详情 Button -->
              <el-button
                icon="Files"
                type="primary"
                link
                @click="
                  $router.push({
                    name: 'sieve_number',
                    params: { id: scope.row.ID },
                  })
                "
              >详情</el-button>

              <!-- 删除 Button -->
              <el-button
                icon="delete"
                type="primary"
                link
                @click="deleteTask(scope.row)"
              >删除</el-button>

              <!-- 更多操作 Dropdown -->
              <el-dropdown
                trigger="click"
                class="el-button-like"
              >
                <el-button
                  class="button-with-icon-right ml-3"
                  type="primary"
                  link
                  icon="More"
                >更多操作</el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      v-if="scope.row.status === 'Pause'"
                      @click.native="openRecover(scope.row)"
                    >恢复</el-dropdown-item>
                    <el-dropdown-item
                      v-if="scope.row.status === 'Running'"
                      @click.native="openPause(scope.row)"
                    >暂停</el-dropdown-item>
                    <el-dropdown-item
                      v-if="
                        scope.row.nonDisabledAccounts > 0 &&
                          scope.row.DisabledAccounts > 0
                      "
                    >什么都没有</el-dropdown-item>
                    <el-dropdown-item
                      v-if="scope.row.nonDisabledAccounts > 1"
                      @click="downloadNormal(scope.row)"
                    >下载存活账号</el-dropdown-item>
                    <el-dropdown-item
                      v-if="scope.row.disabledAccounts > 1"
                      @click="downloadDisable(scope.row)"
                    >下载禁用账号</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
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
            placeholder="请输入任务名称"
          />
        </el-form-item>
        <el-form-item
          label="并发数"
          prop="concurrency"
        >
          <el-input
            v-model.number="form.concurrency"
            type="number"
            placeholder="并发数"
            :min="1"
            :max="1000"
            style="width: 100%"
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
            icon="Position"
            class="w-[7rem] rounded"
            @click="submitForm"
          >提交</el-button>
          <el-button
            icon="RefreshLeft"
            class="w-[7rem] rounded"
            @click="resetForm"
          >重置</el-button>
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
  pauseTask,
  recoverTask,
  downloadDisableAccounts,
  downloadNormalAccounts,
} from '@/api/sieve'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { formatTimeToStr } from '@/utils/date'
import { ref, reactive, onMounted } from 'vue'
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
    .catch(() => {})
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
const getTableData = async(sortProp, sortOrder) => {
  const table = await getSieveTaskList({
    page: page.value,
    pageSize: pageSize.value,
    taskName: currentSearchText.value,
    sort: sortProp,
    order: sortOrder,
  })
  if (table.code === 0) {
    tableData.value = []
    setTimeout(() => {
      table.data.list.forEach((item) => {
        item.createdAt = item.createdAt
          ? formatTimeToStr(item.createdAt, 'yyyy-MM-dd hh:mm:ss')
          : ''
        item.updatedAt = item.updatedAt
          ? formatTimeToStr(item.updatedAt, 'yyyy-MM-dd hh:mm:ss')
          : ''
      })

      tableData.value = table.data.list

      if (shouldAutoRefresh(table.data.list)) {
        startAutoRefresh()
      } else {
        stopAutoRefresh()
      }
    }, 100)
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

const handleSortChange = ({ prop, order }) => {
  if (!order) {
    order = null
    prop = null
  } else {
    order = order === 'ascending' ? 'asc' : 'desc'
    prop = prop ? camelToSnake(prop) : null // 将 prop 从 camelCase 转换为 snake_case
  }

  getTableData(prop, order)
}

function camelToSnake(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '_' + m[1]
    })
    .toLowerCase()
}

// 删除任务
const deleteTask = (row) => {
  ElMessageBox.confirm('此操作将永久删除该任务及相关账号, 是否继续?', '提示', {
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
        // 当删除后没有运行中的任务时，停止自动刷新
        if (!tableData.value.some((item) => item.status === 'Running')) {
          stopAutoRefresh()
        }
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
    case 'Init':
      return '初始化'
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
    case 'Init':
      return 'info'
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
    case 'Init':
      return 'el-icon-help-filled'
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
  concurrency: 0,
  file: null,
  immediate: true, // 默认为立即开始
})

const rules = {
  taskName: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
  file: [{ required: true, message: '请上传文件', trigger: 'change' }],
  concurrency: [
    { required: true, message: '请输入并发数', trigger: 'blur' },
    { type: 'number', message: '并发数必须为数字值', trigger: 'blur' },
  ],
}

const submitForm = async() => {
  const valid = await formRef.value.validate()
  if (!valid) return

  const formData = new FormData()
  formData.append('taskName', form.taskName)
  formData.append('concurrency', form.concurrency)
  formData.append('immediate', form.immediate)

  if (form.file) {
    formData.append('file', form.file, form.file.name)
  }

  try {
    const response = await createSieveTask(formData)
    if (response && response.code === 0) {
      ElMessage.success('提交成功！')
      getTableData()

      handleClose()
    }
  } catch (error) {
    ElMessage.error(error.message)
  }
}

const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
}

// 开启自动刷新
let refreshTimer = null
const startAutoRefresh = () => {
  if (!refreshTimer) {
    refreshTimer = setInterval(() => {
      getTableData()
    }, 5000)
  }
}

// 停止自动刷新
const stopAutoRefresh = () => {
  if (refreshTimer) {
    clearInterval(refreshTimer)
    refreshTimer = null
  }
}

const shouldAutoRefresh = (list) => {
  // 如果列表中存在至少一个状态为 'Running' 的项，则返回true
  return list.some((item) => item.status === 'Running')
}

onMounted(() => {
  // 定义定时器，每十秒刷新数据
  startAutoRefresh()

  // 当用户离开页面时清除定时器
  window.addEventListener('beforeunload', () => {
    stopAutoRefresh()
  })
})

const openPause = (row) => {
  ElMessageBox.confirm(`您确定要暂停"${row.taskName}"吗`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await pauseTask(row.ID)
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '暂停成功',
        })
        setTimeout(() => {
          getTableData()
        }, 500)
      } else {
        ElMessage({
          type: 'error',
          message: res.data.message || '暂停任务失败',
        })
      }
      getTableData()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作已取消',
      })
    })
}

const openRecover = (row) => {
  ElMessageBox.confirm(`您确定要恢复"${row.taskName}"吗`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      try {
        const res = await recoverTask(row.ID)
        console.log('测试', res)
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: `任务 "${row.taskName}" 恢复成功!`,
          })
          setTimeout(() => {
            getTableData()
          }, 3000)
        } else {
          ElMessage({
            type: 'error',
            message: res.data.message || '恢复任务失败',
          })
        }
      } catch (error) {
        if (error && error.response) {
          ElMessage({
            type: 'error',
            message: error.response.data.message || '请求失败',
          })
        } else {
          // 用户取消操作不弹出提示
        }
      }
    })
    .catch(() => {
      // 用户取消操作不弹出提示
    })
}

// 通用的下载文件函数
const downloadFile = async(downloadFunc, row, fileName, delay = 3000) => {
  try {
    ElMessage.info('准备下载，请稍候...')
    const response = await downloadFunc(row.ID)

    if (response && response.data) {
      console.log(`开始下载 ${fileName}`, response)
      const blob = new Blob([response.data], { type: 'text/plain' })

      setTimeout(() => {
        // 延迟下载
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
        ElMessage.success('下载成功')
      }, delay)
    } else {
      ElMessage.error(`下载 ${fileName} 失败：没有数据返回`)
    }
  } catch (error) {
    ElMessage.error('下载出错')
    console.error('下载出错', error)
  }
}

// 下载禁用账号
const downloadDisable = async(row) => {
  await downloadFile(downloadDisableAccounts, row, '禁用账号.txt')
}

// 下载存活账号
const downloadNormal = async(row) => {
  await downloadFile(downloadNormalAccounts, row, '正常账号.txt')
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

.button-group {
  display: flex;
  align-items: center;
}

.el-button-like {
  line-height: normal;
  color: #409eff;
  padding: 0;
  border: none;
  background: none;
}

.el-button-like .el-button {
  padding: 0;
  margin-right: 10px;
}

.el-button-like .el-button:focus,
.el-button-like .el-button:hover {
  color: #66b1ff;
  background: none;
  border-color: transparent;
}
</style>
