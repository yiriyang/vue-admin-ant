import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/sys/Login.vue'),
    meta: {
      hiden: true,
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '控制台'
    },
    children: [
      {
        path: 'dashboard',
        name: '控制台',
        component: () => import('../views/dashboard/Information.vue'),
        meta: {
          title: '控制台详情'
        }
      }
    ]
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Layout,
    meta: { title: '页面一' },
    children: [
      {
        path: 'page1-1',
        name: 'Page1',
        component: () => import('../views/pages/PageOne.vue'),
        meta: {
          title: '页面一'
        }
      }
    ]
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import('../views/pages/PageTwo.vue'),
    meta: {
      title: '页面二'
    }
  },
  {
    path: '/user-center',
    name: 'UserCenter',
    component: Layout,
    redirect: '/user-center/User',
    meta: { title: '设置中心' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/user-center/User.vue'),
        meta: { title: '用户中心' }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('../views/user-center/Menu.vue'),
        meta: { title: '菜单中心' },
        children: [
          {
            path: 'set-menu',
            name: 'SetMenu',
            component: () => import('../views/user-center/SetMenu.vue'),
            meta: { title: '设置菜单' }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
