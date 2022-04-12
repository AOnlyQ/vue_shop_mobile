import request from '@/request/request.js'
// 首页数据的请求
export const GetHomeLists = () => request.get('/index/index')
