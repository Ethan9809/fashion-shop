import Vue from 'vue'
import App from './App.vue'

import BankCard from'./components/common/BankCard/BankCard.vue'
import Stepper from './components/common/Stepper/Stepper.vue'
import GoodsCard from './components/common/GoodsCard/GoodsCard.vue'
import Boutique from './components/common/Boutique/Boutique.vue'
import VueAwesomeSwiper from '../node_modules/vue-awesome-swiper'



 import '../node_modules/swiper/dist/css/swiper.css'

// // Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(BankCard);
Vue.use(Stepper);
Vue.use(GoodsCard);
Vue.use(Boutique);
new Vue({
  render: h => h(App),
  components:{
   
    
  }
}).$mount('#app')
//不写组建名无影响
// import Test from './pages/HelloWorld'
// Vue.use(Test);

// Vue.use(BankCard);
// Vue.use(Stepper);
//  new Vue({
//    render: b => b(App),
//    components:{
//      BankCard,
//      Stepper,
    
//    }
//  }).$mount('#app')
// new Vue({
//   render: s => s(App),
//   components:{
   
//     Stepper,
//   }
// }).$mount('.stepper')


