import request from '@/request/request.js'
// 首页数据的请求
export const GetHomeLists = () => request.get('/index/index')
// 历史记录和热门搜索数据的请求
export const GetPopupData = () => request.get('/search/index')
// 请求搜索提示数据
export const GetSearchTipsListData = (params) => request.get('/search/helper', { params })
// 获取搜索产品内容
export const GetGoodsListData = (params) => request.get('/goods/list', { params })
// 删除历史记录
export const ClearHistory = () => request.post('/search/clearhistory')
// 登录请求
export const GoLogin = params => request.post('/auth/loginByWeb', params)
// 商品详情
export const GetGoodsDetailData = params => request.get('/goods/detail', { params })
// 相关产品
export const GetGoodsRelatedData = params => request.get('/goods/related', { params })
// 购物车商品数量
export const GetGoodsCount = () => request.get('/cart/goodscount')
// 添加到购物车
export const AddToCart = params => request.post('/cart/add', params)
