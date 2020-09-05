<template>
  <div id="app">
    <myedit title="编辑个人信息">
      <span slot="left" class="iconfont iconjiantou2"></span>
      <!-- <span slot="right"></span> -->
    </myedit>
    <div class="userimg">
      <img class="userimg-img" :src="img" alt />

      <!-- 文件上传完毕后会触发 after-read 回调函数，获取到对应的 file 对象。 -->
      <!-- 这个文件上传会自动触发 文件上传 -->
      <van-uploader :after-read="afterRead" class="userimg-click" />
    </div>
    <lines class="line" texts="昵称" :del="name" @click="nickcilck=true"></lines>

    <van-dialog v-model="nickcilck" title="修改昵称" show-cancel-button @confirm="altername">
      <!-- <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> -->
      <!-- 这里不能使用双向绑定 不能修改默认值 -->
      <van-field :value="name" required label="用户名" placeholder="请输入用户名" @input="content" />
    </van-dialog>

    <lines class="line" texts="密码" del type="pass" @click="nickcilckpass=true"></lines>

    <van-dialog v-model="nickcilckpass" title="修改密碼" show-cancel-button>
      <!-- <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> -->
      <!-- 这里不能使用双向绑定 不能修改默认值 -->

      <!-- 用户需要自己输入原密码 -->
      <van-field @input="pass" :value="verifypass" required label="旧密碼" placeholder="请输入密码" />
      <van-field @input="newpass" required label="新密码" placeholder="请输入密码" />
    </van-dialog>

    <lines class="line" texts="性别" :del="gender" @click="altergender=true"></lines>
    <van-popup v-model="altergender" :style="{ height: '50%', width:'100%'}">
      <van-picker title="性别" :columns="columns" show-toolbar @confirm="onConfirm"   @cancel="onCancel"/>
    </van-popup>
  </div>
</template>

<script>
import myedit from "@/components/myeditpersonal.vue";
import lines from "@/components/line.vue";
// 引入 我们封装的个人中心
import { personal, personalAfterread } from "@/apis/users.js";

// 引入我们基准路径的封装
import myaxios from "@/utils/myaxios.js";

// 引入封装上传图片
import { fileupload } from "@/apis/fileupload.js";

export default {
  components: {
    myedit,
    lines,
  },
  data() {
    return {
      name: "",
      gender: "",
      img: "",
      id: "",
      nickcilck: false,
      nickcilckpass: false,
      show: false,
      altergender: false,
      alter: "",
      //   服务器的密码
      password: "",
      verifypass: "",
      columns: ["男", "女"],
      pickervalue: "",
    };
  },
  methods: {
    async afterRead(data) {
      // 此时可以自行将文件上传至服务器
      // 把回调函数打印出来 就可以显示出对象是谁
      console.log(data);

      //   利用fromdata
      let fromdata = new FormData();
      fromdata.append("file", data.file);

      let res = await fileupload(fromdata);
      console.log(res);
      if (res.data.message == "文件上传成功") {
        console.log(res);
        this.img = myaxios.defaults.baseURL + res.data.data.url;
        let resute = await personalAfterread(this.id, {
          head_img: res.data.data.url,
        });
        this.$toast.success("上传成功");
        console.log(resute);
      } else {
        this.$toast.fail("上传失败");
      }
    },
    // 弹出框内容赋值给name
    content(data) {
      console.log(data);
      this.alter = data;
    },
    // 弹出框赋值
    altername() {
      this.name = this.alter;
    },
    //    密码框
    pass(data) {
      console.log(data);
      if (this.password == data) {
        //    this.$toast.success('密码正确')
        this.$notify({
          background: "green",
          message: "密码正确",
        });
        // 让文本框记住
        this.verifypass = data;
      } else {
        this.$notify("密码错误");
      }
    },
    newpass(data) {
      console.log(data);
      if (/^\w{3,16}$/.test(data)) {
        this.$notify({
          background: "green",
          message: "密码可以使用",
        });
      } else {
        this.$notify("密码格式错误");
      }
    },
    newgender(data) {
      console.log(data);
    },
    onConfirm(value) {
        // 改变值
      this.gender = value
    //   最后在关闭
     this.altergender = false;
    },
    onCancel(){
        this.altergender = false;
    }
  },

  //  钩子
  async mounted() {
    // console.log(this.$route.params.id);
    //   保存我们的id值
    let id = this.$route.params.id;
    this.id = id;
    let res = await personal(id);
    console.log(res);
    // 取到密码
    this.password = res.data.data.password;
    this.name = res.data.data.nickname;
    //  判断男女
    if (res.data.data.gender == 1) {
      this.gender = "男";
    } else {
      this.gender = "女";
    }

    // 打印出来基准路径
    //  console.log(myaxios.defaults.baseURL);
    //  判断我们服务器是否有图片   如果有添加基准路径   如果没有添加  基准路径 和图片地址
    if (res.data.data.head_img) {
      this.img = myaxios.defaults.baseURL + res.data.data.head_img;
      //   上传预览成功后 我们要及时的存到数据库
    } else {
      this.img = myaxios.defaults.baseURL + "@/assets/logo.png";
    }
  },
};
</script>
<style lang="less" scoped>
#app {
  .line {
    margin: 0;
    padding: 0 20px;
  }
  .userimg {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 30px auto;
    .userimg-img {
      width: 100px;
      height: 100px;
    }
    /deep/.userimg-click {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      /deep/.van-uploader__upload {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>