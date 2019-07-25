import MyGoodsCard from './GoodsCard.vue'

//  import '../../../../node_modules/swiper/dist/css/swiper'
// const VueAwesomeSwiper = require('../../../../node_modules/swiper/dist/css/swiper.css')
//   Vue.use(VueAwesomeSwiper);
// import Swiper from 'swiper';
// import '../../../../node_modules/swiper/dist/swiper.min.css';
import { swiper, swiperSlide } from 'node_modules/vue-awesome-swiper'
export default {
    components: {
      swiper,
      swiperSlide
    }
  }

const GoodsCard={
    install(Vue){
        Vue.component('GoodsCard',MyGoodsCard)
       
    }
}
export default GoodsCard


