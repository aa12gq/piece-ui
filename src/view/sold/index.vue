<template>
  <div class="gva-table-box">
    <div class="p-3">
      <el-button
        type="primary"
        @click="openDialog('export')"
      >导出账号</el-button>
      <el-button
        type="primary"
        @click="clear"
      >一键清空卖号记录</el-button>
      <el-button
        type="info"
        @click="refreshSubcomponent"
      >刷新一下</el-button>
      <!-- <el-button type="danger">全量导出不标已售</el-button>
      <el-button type="danger">全量删除已售账号</el-button> -->
    </div>
    <el-tabs
      v-model="activeName"
      type="card"
      stretch
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="库存"
        name="first"
        class="-mt-4"
      >
        <soldAccout ref="soldAccoutRef" />
      </el-tab-pane>
      <el-tab-pane
        label="卖号记录"
        name="second"
      ><soldAccountRecord ref="soldAccountRecordRef" /></el-tab-pane>
    </el-tabs>
    <el-dialog
      v-model="dialogFormVisible"
      :before-close="closeDialog"
      :title="dialogTitle"
    >
      <el-form
        ref="Form"
        :model="form"
        label-width="80px"
        class="space-y-6"
      >
        <el-select
          v-model="form.country_id"
          filterable
          placeholder="请选择国家区号"
          style="width: 100%"
        >
          <el-option
            v-for="item in countryInfoList"
            :key="item.ID"
            :label="`${item.code} ${item.name} ${item.dialingCode}`"
            :value="item.ID"
          />
        </el-select>
        <el-select
          v-model="form.group_ids"
          placeholder="请选择分组"
          multiple
          class="w-full"
        >
          <el-option
            v-for="item in accoutGroupInfo"
            :key="item.ID"
            :label="item.name"
            :value="item.ID"
          />
        </el-select>
        <el-select
          v-model="form.tag_ids"
          placeholder="请选择标签"
          multiple
          class="w-full"
        >
          <el-option
            v-for="item in accoutTagInfo"
            :key="item.ID"
            :label="item.name"
            :value="item.ID"
          />
        </el-select>
        <el-input
          v-model="form.count"
          placeholder="导出数量"
          autocomplete="off"
        />
        <el-select
          v-model="form.format"
          placeholder="导出格式"
          class="w-full"
        >
          <el-option
            :key="1"
            label="6列数据格式(逗号分割)"
            :value="1"
          />
          <el-option
            :key="2"
            label="007数据格式(xlex)"
            :value="2"
          />
        </el-select>
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
  </div>
</template>
<script lang="ts" setup>
import { exportAccount, clearAccountRecord } from '@/api/soldAccount'
import soldAccountRecord from './record.vue'
import soldAccout from './soldAccount.vue'
import { ref, nextTick } from 'vue'
import { getCountryInfoList } from '@/api/country'

import WarningBar from '@/components/warningBar/warningBar.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getAccountTagInfoList } from '@/api/accoutTag'
import { getAccountGroupInfoList } from '@/api/accoutGroup'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const countryInfoList = ref([])
const refreshCountryInfoList = async() => {
  const result = await getCountryInfoList(1, 300)
  if (result.code === 0 && Array.isArray(result.data.list)) {
    countryInfoList.value = []
    setTimeout(() => {
      countryInfoList.value = result.data.list
    }, 100)
    total.value = result.data.total
    page.value = result.data.page
    pageSize.value = result.data.pageSize
  }
}
const soldAccountRecordRef = ref(null)
const soldAccoutRef = ref(null)
const refreshSubcomponent = () => {
  if (soldAccoutRef.value) {
    soldAccoutRef.value.getTableData();
  }
  if (soldAccountRecordRef.value) {
    soldAccountRecordRef.value.getTableData();
  }
}

const handlePageChange = (val) => {
  page.value = val
}

const handleSizeChange = (val) => {
  pageSize.value = val
}

const form = ref({
  count: null,
  country_id: '',
  format: null,
  tag_ids: [],
  group_ids: [],
})
const Form = ref(null)
const initForm = () => {
  // 使用 nextTick 确保在 DOM 更新完成后执行 resetFields
  nextTick(() => {
    // 检查 Form.value 是否已经被正确设置为表单实例
    if (Form.value) {
      Form.value.resetFields()
    } else {
      // 如果 Form.value 是 null，这可能意味着 <el-form> 还未挂载
      // 或 ref="Form" 未能正确绑定。请检查你的模板部分。
      console.error('The form reference \'Form\' is not available.')
    }
  })

  // 刷新账户组信息和标签信息
  refreshAccoutGroupInfo()
  refreshAccoutTagInfo()
  refreshCountryInfoList()

  // 重置 form 对象以匹配默认值
  form.value = {
    count: null,
    country_id: null,
    format: null,
    tag_ids: [],
    group_ids: [],
  }
}

const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
}

const dialogTitle = ref('导出账号')
const dialogFormVisible = ref(false)
const type = ref('')
const openDialog = (key) => {
  switch (key) {
    case 'export':
      dialogTitle.value = '导出账号'
      break
    case 'edit':
      dialogTitle.value = '编辑'
      break
    default:
      break
  }
  type.value = key
  dialogFormVisible.value = true
  initForm()
}

const accoutGroupInfo = ref([])
// 查询
const refreshAccoutGroupInfo = async() => {
  const result = await getAccountGroupInfoList(1, 100)
  if (result.code === 0 && Array.isArray(result.data.list)) {
    accoutGroupInfo.value = []
    setTimeout(() => {
      accoutGroupInfo.value = result.data.list
    }, 100)
    total.value = result.data.total
    page.value = result.data.page
    pageSize.value = result.data.pageSize
  }
}

const accoutTagInfo = ref([])

const refreshAccoutTagInfo = async() => {
  const info = await getAccountTagInfoList(1, 100)
  if (info.code === 0) {
    accoutTagInfo.value = []
    setTimeout(() => {
      accoutTagInfo.value = info.data.list
    }, 100)
    total.value = info.data.total
    page.value = info.data.page
    pageSize.value = info.data.pageSize
  }
}

// 文件下载函数
// 通用的下载文件函数
const downloadFile = async(downloadFunc) => {
  // 显示准备下载的消息
  ElMessage.info('准备下载，请稍候...')

  try {
    const response = await downloadFunc()
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

const enterDialog = async() => {
  await Form.value.validate(async(valid) => {
    if (valid) {
      switch (type.value) {
        case 'export':
          await downloadFile(() => exportAccount(form.value))
          setTimeout(() => {
            closeDialog()
          }, 500)
          break
        case 'edit':
          break
        default:
          ElMessage({
            type: 'error',
            message: '未知操作',
            showClose: true,
          })
          break
      }
    }
  })
}

const clear = (row) => {
  ElMessageBox.confirm('此操作将永久删除所有卖号记录, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await clearAccountRecord()
      if (res.code === 0 || res == null) {
        ElMessage({
          type: 'success',
          message: '清除成功 !',
        })
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
