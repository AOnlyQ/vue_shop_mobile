import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://kumanxuan1.f3322.net:8001',
  timeout: 5000
})
instance.interceptors.request.use(config => {
  // if()
  return config
}, err => {
  return Promise.reject(err)
})
instance.interceptors.response.use(res => {
  return res.data
}, err => { return Promise.reject(err) })

export default instance
