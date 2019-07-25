<template>
<div class="bank" >
    <form action="">
    <img src="./yinhangqia.png" class="imga" alt="银行卡图标" width="20px" height="20px" align="bottom"/>
    <input class="inputa" type="number" placeholder="输入银行卡号"  size="19">
    <!-- <p class="bankword">中国银行 v-model="BankCard"</p> -->
    <img src="./icons-.png" class="imgb" alt="密码图标" width="20px" height="20px" align="middle"/>
    <input class="inputb" type="password"><br>
   <button class="sure" type="button" ></button>
    <!-- 有个onclick提交事件没有写 -->
   
    </form>
  </div>

</template>
<script>
export default {
   name:"BankCard", 
 }

//   el:'bank',
//   data:{
//     str:null,
//     bank:bank,
//     validated:validated,//是否正确有效
//     cardType:cardType,//卡类型
//     stat,//状态
//   },
//   methods:{
//       btnClick:function(){

//       }
//   }
// })
// data:function(){
//   return {
      
//   }
// }
</script>
<style scoped>
.bank{
  position: relative;
  border:1px solid rgb(41, 35, 51);
  width: 330px;
  height: 420px;
  background:url(./morecard.jpg);
  background-size: cover; 
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover;

}
.bankword{
  font-size: 15px;
  position: absolute;
  margin-left:240px;
  margin-top:287px;
}
.imga{
 position: absolute;
  margin-left:50px;
  margin-top:290px;
}
.imgb{
  position: absolute;
  margin-left:50px;
  margin-top:335px;
}
.inputa{
position: absolute;
  margin-left:80px;
  margin-top:285px;
  width:138px;
  height:20px;
  opacity:0.5;
}
.inputb{
position: absolute;
  margin-left:80px;
  margin-top:330px;
  width:100px;
  height:20px;
  opacity:0.5;
}
.sure{
  position: absolute;
  margin-left:100px;
  margin-top:345px;
}

</style>

