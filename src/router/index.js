import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 组件
import Login from '@/views/login'


let router = new VueRouter({
 
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login
        }
    ]

}) 
export default router