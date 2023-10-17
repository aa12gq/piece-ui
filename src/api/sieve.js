import service from '@/utils/request'
// @Router /register/getRegisterTaskList [get]
export const getSieveTaskList = (page, pageSize) => {
  return service({
    url: `/sieveTask/getSieveTaskList?page=${page}&pageSize=${pageSize}`,
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

export const getSievenNumberList = (page, pageSize) => {
  return service({
    url: `/sievenNumber/getSievenNumberList?page=${page}&pageSize=${pageSize}`,
    method: 'get',
  })
}
