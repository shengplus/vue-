import Vue from 'vue'
import Router from 'vue-router'
import PricingRules from '@/components/PricingRules'
//import Drivers_pricing_page from '@/components/Drivers_pricing/Drivers_pricing_page'
 import Drivers from '@/components/Drivers'
import Passengers from "@/components/Passengers"

//import Drivers_pricing_page from '@/components/Drivers_pricing/Drivers_pricing_page'
//import Passengers_pricing_page from '@/components/Passengers_pricing/Passengers_pricing_page'

Vue.use(Router)


export default new Router({
  routes: [
     {
     path: '/',
     name: 'PricingRules',
     component: PricingRules,
    },
     {
      path:'/Drivers',
      name:'Drivers',
      component:Drivers
      // ,
      // children:[
      //   {
      //     path:'Drivers_pricing_page',
      //     name:'Drivers_pricing_page',
      //     component:Drivers_pricing_page
      //   }
      // ]
    },
    {
      path:'/Passengers',
      name:'Passengers',
      component:Passengers
    }
        ]
})
