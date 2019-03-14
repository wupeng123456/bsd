// localstorage  存入 删除 获取
const STORE_PREFIX = "adp";
import config from "./config"
// 获取
export function getLocalStorage(key) {
  if (
    window.localStorage.getItem(`${STORE_PREFIX}-version`) !== config.version
  ) {
    window.localStorage.clear();
    window.localStorage.setItem(`${STORE_PREFIX}-version`, config.version);
  }
  return window.localStorage.getItem(`${STORE_PREFIX}-${key}`);
}
// 存入
export function setLocalStorage(key, value) {
  window.localStorage.setItem(`${STORE_PREFIX}-${key}`, value);
}
// 删除
export function removeLocalStorage(key) {
  window.localStorage.removeItem(`${STORE_PREFIX}-${key}`);
}

// 权限判断
export function requireAuth() {
    if (checkEmpty(getLocalStorage("token"))) {
      return false;
    } else {
      return true;
    }
}
// 字符串去空
export function checkEmpty(data) {
    if (!data || data.trim() === "") {
      return true;
    } else {
      return false;
    }
}