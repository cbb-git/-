<template>
  
                             <!-- type不能写死 -->
      <input class="hminput" :type="type" @input="handlerinput" >
  
</template>

<script>
export default {
 props:{
    type:String,
 },
 methods: {
     handlerinput(e){
        //  把获取input的内容发给父组件
       this.$emit('input',e.target.value)   
     }
 }
 
 

 
}
</script>


<style lang='less' scoped>
    .hminput{
        width:318/360*100vw;
        height: 60px;
        outline:none;
        border:none;
        border-bottom: 3px solid #ccc;
        font-size: 20px;
        line-height: 60px;
    }
    .success{
        border-bottom-color:green;
    }
    .error{
        border-bottom-color:red;
    }
</style>
