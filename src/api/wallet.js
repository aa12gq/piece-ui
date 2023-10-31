import service from '@/utils/request'

export const getUserWalletList = (page, pageSize, name) => {
  return service({
    url: `/userWallet/getUserWalletList?page=${page}&pageSize=${pageSize}&name=${name}`,
    method: 'get',
  })
}

export const getUserConsumptionList = (page, pageSize, name) => {
  return service({
    url: `/userConsumption/getUserConsumptionList?page=${page}&pageSize=${pageSize}&name=${name}`,
    method: 'get',
  })
}
