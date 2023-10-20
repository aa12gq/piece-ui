import service from '@/utils/request'
// @Router /register/getRegisterTaskList [get]
export const getSieveTaskList = (page, pageSize, taskNam) => {
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

export const findSieveTask = (id) => {
  console.log(id)
  return service({
    url: `/sieveTask/findSieveTask/${id}`,
    method: 'get',
  })
}

export const deleteSieveTask = (data) => {
  return service({
    url: `/sieveTask/deleteSieveTask`,
    method: 'delete',
    data
  })
}

export const getSievenNumberList = (page, pageSize, taskId, phone) => {
  return service({
    url: `/sievenNumber/getSievenNumberList?page=${page}&pageSize=${pageSize}&task_id=${taskId}&phone_number=${phone}`,
    method: 'get',
  })
}

export const deleteByTaskId = (taskId) => {
  return service({
    url: `/sievenNumber/deleteByTaskId/${String(taskId)}`,
    method: 'delete',
  })
}
