import MyStepper from './Stepper.vue'
const Stepper ={
    install (Vue) { 
        Vue.component('Stepper',MyStepper)
    }
}

export default Stepper

    // methods:{
    //     plusNumber():function (){
    //         if(this.number<Max){
    //             this.number=this.number+1;
    //         }
//}),

// new Vue({
//     el:'.in',
//     data:{
//         number:'5'
//     },
//     methods:{
        // methods:{
        //     plusNumber:function (){
        //         if(this.number<Max){
        //             this.number=this.number+1;
        //         }
               
        //     }
        // }
    //}
//})
// var vm=new Vue({
//     el:'minus',
//     data:{
//         number:'5'
//     },
//     methods:{
//         methods:{
//             minusNumber:function (){
//                 if(this.number>0)
//                 this.number=this.number-1;
//             }
//         }
//     }
// })