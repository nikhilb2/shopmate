import Cookies from 'js-cookie'

export const saveAuth = accessToken => {
  Cookies.set('accessToken', accessToken, { expires: 1 })
}

export const saveUserDetails = details => {
  Cookies.set('user', JSON.stringify(details))
}

export const getUserDetails = () => {
  const user = Cookies.get('user')
  return user ? JSON.parse(user) : null
}

export const getAccessToken = () => Cookies.get('accessToken')

export const logout = () => {
  Cookies.remove('user')
  Cookies.remove('accessToken')
}
