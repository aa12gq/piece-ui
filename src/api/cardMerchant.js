import service from '@/utils/request'
// 获取账号分组列表
export const getCardMerchantInfoList = (page, pageSize) => {
  return service({
    url: `/cardMerchantInfo/getCardMerchantInfoList?page=${page}&pageSize=${pageSize}`,
    method: 'get',
  })
}

