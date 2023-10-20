<template>
  <div class="authority">
    <warning-bar title="任务筛号列表, 目前为粗粒度版本，后续将开发下载禁用账号、存活账号功能" />
    <div class="gva-table-box">
      <div class="gva-btn-list" />
      <div class="gva-btn-list">

        <div class="flex space-x-4">
          <el-input
            v-model="searchText"
            placeholder="请输入手机号码"
            clearable
            style="width: 200px;"
            @clear="clearSearch"
            @keyup.enter.native="searchTask"
          />
          <el-button
            type="primary"
            icon="Search"
            @click="searchPhoneNumber"
          >搜索</el-button>
          <el-button
            color="#626aef"
            icon="refresh"
            :dark="isDark"
            plain
            @click="getTableData"
          >刷新</el-button></div>

      </div>
      <div class="flex items-center px-2 border-t border-b py-2 border-slate-200/60 dark:border-darkmode-400">
        <div class="font-medium mr-2">当前任务:</div>
        <span class="bg-slate-400 rounded text-slate-100 px-2 text-sm">
          {{ taskName }}
        </span>
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
          label="任务ID"
          min-width="180"
          prop="task_id"
        />
        <el-table-column
          align="left"
          label="手机号码"
          min-width="180"
          prop="phoneNumber"
        />
        <el-table-column
          align="left"
          label="状态"
          min-width="180"
          prop="status"
        >
          <template #default="{ row }">
            <el-button
              :type="getButtonType(row.status)"
              size="small"
              :loading-icon="Eleme"
              plain
            >
              {{ getStatusButtonType(row.status) }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          label="任务ID"
          min-width="180"
          prop="task_id"
        />
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
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :total="total"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { getSievenNumberList, findSieveTask } from '@/api/sieve'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { ref, onMounted } from 'vue'
import { formatTimeToStr } from '@/utils/date'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Staff',
})

const currentPage = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref(null)
const route = useRoute()
const taskName = ref('')
const searchText = ref('')
const currentSearchText = ref('')

// 监听currentPage变化，获取对应页数的数据
const handlePageChange = (page) => {
  currentPage.value = page
  getTableData()
}

const searchPhoneNumber = async() => {
  currentSearchText.value = searchText.value
  await getTableData()
}

const clearSearch = () => {
  searchText.value = ''
  currentSearchText.value = ''
  getTableData() // 重新获取数据，不带搜索条件
}

// 查询数据
const getTableData = async() => {
  const table = await getSievenNumberList(
    currentPage.value,
    pageSize.value,
    route.params.id,
    currentSearchText.value
  )
  if (table.code === 0) {
    table.data.list.forEach((item) => {
      item.createdAt = item.createdAt ? formatTimeToStr(item.createdAt, 'yyyy-MM-dd hh:mm:ss') : ''
      item.updatedAt = item.updatedAt ? formatTimeToStr(item.updatedAt, 'yyyy-MM-dd hh:mm:ss') : ''
    })
    tableData.value = []
    setTimeout(() => {
      tableData.value = table.data.list
    }, 100)
    total.value = table.data.total
    currentPage.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}
// 在初始化时获取任务名称
const fetchTaskName = async() => {
  const taskId = route.params.id
  const response = await findSieveTask(taskId)
  if (response && response.data && response.data.resieveTask.taskName) {
    taskName.value = response.data.resieveTask.taskName
  }
}

// 初始化时获取第一页数据
onMounted(async() => {
  await fetchTaskName()
  getTableData()
})

const getStatusButtonType = (status) => {
  switch (status) {
    case 'Normal':
      return '存活'
    case 'Disable':
      return '禁用'
    default:
      return ''
  }
}

const getButtonType = (status) => {
  switch (status) {
    case 'Disable':
      return 'danger'
    case 'Normal':
      return 'success'
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
