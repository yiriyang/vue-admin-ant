import router from './index'
import { getToken } from '@/utils/cookies'

router.beforeEach((to, from, next) => {
  console.log(to, from)

  const token = getToken()
  if (token) {
    // 如果已经登陆，进入主页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  console.log('路由之后')
})
