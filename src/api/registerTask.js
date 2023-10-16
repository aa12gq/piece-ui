import service from '@/utils/request'
// @Router /register/getRegisterTaskList [get]
export const getRegisterTaskList = (page, pageSize) => {
  return service({
    url: `/registerTask/getRegisterTaskList?page=${page}&pageSize=${pageSize}`,
    method: 'get',
  })
}

export const createRegisterTask = (data) => {
  return service({
    url: `/registerTask/createRegisterTask`,
    method: 'post',
    data
  })
}
