import axios from 'axios'
import qs from 'query-string'
import {API_HOST} from "../config"

//global defaults
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//interceptor
axios.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  // Do something with response data

  return response
},error => {
  return Promise.reject(error)
})

//method
function fetch(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response.data)
      }, reject)
  })
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response) => {
        resolve(response.data)
      }, reject)
  })
}

//api
export function getData(params) {
  return fetch(`${API_HOST}/api/getData?${qs.stringify(params)}`)
}
export function postData(data) {
  return post(`${API_HOST}/api/postData`,data)
}
