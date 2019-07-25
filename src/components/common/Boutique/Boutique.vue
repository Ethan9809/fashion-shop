<template>
    <div class="boutqiue" >
        <div class="like" v-for="(item,index) in items" :key="index" ]></div>
    </div>
</template>
<script>
export default {
    name:'Boutique',
   data(){
       return {
           items:[{
               els: "1",
               url:"c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"
           },
           {
               els: "2",
               url:"c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"
           },
           {
               els: "3",
               url:"c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"}]
       }
   }
}
</script>
<style  scoped>
    .boutqiue{
    background-color:yellow;
    width:400px;
    height:2700px;
    position: relative;
     }
     .like{
         margin:20px;
        width:150px;
        height:200px;
        background-color: aquamarine;
        float:left;
     }
     .word{
         font-size:10px;
         position: absolute;
         margin-top:200px;
     }
</style>

