import Cookies from 'js-cookie'

const v3Token = 'V3-token'

export const getToken = (): string | undefined => {
  return Cookies.get(v3Token)
}

export const setToken = (token: string) => {
  Cookies.set(v3Token, token)
}

export const removeToken = () => {
  Cookies.remove(v3Token)
}
