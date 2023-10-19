import service from '@/utils/request'
// @Router /register/getRegisterTaskList [get]
export const getSieveTaskList = (page, pageSize, taskName) => {
  return service({
    url: `/sieveTask/getSieveTaskList?page=${page}&pageSize=${pageSize}&taskName=${taskName}`,
    method: 'get',
  })
}

export const createSieveTask = (data) => {
  return service({
    url: `/sieveTask/createSieveTask`,
    method: 'post',
    data
  })
}

export const getSievenNumberList = (page, pageSize, taskId) => {
  return service({
    url: `/sievenNumber/getSievenNumberList?page=${page}&pageSize=${pageSize}&task_id=${taskId}`,
    method: 'get',
  })
}

export const deleteByTaskId = (taskId) => {
  return service({
    url: `/sievenNumber/deleteByTaskId/${String(taskId)}`,
    method: 'delete',
  })
}
