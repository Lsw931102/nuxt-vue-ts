import request from '~/plugins/axios'

// 获取验证码
export const getList = () => {
  return request({
    url: '/api/category/list',
    method: 'post'
  })
}
