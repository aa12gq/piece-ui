import service from '@/utils/request'

// 创建账号代理
export const createProxyInfo = (data) => {
  return service({
    url: `/ProxyInfo/createProxyInfo`,
    method: 'post',
    data
  })
}

// 删除账号代理
export const deleteProxyInfo = (id) => {
  return service({
    url: `/ProxyInfo/deleteProxyInfo/${String(id)}`,
    method: 'delete',
  })
}

// 批量删除账号代理
export const deleteProxyInfoByIds = (params) => {
  return service({
    url: `/ProxyInfo/deleteProxyInfoByIds`,
    method: 'delete',
    params
  })
}

// 更新账号代理
export const updateProxyInfo = (data) => {
  return service({
    url: `/ProxyInfo/updateProxyInfo`,
    method: 'put',
    data
  })
}

// 根据ID获取账号代理
export const findProxyInfo = (id) => {
  return service({
    url: `/ProxyInfo/findProxyInfo/${String(id)}`,
    method: 'get',
  })
}

// 获取账号代理列表
export const getProxyInfoList = (page, pageSize) => {
  return service({
    url: `/ProxyInfo/getProxyInfoList?page=${page}&pageSize=${pageSize}`,
    method: 'get',
  })
}
