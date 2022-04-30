import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  // eslint-disable-next-line handle-callback-err
  return originalPush.call(this, location).catch(err => { })
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {

    path: '/home',
    name: 'Home',
    component: Home,
    meta: { activeNum: 0, isShowTabbar: true },
    children: [
      {
        path: '/home/searchPopup',
        name: 'SearchPopup',
        component: () => import('@/views/SearchPopup.vue')
      }
    ]
  },
  {
    path: '/topic',
    name: 'Topic',
    meta: { activeNum: 1, isShowTabbar: true },
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/category',
    name: 'Category',
    meta: { activeNum: 2, isShowTabbar: true },
    component: () => import('@/views/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { activeNum: 3, isShowTabbar: true },
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: { activeNum: 4, isShowTabbar: true },
    component: () => import('@/views/User.vue')
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 有token就表示已经登录
  // 想要进入购物车页面，必须有登录标识token
  // console.log('to:', to)
  // console.log('from:', from)
  const token = localStorage.getItem('token')
  if (to.path === '/cart') {
    // 此时必须要有token
    if (token) {
      next() // next()去到to所对应的路由界面
    } else {
      Vue.prototype.$toast('请先登录')
      // 定时器
      setTimeout(() => {
        next('/user') // 强制去到"/user"所对应的路由界面
      }, 1000)
    }
    return
  }

  // 如果不是去往购物车的路由，则直接通过守卫，去到to所对应的路由界面
  next()
})
export default router
