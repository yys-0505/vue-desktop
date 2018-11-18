import { Loading, MessageBox } from 'element-ui'

let loadingInstance = null

export const setData = (key, value) => {
  if (typeof (value) === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getData = (key) => {
  let value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export const showLoading = () => {
  loadingInstance = Loading.service({
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0.7)',
    text: 'Loading...',
    spinner: 'el-icon-loading'
  })
}

export const hideLoading = () => {
  loadingInstance.close()
}

export const messageBoxAlert = (msg, confirmCallback) => {
  MessageBox.alert(msg, '提示', {
    confirmButtonText: '确定',
    closeOnClickModal: true,
    closeOnPressEscape: true,
    callback: action => {
      confirmCallback && confirmCallback()
    }
  })
}
