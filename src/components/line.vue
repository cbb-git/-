<template>
  <div id="cell" @click="handlerclick">
    <div class="left">{{texts}}</div>
    <div class="right">{{type == 'pass' ? '******':del}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerclick(e) {
      this.$emit("click", e);
    },

    
  },
  props: {
      texts: String,
      del: String,
      type: String,
    },
};
</script>

<style lang='less'>
#cell {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0 20px;
  align-items: center;
  border-bottom: 1px solid black;
  .right {
    font-size: 14px;
    color: brown;
  }
}
</style>