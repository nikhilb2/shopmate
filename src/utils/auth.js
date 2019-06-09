import Cookies from 'js-cookie'

//save accessToken to cookies
export const saveAuth = accessToken => {
  Cookies.set('accessToken', accessToken, { expires: 1 })
}

//save user details to cookies
export const saveUserDetails = details => {
  Cookies.set('user', JSON.stringify(details), { expires: 1 })
}

//save cartid to cookies
export const saveCartId = cartId => {
  Cookies.set('cartId', JSON.stringify(cartId))
}

//get userdetails from cookies
export const getUserDetails = () => {
  const user = Cookies.get('user')
  //console.log('user client');
  //console.log(user);
  return user ? JSON.parse(user) : null
}

//get access token from cookies
export const getAccessToken = () => Cookies.get('accessToken')

//get cart id from cookies
export const getCartId = () => Cookies.get('cartId')

//remove cartid from cookies
export const removeCartId = () => Cookies.remove('cartId')

//get user details if server request
export const getServerUser = user => {
  //console.log('user server');
  //console.log(user);
  return {
    user: user.user ? JSON.parse(user.user) : null,
    cartId: user.cartId,
    accessToken: user.accessToken
  }
}

//remove user details
export const logout = () => {
  Cookies.remove('user')
  Cookies.remove('accessToken')
}
