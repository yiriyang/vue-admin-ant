import { type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'

export const asyncRoute: RouteRecordRaw[] = [
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
        component: () => import('@/views/user-center/User.vue'),
        meta: { title: '用户中心' }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/user-center/Menu.vue'),
        meta: { title: '菜单中心' },
        children: [
          {
            path: 'set-menu',
            name: 'SetMenu',
            component: () => import('@/views/user-center/SetMenu.vue'),
            meta: { title: '设置菜单' }
          }
        ]
      }
    ]
  }
]
