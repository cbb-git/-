<template>
  <div id="app">
    <div class="btn" @click="handlerclick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerclick(e) {
        // 发出消息  室友子组件发出消息父组件才能接收到
        this.$emit('click',e)
    },
  },
};
</script>

<style lang='less' scoped>
.btn {
  width: 318 * 100vw/360;
  height: 50px;
  background-color: rgb(70, 158, 12);
  border-radius: 25px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
</style>