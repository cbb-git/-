<template>
  <!-- type不能写死 -->
  <!-- 文本框默認有一个value属性 因为input是根元素 所以默认给根元素赋值 -->
  <!-- 如果不是跟元素 设置变量赋值就行 -->
  <input class="hminput" :type="type" 
  @input="handlerinput"
   :class="{success:statu,error:!statu}"
   @change="handlerchange"
   />
</template>

<script>
export default {
  data() {
    return {
      // statu状态
      statu: true,
    };
  },
  props: {
    type: String,
    // 接收父传子的定义
    rules: RegExp,
    msgno: String,
    msgyes: String,
  },
  methods: {
    handlerinput(e) {
      //  把获取input的内容发给父组件
      this.$emit("input", e.target.value);
      //    正则的验证
      let value = e.target.value;
      // 表示rules 有值 就为true
      // 拿到我们用户输入的值 查看是否通过正则
    
     if (this.rules.test(value)) {
          this.statu = true
      }else{
            this.statu = false
      }
      
     
    },
     handlerchange(e){
      let value = e.target.value
      if(this.rules.test(value)){
        // alert(this.msgyes || '')
        this.$toast(this.msgyes)
      }else{
           this.$toast(this.msgno)
      }
  }
  },
 
};
</script>


<style lang='less' scoped>
.hminput {
  width: 318/360 * 100vw;
  height: 60px;
  outline: none;
  border: none;
  border-bottom: 3px solid #ccc;
  font-size: 20px;
  line-height: 60px;
}
.success {
  border-bottom-color: green;
}
.error {
  border-bottom-color: red;
}
</style>
