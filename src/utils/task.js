export const getStatusTag = (status) => {
  switch (status) {
    case 'Init': // 初始化状态
      return '#e6e6d0' // 淡淡的米黄色
    case 'Pending': // 等待中状态
      return '#e6e6d0' // 淡淡的米黄色
    case 'Success': // 成功状态
      return '#a0d468' // 中度绿色
    case 'Failed': // 失败状态
      return '#e57373' // 中度红色
    case 'Running': // 运行中状态
      return '#64b5f6' // 中度蓝色
    case 'Pause': // 暂停状态
      return '#ffb74d' // 中度橙色
    default: // 默认状态
      return '#e0e0e0' // 默认中等浅色
  }
}

export const getButtonType = (status) => {
  switch (status) {
    case 'Init':
      return 'info'
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

export const getButtonIcon = (status) => {
  switch (status) {
    case 'Init':
      return 'el-icon-help-filled'
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

export const getStatusButtonType = (status) => {
  switch (status) {
    case 'Pending':
      return '等待中'
    case 'Success':
      return '已完成'
    case 'Failed':
      return '执行失败'
    case 'Running':
      return '运行中'
    case 'Pause':
      return '已暂停'
    default:
      return ''
  }
}
