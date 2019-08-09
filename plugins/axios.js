import axios from 'axios'

const service = axios.create({
  baseURL: 'https://server.kooshua.com',
  timeout: 10000
})

// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(
  resp => {
    return resp
  },
  error => {
    if (error.response) {
      switch (error.response.states) {
        case 400: {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            alert(400)
          }
          break
        }
      }
    }
  }
)

export default service
