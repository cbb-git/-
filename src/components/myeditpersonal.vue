<template>
  <div class="header">
    <div> <slot name="left"></slot> </div>
    <span>{{title}}</span>
    <div> <slot name="right"></slot> </div>

  </div>
</template>

<script>
export default {
 data () {
     return {
     
     }
 },
props: {
            title:String,
       },


}
  
         
</script>

<style lang='less' scoped>
    .header{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        > div:nth-child(1),div:nth-child(3){
            padding: 0 10px;
        }
        > div:nth-child(2){
            font-weight: bold;
            text-align: center;
        }
    }
</style>