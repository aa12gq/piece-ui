import service from '@/utils/request'
export const getRegisterTaskList = (params) => {
  // params 包含 page, pageSize, taskName, sort, order 等
  const { page, pageSize, taskName, sort, order } = params
  let url = `/registerTask/getRegisterTaskList?page=${page}&pageSize=${pageSize}`
  if (taskName) url += `&taskName=${taskName}`
  if (sort) url += `&sort=${sort}&order=${order}` // 添加排序参数

  return service({
    url: url,
    method: 'get',
  })
}

export const createRegisterTask = (data) => {
  return service({
    url: `/registerTask/createRegisterTask`,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getSubTaskList = (page, pageSize, taskId, phone) => {
  return service({
    url: `/registerSubTask/getRegisterSubTaskList?page=${page}&pageSize=${pageSize}&main_task_id=${taskId}&phone_number=${phone}`,
    method: 'get',
  })
}

export const DownloadBlockedAccountsAsTxt = (taskId) => {
  return service({
    url: `/registerNumber/download/blocked/txt/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const DownloadBlockedAccountsAsExcel = (taskId) => {
  return service({
    url: `/registerNumber/download/blocked/excel/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const DownloadRiskControlAccountsAsTxt = (taskId) => {
  return service({
    url: `/registerNumber/download/riskcontrol/txt/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const DownloadRiskControlAccountsAsExcel = (taskId) => {
  return service({
    url: `/registerNumber/download/riskcontrol/excel/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const DownloadSuccessAccountsAsTxt = (taskId) => {
  return service({
    url: `/registerNumber/download/success/txt/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}

export const DownloadSuccessAccountsAsExcel = (taskId) => {
  return service({
    url: `/registerNumber/download/success/excel/${String(taskId)}`,
    method: 'get',
    responseType: 'blob',
  })
}
