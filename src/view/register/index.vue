<template>
  <div class="authority">
    <warning-bar title="注：账号批量注册" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
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
        <el-button
          type="primary"
          icon="CirclePlus"
          @click="drawer = true"
        >新建任务</el-button>
        <!-- <el-button
          type="primary"
          icon="CirclePlus"
          @click="drawer = true"
        >导出账号</el-button> -->
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
          @click="getTableData()"
        >刷新</el-button>
      </div>
      <el-table
        :data="tableData"
        :tree-props="{children:'children',hasChildren:'hasChildren'}"
        row-key="authorityId"
        style="width:100%"
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
          <template #default="{row}">
            <el-button
              :type="getButtonType(row.status)"
              size="small"
              :loading-icon="Eleme"
              :loading="row.status=='Running'"
              :icon="getButtonIcon(row.status)"
              plain
            >{{ getStatusButtonType(row.status) }}</el-button>
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
          label="成功"
          min-width="180"
          prop="success_count"
        />
        <el-table-column
          align="left"
          label="封号"
          min-width="180"
          prop="blocked_count"
        />
        <el-table-column
          align="left"
          label="风控1小时"
          min-width="180"
          prop="risk_control_count"
        />
        <el-table-column
          align="left"
          label="总数"
          min-width="180"
          prop="totalNumber"
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
        <el-table-column
          align="left"
          label="操作"
          width="360"
          fixed="right"
        >
          <template #default="scope">
            <el-button
              icon="Files"
              type="primary"
              link
              @click="$router.push({name:'subtask',params:{id:scope.row.ID}})"
            >详情</el-button>
            <el-button
              icon="Edit"
              link
              type="primary"
            >更新并发数</el-button>
            <el-button
              icon="delete"
              type="primary"
              link
              :disabled="scope.row.status == 'Running'"
              @click="deleteTask(scope.row)"
            >删除</el-button>
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
                  <el-dropdown-item v-if="scope.row.nonDisabledAccounts>0&&scope.row.DisabledAccounts>0">什么都没有</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadBlockedAccountsAsTxt(scope.row)"
                  >下载封号账号(txt)</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadBlockedAccountsAsExcel(scope.row)"
                  >下载封号账号(xlsx)</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadRiskControlAccountsAsTxt(scope.row)"
                  >下载风控账号(txt)</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadRiskControlAccountsAsExcel(scope.row)"
                  >下载风控账号(xlsx)</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadSuccessAccountsAsTxt(scope.row)"
                  >下载成功账号(txt)</el-dropdown-item>
                  <el-dropdown-item
                    @click="downloadSuccessAccountsAsExcel(scope.row)"
                  >下载成功账号(xlsx)</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
          label="国家区号"
          prop="country"
        >
          <el-select
            v-model="form.country"
            filterable
            placeholder="请选择国家区号"
            style="width: 100%;"
          >
            <el-option
              v-for="item in countryCodes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
          <span
            class="text-sm text-orange-300 mt-2 "
          >当前可用并发数{{
            concurrencyInfo.concurrencyLimit -
              concurrencyInfo.currentConcurrency
          }}</span>
          <el-icon
            class="mt-2 cursor-pointer"
            :class="{ 'rotate': isRefreshing }"
            style="margin-left: 4px"
            :size="12"
            @click="RefreshAvailableConcurrency()"
          ><Refresh /></el-icon>
        </el-form-item>

        <!-- 标签和账号类型分为一行两列 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <!-- 标签选项 -->
            <el-form-item label="标签">
              <el-select
                v-model="form.tag"
                placeholder="请选择标签"
              >
                <el-option
                  label="首次卡"
                  value="firstCard"
                />
                <el-option
                  label="劫持号"
                  value="hijackNumber"
                />
                <el-option
                  label="二次卡"
                  value="secondCard"
                />
                <el-option
                  label="测试卡"
                  value="testCard"
                />
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <!-- 标签和账号类型分为一行两列 -->
        <el-row :gutter="20" />
        <el-form-item label="任务操作">
          <el-radio-group v-model="form.immediate">
            <el-radio :label="true">立即开始</el-radio>
            <el-radio :label="false">仅创建任务</el-radio>
          </el-radio-group>
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
          >
            提交
          </el-button>

          <el-button
            icon="RefreshLeft"
            class="w-[7rem] rounded"
            @click="resetForm"
          >
            重置
          </el-button>
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
  getRegisterTaskList,
  createRegisterTask,
  DownloadBlockedAccountsAsTxt,
  DownloadBlockedAccountsAsExcel,
  DownloadRiskControlAccountsAsTxt,
  DownloadRiskControlAccountsAsExcel,
  DownloadSuccessAccountsAsTxt,
  DownloadSuccessAccountsAsExcel,
  deleteRegisterTask
} from '@/api/registerTask'
import WarningBar from '@/components/warningBar/warningBar.vue'
import { formatTimeToStr } from '@/utils/date'
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  getAvailableConcurrency,
} from '@/api/user'

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
  name: 'Register',
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
const searchText = ref('')
const currentSearchText = ref('')
const isRefreshing = ref(false)
const handlePageChange = (val) => {
  page.value = val
  getTableData()
}

