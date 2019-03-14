import fetch from 'dva/fetch';
import { notification } from 'antd';
import { routerRedux } from 'dva/router'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  notification.error({
    message: '请求失败',
    description: codeMessage[response.status],
  })
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


export default function request(url, options) {
  const defaultOptions = {
    mode: 'cors',
  }
  const newOptions = { ...defaultOptions, ...options }
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      // 'Authorization': `Basic ${token}`,
      ...newOptions.headers,
    }
    newOptions.body = JSON.stringify(newOptions.body)
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then((response) => {
      const jsonPromise = response.json()
      return jsonPromise.then((json) => {
        if (typeof json.module === 'object' || typeof json.module === 'boolean' || typeof json.module === 'number') {
          if (json.success) {
            return json
          } else {notification.error({
            message: '操作提示',
            description: <div dangerouslySetInnerHTML={{ __html: json.errorMessage }}></div>,
          })
          return json
          }
        } else {
          return jsonPromise
        }
      })
    })
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        })
      }
      return error
    })
}
