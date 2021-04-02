import { request } from './request'
export function login (data) {
  return request({
    url: 'user/login',
    method: 'post',
    headers: {
      'Content-Type': 'mutipart/form-data'
    },
    data
  })
}
export function register (data) {
  return request({
    url: 'user/register',
    method: 'post',
    headers: {
      'Content-Type': 'mutipart/form-data'
    },
    data
  })
}
