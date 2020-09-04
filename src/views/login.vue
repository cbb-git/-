<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <!-- 我们需要加入正则验证 -->
        <myinp type="text" placeholder="请输入用户名"
         v-model="user.username"
         :rules='/^1[35789]\d{9}$|^1\d{4,5}$/'
         msgno='手机号输入不合法'
         msgyes='手机号输入合法'
         ></myinp>

        <myinp type="password" 
        placeholder="请输入密码" 
        v-model="user.password"
         :rules='/^\w{3,4}$/'
         msgno='密码输入不合法'
         msgyes='密码输入合法'
        ></myinp>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <!-- 接收子组件传送的信息 -->
      <mybut @click="login">登录</mybut>
    </div>
  </div>
</template> 

<script>
// 引入按钮
import mybut from "@/components/mybutton";
import myinp from "@/components/myinput";
// 引入axios 封装文件
// import myaxios from "@/utils/myaxios";
// 引入方法login
import {login} from '@/apis/users.js';

// 引入 vant
// import { Toast } from "vant";
// 可以不用引入
// import 'vant/lib/index.css';
export default {
  // 注册
  components: {
    mybut,
    myinp,
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 得标记是async
   async login() {
//  await 可以上异步操作先执行完 在执行后续的代码
      let result = await login(this.user)
       console.log(result); 
    if(result.data.statusCode == '401'){
      this.$toast.fail('登录失败') 
    }else{
      this.$toast.success('登陆成功')
    }
  },
    
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  .inputs-1 {
    color: blue;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>