const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const concurrencyInfo = ref({
  concurrencyLimit: 0,
  currentConcurrency: 0
})

const RefreshAvailableConcurrency = async() => {
  isRefreshing.value = true

  const res = await getAvailableConcurrency()
  concurrencyInfo.value = res.data
  setTimeout(() => {
    isRefreshing.value = false
  }, 1000)
}

const getTableData = async(sortProp, sortOrder) => {
  const table = await getRegisterTaskList({
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
      console.log(tableData.value)

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

// 删除任务
const deleteTask = (row) => {
  ElMessageBox.confirm('此操作将永久删除该任务及相关账号, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async() => {
      const res = await deleteRegisterTask({ ID: row.ID })
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

const countryCodes = [
  { label: '中国 (China) (+86)', value: '+86' },
  { label: '美国 (United States) (+1)', value: '+1' },
  { label: '加拿大 (Canada) (+1)', value: '+1' },
  { label: '俄罗斯 (Russia) (+7)', value: '+7' },
  { label: '埃及 (Egypt) (+20)', value: '+20' },
  { label: '南非 (South Africa) (+27)', value: '+27' },
  { label: '希腊 (Greece) (+30)', value: '+30' },
  { label: '荷兰 (Netherlands) (+31)', value: '+31' },
  { label: '比利时 (Belgium) (+32)', value: '+32' },
  { label: '法国 (France) (+33)', value: '+33' },
  { label: '西班牙 (Spain) (+34)', value: '+34' },
  { label: '匈牙利 (Hungary) (+36)', value: '+36' },
  { label: '意大利 (Italy) (+39)', value: '+39' },
  { label: '罗马尼亚 (Romania) (+40)', value: '+40' },
  { label: '瑞士 (Switzerland) (+41)', value: '+41' },
  { label: '奥地利 (Austria) (+43)', value: '+43' },
  { label: '英国 (United Kingdom) (+44)', value: '+44' },
  { label: '丹麦 (Denmark) (+45)', value: '+45' },
  { label: '瑞典 (Sweden) (+46)', value: '+46' },
  { label: '挪威 (Norway) (+47)', value: '+47' },
  { label: '波兰 (Poland) (+48)', value: '+48' },
  { label: '德国 (Germany) (+49)', value: '+49' },
  { label: '秘鲁 (Peru) (+51)', value: '+51' },
  { label: '墨西哥 (Mexico) (+52)', value: '+52' },
  { label: '古巴 (Cuba) (+53)', value: '+53' },
  { label: '阿根廷 (Argentina) (+54)', value: '+54' },
  { label: '巴西 (Brazil) (+55)', value: '+55' },
  { label: '智利 (Chile) (+56)', value: '+56' },
  { label: '哥伦比亚 (Colombia) (+57)', value: '+57' },
  { label: '委内瑞拉 (Venezuela) (+58)', value: '+58' },
  { label: '马来西亚 (Malaysia) (+60)', value: '+60' },
  { label: '澳大利亚 (Australia) (+61)', value: '+61' },
  { label: '印度尼西亚 (Indonesia) (+62)', value: '+62' },
  { label: '菲律宾 (Philippines) (+63)', value: '+63' },
  { label: '新西兰 (New Zealand) (+64)', value: '+64' },
  { label: '新加坡 (Singapore) (+65)', value: '+65' },
  { label: '泰国 (Thailand) (+66)', value: '+66' },
  { label: '日本 (Japan) (+81)', value: '+81' },
  { label: '韩国 (South Korea) (+82)', value: '+82' },
  { label: '越南 (Vietnam) (+84)', value: '+84' },
  { label: '土耳其 (Turkey) (+90)', value: '+90' },
  { label: '印度 (India)(+91)', value: '+91' },
  { label: '巴基斯坦 (Pakistan) (+92)', value: '+92' },
  { label: '阿富汗 (Afghanistan) (+93)', value: '+93' },
  { label: '斯里兰卡 (Sri Lanka) (+94)', value: '+94' },
  { label: '缅甸 (Myanmar) (+95)', value: '+95' },
  { label: '伊朗 (Iran) (+98)', value: '+98' },
  { label: '摩洛哥 (Morocco) (+212)', value: '+212' },
  { label: '阿尔及利亚 (Algeria) (+213)', value: '+213' },
  { label: '突尼斯 (Tunisia) (+216)', value: '+216' },
  { label: '利比亚 (Libya) (+218)', value: '+218' },
  { label: '冈比亚 (Gambia) (+220)', value: '+220' },
  { label: '塞内加尔 (Senegal) (+221)', value: '+221' },
  { label: '毛里塔尼亚 (Mauritania) (+222)', value: '+222' },
  { label: '马里 (Mali) (+223)', value: '+223' },
  { label: '几内亚 (Guinea) (+224)', value: '+224' },
  { label: '科特迪瓦 (Ivory Coast) (+225)', value: '+225' },
  { label: '布基纳法索 (Burkina Faso) (+226)', value: '+226' },
  { label: '尼日尔 (Niger) (+227)', value: '+227' },
  { label: '多哥 (Togo) (+228)', value: '+228' },
  { label: '贝宁 (Benin) (+229)', value: '+229' },
  { label: '毛里求斯 (Mauritius) (+230)', value: '+230' },
  { label: '利比里亚 (Liberia) (+231)', value: '+231' },
  { label: '塞拉利昂 (Sierra Leone) (+232)', value: '+232' },
  { label: '加纳 (Ghana) (+233)', value: '+233' },
  { label: '尼日利亚 (Nigeria) (+234)', value: '+234' },
  { label: '乍得 (Chad) (+235)', value: '+235' },
  { label: '中非共和国 (Central African Republic) (+236)', value: '+236' },
  { label: '喀麦隆 (Cameroon) (+237)', value: '+237' },
  { label: '佛得角 (Cape Verde) (+238)', value: '+238' },
  { label: '圣多美和普林西比 (São Tomé and Príncipe) (+239)', value: '+239' },
]

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
  country: '',
  concurrency: 1,
  file: null,
  tag: 1,
  immediate: true, // 默认为立即开始
})

const rules = {
  taskName: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
  file: [{ required: true, message: '请上传文件', trigger: 'change' }],
  countryCode: [
    { required: true, message: '请选择国家区号', trigger: 'change' }
  ],
  concurrency: [
    { required: true, message: '请输入并发数', trigger: 'blur' },
    { type: 'number', message: '并发数必须为数字值', trigger: 'blur' }
  ],
}

const submitForm = async() => {
  const valid = await formRef.value.validate()
  if (!valid) return

  // 创建一个 FormData 对象
  const formData = new FormData()
  formData.append('taskName', form.taskName)
  formData.append('country', form.country)
  formData.append('concurrency', form.concurrency)
  formData.append('tag', form.tag)
  formData.append('immediate', form.immediate)
  // 检查是否有文件要上传
  if (form.file) {
    formData.append('file', form.file, form.file.name)
  }

  try {
    console.log(form)
    // 调用 API 并传入 FormData
    await createRegisterTask(formData)
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

// 以TXT格式下载被封锁的帐号
const downloadBlockedAccountsAsTxt = async(row) => {
  await downloadFile(DownloadBlockedAccountsAsTxt, row, '封锁账号.txt')
}

// 以excel格式下载被封锁的帐户
const downloadBlockedAccountsAsExcel = async(row) => {
  await downloadFile(DownloadBlockedAccountsAsExcel, row, '封锁账号.xlsx')
}

// 以TXT格式下载风控账户
const downloadRiskControlAccountsAsTxt = async(row) => {
  await downloadFile(DownloadRiskControlAccountsAsTxt, row, '风控账号.txt')
}

// 以excel格式下载风控账目
const downloadRiskControlAccountsAsExcel = async(row) => {
  await downloadFile(DownloadRiskControlAccountsAsExcel, row, '风控账号.xlsx')
}

// 以excel格式下载成功账目
const downloadSuccessAccountsAsTxt = async(row) => {
  await downloadFile(DownloadSuccessAccountsAsTxt, row, '成功账号.txt')
}

// 以excel格式下载成功账目
const downloadSuccessAccountsAsExcel = async(row) => {
  await downloadFile(DownloadSuccessAccountsAsExcel, row, '成功账号.xlsx')
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

.rotate {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

