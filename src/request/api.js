import request from '@/request/request.js'
// 首页数据的请求
export const GetHomeLists = () => request.get('/index/index')
// 历史记录和热门搜索数据的请求
export const GetPopupData = () => request.get('/search/index')
// 请求搜索提示数据
export const GetSearchTipsListData = (params) => request.get('/search/helper', { params })
// 获取搜索产品内容
export const GetSearchData = (params) => request.get('/goods/list', { params })
