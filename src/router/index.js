import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 组件
import Login from '@/views/login'
import Personal from '@/views/personal/index.vue'



let router = new VueRouter({

    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'personal',
            path: '/personal/:id',
            component: Personal,
        }
    ]

})
// 登录页面
router.beforeEach((to, from, next) => {

    console.log(to);
    if (to.name == 'personal') {
        //  获取token
        console.log(to);
        let token = localStorage.getItem('heima_toutiao');
        if (token) {
            next()
        } else {
            next({ path: '/login' })
        }
        
    }else{
        next()
    }
})

// 个人中心页面
// router.beforeEach((to, from, next) => {
//     if(){

//     }
// })
export default router