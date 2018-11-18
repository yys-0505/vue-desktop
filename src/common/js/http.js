import Vue from 'vue'
import axios from 'axios'
import { showLoading, hideLoading, messageBoxAlert } from './utils'

axios.defaults.timeout = 3000
let api = {}
Vue.prototype.$axios = api

// let baseUrl = ''
if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {

}
let defaultParams = {
  'INFO': {
    'appid': ''
  }
}
let defaultConfig = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}
api.post = (url, params = defaultParams, config = defaultConfig) => {
  return new Promise((resolve, reject) => {
    showLoading()
    axios.post(url, params, config).then(res => {
      hideLoading()
      if (res.status === 200) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          messageBoxAlert(res.data.message)
          reject(res.data.message)
        }
      } else {
        messageBoxAlert(res.statusText)
        reject(res.statusText)
      }
    }).catch(err => {
      hideLoading()
      messageBoxAlert(err)
      reject(err)
    })
  })
}
