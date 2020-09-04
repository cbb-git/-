// 用户处理 用户的信息  封装
// 我们 引入myaxios页面 
import axios from '@/utils/myaxios.js'


export const login = function(data){
// 这个方法会返回一个 promise对象
   return axios({
        method: 'post',
      url: '/login',
      data 
    })

}