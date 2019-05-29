import jsCookie from 'js-cookie'

const fname = jsCookie.get('fname')
const lname = jsCookie.get('lname')
const id = jsCookie.get('userid')
const email = jsCookie.get('email')
const jwt = jsCookie.get('jwt')

export default {
  fname,
  lname,
  id,
  email,
  jwt
}
