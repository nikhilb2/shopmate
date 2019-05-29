//import { getJwt } from './auth'
const url = 'https://backendapi.turing.com/'
export let parseJSONResponse = null
function parseJSON(response) {
  parseJSONResponse = response
  return response.json().catch(ex => {
    const error = new Error(ex)
    error.response = response
    error.jsonFailed = true
    throw error
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  error.httpErrCode = response.status
  throw error
}

export default function request(param, options) {
  const urlTofetch = url+param
  const decoratedOptions = Object.assign({}, options)
  decoratedOptions.headers = decoratedOptions.headers || {}
  //  decoratedOptions.headers.jwt = getJwt()
  console.log(decoratedOptions)
  return fetch(urlTofetch, decoratedOptions) // eslint-disable-line
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }))
}
