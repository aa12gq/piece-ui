<template>
  <div>
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      style="width: 100%"
    >
      <el-table-column
        align="left"
        label="国家"
        min-width="180"
      >
        <template #default="scope">
          {{ scope.row.countryName.String }}
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="分组"
        min-width="180"
        prop="account_group_name"
      />
      <el-table-column
        align="left"
        label="标签"
        min-width="180"
        prop="account_tag_name"
      />
      <el-table-column
        align="left"
        label="总库存"
        min-width="180"
        prop="inventory"
      />
      <el-table-column
        align="left"
        label="可售"
        min-width="180"
        prop="remaining_count"
      />
      <el-table-column
        align="left"
        label="已售"
        min-width="180"
        prop="sold_count"
      />
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getSoldAccountInfoList } from '@/api/soldAccount'

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])

// 查询
const getTableData = async() => {
  const table = await getSoldAccountInfoList(
    page.value,
    pageSize.value,
  )
  if (table.code === 0) {
    tableData.value = []
    setTimeout(() => {
      tableData.value = table.data.list
    }, 100)
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

const handlePageChange = (val) => {
  page.value = val
  getTableData()
}

const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

getTableData()
// 使用defineExpose暴露方法
defineExpose({
  getTableData
})

</script>
