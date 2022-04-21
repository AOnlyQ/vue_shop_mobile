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
    // redirect: '/index',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {

        path: '/home',
        name: 'Home',
        component: Home,
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
        component: () => import('@/views/Topic.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/Category.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/Cart.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User.vue')
      }
    ]
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

export default router
