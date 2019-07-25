<template>
  <div class="GoodsCard">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <a href="#"><img :src="item"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import"../../../../node_modules/swiper/dist/css/swiper.css"
  // import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'GoodsCard',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        items:[
          'https://i.ibb.co/hs6tVjb/timg.jpg',
          'https://i.ibb.co/hs6tVjb/timg.jpg',
          'https://i.ibb.co/hs6tVjb/timg.jpg'
        ],
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        }
      };
    },
    methods:{
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      this.getImageData();
      this.swiper.slideTo(3,1000,false);
    }
  };
</script>
<style scoped>
  .GoodsCard{
    width:100%;
    height:400px;
  }
  img{
    width:100%;
    height:400px;
  }
</style>