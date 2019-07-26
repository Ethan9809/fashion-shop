<template>
    <div id="frist">
        <div id="header">
          <div id="header1">
              <input id="me" type="button">
              <input type="text"  id="serchword"  
              placeholder="寻好物" size="20">
              <input id="search" type="button">
          </div>
               <div id="header2">
                   <button>首页</button>
                   <button  class="button1" type="button" @click='handleClose()'>衣饰鞋帽</button>
            
                    <button class="button1" type="button">数码电子</button>
                   <button  class="button1" type="button">水果生鲜</button>
                   
                   <button  class="button1" type="button">美妆洗护</button>
                   
                   <button class="button1" type="button">书本文具</button>
                   <button class="button1" type="button">婴幼呵护</button>
                   <button  class="button1" type="button">生活百物</button>
                   </div>
                <!-- <div id="header3">
                   <div class="change" v-for="(item,index) in items"  :key="index" >
                         <button v-bind:href="item.hre" ref="showway"> -->
                            <!-- <img src:require=("../assets/taozhuang.png")> -->
                              <!-- <span>  {{item.clo}}</span>
                             
                              </button>
                              </div>
               </div>
          </div> -->
          <div id="header5">
              <div class="goods"></div>
          </div>
        <div id="header10">
            <!-- <input type="button" class="class10">首页
            <input type="button" class="class10">购物车
            <input type="button" class="class10">个人中心 -->
             <a href="https://www.baidu.com"><button class="class10" href="https://www.baidu.com">
             <img src="../assets/shouye.png" ><span>首页</span></button></a>

              <a href="https://www.baidu.com"><button class="class10" href="https://www.baidu.com">
              <img src="../assets/shengdangerenzhongxin.png" style="margin-left:1rem">
              <span>个人中心</span></button></a>
            <a href="https://www.baidu.com"><button class="class10" href="https://www.baidu.com">
            <img src="../assets/gouwuche.png"><span>购物车</span></button></a>
        </div>
    </div>
    </div>
</template>
<script>
// import { close } from 'fs';
// import { METHODS } from 'http';
// import { Script } from 'vm';
// var myData={
  
// };

export default {
    name:"MainPage",

    data (){
        return{
            flag:false,
    
            items:[
               { hre:'https://www.baidu.com',
                  img:'../assets/taozhuang.png',
                   clo:'数码电子'},
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                   clo:'数码电子'},
               {  hre:'https://www.baidu.com',
               img:'../assets/taozhuag.png',
                   clo:'数码电子'},
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                   clo:'数码电子'},
               { hre:'https://www.baidu.com',
               img:'../assets/taozhuag.png',
                   clo:'数码电子'},
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                    clo:'数码电子'},
               ],
               todos:[
                   {
                       hre:'https://www.baidu.com',
                  img:'../assets/taozhuang.png',
                  word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                  },
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                   word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',},
               {  hre:'https://www.baidu.com',
               img:'../assets/taozhuag.png',
                    word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',},
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                   word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',},
               { hre:'https://www.baidu.com',
                word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',},
               { hre:'http://news.baidu.com',
               img:'../assets/taozhuag.png',
                    word:'法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                      
               }]
        }
        
        
    },
    // method:{
    //       handleClose :function () {
    //          close();
    //       },
    //       close:function (){
    //         this.$refs.showway.display=none;
            
    //       }
    // }
  
   
}
</script>
<style  scoped>
   #frist{
    position: relative;
    margin:0;
    padding:0;
    width:100%;
    
}
#header{
        width: 100%;
      
    }
#header1{
    width:100%;
    height:6rem;
    background-color: beige;
    position: relative;
}
#serchword{
    position: absolute;
     width:12rem;
     height:1.8rem; 
     background-color:blue;
     border:1px black solid; 
     font-size:1.1rem;
     margin-left:5.5rem; 
     margin-top: 3.8rem;
}
#me{
      position: absolute;
    background:url("../assets/meme.png");
    background-size: 3rem 3rem;
    width:3rem;
    height:3rem;
     border-radius: 1.75rem; 
     border:.02rem solid white;
    margin-left:1rem;
    margin-top:3.2rem;
}
#search{
     position: absolute;
    background: url('../assets/search.png') center no-repeat;
    background-size:2rem 2rem;
   width:2.4rem;
   height:2.3rem;
     margin-left:18.8rem; 
    margin-top:3.5rem;
    border-radius: 0.9rem;
}
#header2{
   
  display: flex;
}
button .button1{
    position: relative;
    color:black;
    background:wheat;
    opacity: 0.5;
    width:3rem;
    height:1.6rem;
    font-size:0.3rem;
}
.showit{
    display:flex;
  
    margin:0;
    padding:0;
    position: absolute;
    background: url('../assets/taozhuang.png') ;
    background-size: 3.75rem 4rem ;
    margin-top:2rem;
   width:3.85rem;
    height:4.2rem ;
   background-color: aquamarine;
 
}
li{
    list-style:none;
    margin:0;
   /* flex-wrap:wrap; */
   
    font-size:0.7rem;
   
}
#header10{
    height:2.8rem;
    width:100%;
   position: fixed;
     bottom:0;
    background-color:whitesmoke;
    
}
.class10{
    margin-top: 0.18rem;
    width:7.5rem;
}
.class10 img{
   
    width:2rem;
    /* background-color:burlywood; */
   
  
   
}
</style>