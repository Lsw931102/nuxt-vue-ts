import request from '~/plugins/axios'

// 获取验证码
export const getList = params => {
  return request({
    url: '/api/index/list',
    params,
    method: 'post'
  })
}
