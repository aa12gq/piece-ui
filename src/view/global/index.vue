<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="卡商配置"
      name="first"
    ><div class="w-full min-h-fit bg-white p-10 flex flex-col space-y-4">
      <div>system.firefox.config firefox卡商配置</div>
      <div>
        <el-input
          v-model="fireToken"
          placeholder="请填写token"
          class="w-[30rem]"
        />
      </div>
      <div>
        <el-button
          type="primary"
          @click="FireFoxSubmit"
        >保存</el-button>
      </div>
    </div></el-tab-pane>
    <el-tab-pane
      label="系统配置"
      name="second"
    >系统配置</el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { setFireFoxToken, getFireFoxToken } from '@/api/user'
import { ElMessage } from 'element-plus'

const fireToken = ref('')

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const FireFoxSubmit = async() => {
  const formData = new FormData()
  formData.append('token', fireToken.value)
  try {
    // 调用 API 并传入 FormData
    const res = await setFireFoxToken(formData)
    if (res.code === 0) {
      ElMessage.success('保存成功！')
      setTimeout(() => {
        RefreshFireFoxToken()
      }, 500)
    }

    // handleClose()
  } catch (error) {
    ElMessage.error(error.message || '保存失败')
  }
}

const RefreshFireFoxToken = async() => {
  const res = await getFireFoxToken()
  console.log('12e', res.data)
  fireToken.value = res.data
}

onMounted(() => {
  RefreshFireFoxToken()
})
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
