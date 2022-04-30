import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://kumanxuan1.f3322.net:8001',
  timeout: 5000
})
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    // 携带登录凭证发起请求
    config.headers['X-Nideshop-Token'] = token
  }
  return config
}, err => {
  return Promise.reject(err)
})
instance.interceptors.response.use(res => {
  return res.data
}, err => { return Promise.reject(err) })

export default instance
