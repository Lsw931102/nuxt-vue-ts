import request from '~/plugins/axios'

// 获取验证码
export const getVerifyCode = params => {
  return request({
    url: '/api/index/list',
    params,
    method: 'post'
  })
}
