
import fetch from 'dva/fetch'
import { heard } from "./utils";
import { notification } from 'antd'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
}

export default function fileExport(url, options) {
  const defaultOptions = {
    mode: 'cors',
  }
  const newOptions = { ...defaultOptions, ...options }
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    const { nickName, token, userId, userName, userNo, companyNo, companyName } = heard()
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Basic ${token}`,
      ...newOptions.headers,
    }
    newOptions.body = JSON.stringify(newOptions.body)
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then((response) => {
       response.blob().then((blob) => {
        const a = document.createElement('a')
        const downUrl = window.URL.createObjectURL(blob)
        let filename = JSON.parse(newOptions.body).fileName
        if (filename.indexOf('.') > 0) {
          filename = filename.split('.')[0]
        }
        a.href = downUrl
        a.download = `${filename}.xlsx`
         // 触发点击
        document.body.appendChild(a)
        a.click()
        // 然后移除
        document.body.removeChild(a)
        window.URL.revokeObjectURL(downUrl)
      })
    })
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        })
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        })
      }
      return error
    })
}
