<template>
  <div class="personal">
    <router-link to="/edit_profile">
      <div class="profile">
        <!-- 從数据库获得的动态的值 -->
        <img :src='defaults + imgurl' alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{name}}
          </div>
          <div class="time">2019-9-24</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <myline texts='我的关注' del='关注的用户'></myline>
    <myline texts='我的跟帖' del='跟帖/回复'></myline>
    <myline texts='我的收藏' del='文章/视频'></myline>
    <myline texts='设置'  ></myline>
     <mybutton class="btn" >退出</mybutton>
  </div>
</template>

<script>
// 引入嵌套
import myline from "@/components/line.vue";
import mybutton from "@/components/mybutton.vue";

// 引入我们封装的axios
import { personal } from '@/apis/users.js';

import myaxios from '@/utils/myaxios.js';
export default {
  data () {
    return {
      name:'',
      imgurl:'',
      defaults:''
    }
  },
  // 組件的引用一定要注册
  components: {
    myline,mybutton
  },
  // 钩子函数取到我们的id
  async mounted () {
    console.log(this.$route);
    let id = this.$route.params.id
    console.log(id);

    let res = await personal(id)
    console.log(res);

    if(res.data.message == '获取成功'){

     this.name = res.data.data.nickname
     this.imgurl = res.data.data.head_img
     console.dir(myaxios);
     this.defaults = myaxios.defaults.baseURL

    }
  
  }

};
</script>

<style lang='less' scoped>
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
.btn {
    margin: 0 auto;
    margin-top: 20px;
}
</style>
