// 引入基准路径
import axios from '../utils/myaxios.js'

export const fileupload = (data) => {

    return axios({
        method: 'post',
        url: '/upload',
        data
    });


}