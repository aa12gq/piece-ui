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
