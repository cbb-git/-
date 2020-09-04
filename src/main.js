import Vue from 'vue'
import App from './App.vue'
// 在main.js 引入 就是全局引入
import '@/style/styles/reset.less'

Vue.config.productionTip = false

// 引入
import router from './router/index.js'

// 我们在全局中引入 vant
import { Toast } from "vant"
Vue.use(Toast)

new Vue({
  // 注入
  router,
  render: h => h(App),
}).$mount('#app')
