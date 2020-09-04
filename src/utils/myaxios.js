
import axios from 'axios'

// 暴露                  create 每次都会创建新的实例
export default axios.create({
    baseURL: 'http://localhost:3000',
})