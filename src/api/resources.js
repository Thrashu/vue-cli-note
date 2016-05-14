import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'
import { signOut } from '../utils/authService'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {
  withCredentials: true
}

Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
    return response
  }
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'login')
