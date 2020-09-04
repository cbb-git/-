// 用户处理 用户的信息  封装
// 我们 引入myaxios页面 
import axios from '@/utils/myaxios.js'

// 用户登录
export const fnlogin = function (data) {
  // 这个方法会返回一个 promise对象
  return axios({
    method: 'post',
    url: '/login',
    data
  })

}

// 个人中心personal
export const personal = function (id) {

  return axios({

    url: `/user/${id}`,
    // headers: { Authorization: localStorage.getItem('heima_toutiao') }
  })
}