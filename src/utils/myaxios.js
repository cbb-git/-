
import axios from 'axios'



axios.defaults.baseURL = 'http://localhost:3000';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
   console.log(config);

   let token =  localStorage.getItem('heima_toutiao')
   if(token){
     config.headers.Authorization = token
   }
   return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 暴露                  create 每次都会创建新的实例
export default axios