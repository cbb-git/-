<template>
  <div id="cell">
      <div class="left">{{texts}}</div>
      <div class="right">{{del}}</div>
  </div>
</template>

<script>
export default {
props:{
  texts:'',
  del:'',
}
}
</script>

<style lang='less'>
#cell{
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