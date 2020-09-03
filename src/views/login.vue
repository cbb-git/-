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
       <myinp type="text" placeholder="请输入用户名"  v-model="user.username"></myinp>
       <myinp type="password" placeholder="请输入密码" v-model="user.password"></myinp>
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
import mybut from '../components/mybutton'
import myinp from '../components/myinput'
// 引入axios 封装文件
import myaxios from '../utils/myaxios'
// 引入 vant
import { Toast  } from 'vant';
import 'vant/lib/index.css';
export default {
  // 注册
  components: {
    mybut,myinp
  },
 data () {
    return {
     user:{
       username:'',
       password:'',
     }
    }
  },
  methods: {
    login(e){
    console.log(this.user.name,this.user.pass);
                  // 因为user本身就是对象 
     myaxios.post('/login',this.user)
     .then ((res)=>{
      if(res.data.statusCode == 401){
        Toast.success('登录失败·');
      }else{
        Toast.success('登录成功');
      }
     })
     .catch((err)=>{
        
     })
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

