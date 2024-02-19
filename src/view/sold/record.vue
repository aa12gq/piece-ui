<template><div>
  <el-table
    :data="tableData"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    row-key="authorityId"
    style="width: 100%"
  >
    <el-table-column
      align="left"
      label="id"
      min-width="320"
      prop="uuid"
    />
    <el-table-column
      align="left"
      label="已售id"
      min-width="380"
      prop="file_name"
    />
    <el-table-column
      align="left"
      label="数量"
      min-width="70"
      prop="account_count"
    />
    <el-table-column
      align="left"
      label=""
      min-width="180"
      prop="inventory"
    />
    <el-table-column
      align="left"
      label="创建时间"
      min-width="180"
      prop="CreatedAt"
      sortable="custom"
      :formatter="
        (row) => dayjs(row.CreatedAt).format('YYYY-MM-DD HH:mm:ss')
      "
    />
    <el-table-column
      align="left"
      label="更新时间"
      min-width="180"
      prop="UpdatedAt"
      sortable="custom"
      :formatter="
        (row) => dayjs(row.UpdatedAt).format('YYYY-MM-DD HH:mm:ss')
      "
    />
    <el-table-column
      align="left"
      label="操作"
      width="150"
      fixed="right"
    >
      <template #default="scope">
        <!-- Button Group Container -->
        <div class="button-group">
          <el-button
            type="warning"
            link
            @click="download(scope.row)"
          >下载</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</div></template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getSoldAccountRecordInfoList, downloadSoldAccountRecord } from '@/api/soldAccount'
import dayjs from 'dayjs'
import { ElMessage, ElMessageBox } from 'element-plus'

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])

// 查询
const getTableData = async() => {
  const table = await getSoldAccountRecordInfoList(
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

// 通用的下载文件函数
const downloadFile = async(downloadFunc, row) => {
  // 显示准备下载的消息
  ElMessage.info('准备下载，请稍候...')

  try {
    const response = await downloadFunc(row.ID)
    if (response && response.data) {
      // 提取文件名
      const contentDisposition = response.headers['content-disposition']
      let fileName = 'download.txt' // 默认文件名

      if (contentDisposition) {
        const filenameMatch =
          contentDisposition.match(/filename\*?=UTF-8''(.+?)(;|$)/) ||
          contentDisposition.match(/filename="?(.+?)"?(;|$)/)
        if (filenameMatch && filenameMatch.length > 1) {
          fileName = decodeURIComponent(filenameMatch[1])
        }
      }

      console.log(`开始下载 ${fileName}`, response)
      const blob = new Blob([response.data], { type: 'text/plain' })

      // 创建下载链接并模拟点击进行下载
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      // 下载成功提示
      ElMessage.success('下载成功')
    } else {
      ElMessage.error('下载失败：服务器未返回文件')
    }
  } catch (error) {
    // 显示具体的错误信息
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : '下载出错'
    ElMessage.error(errorMessage)
    console.error('下载出错', error)
  }
}

const download = async(row) => {
  await downloadFile(downloadSoldAccountRecord, row)
}

getTableData()

// 使用defineExpose暴露方法
defineExpose({
  getTableData
})

</script>
