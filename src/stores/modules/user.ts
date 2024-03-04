import { ref } from 'vue'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { defineStore } from 'pinia'

// interface userInfo {
//     username: string,
//     password: string,
//     token: string
// }

export const useStore = defineStore('user', () => {
  const token = ref(getToken() || '')
  console.log(token)

  // 登录
  const login = async ({
    username,
    password
  }: {
    username: string
    password: string
  }): Promise<Object> => {
    console.log(username, password)
    const result = { username: 'admin', password: '123456', token: 'xxxxx' }

    setToken(result.token)
    const res = await { code: 200, data: true, msg: '登录成功' }
    return res
  }

  // 登出
  const loginout = () => {
    removeToken()
  }

  return { login, loginout }
})
