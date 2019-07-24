<template>
  <PassengersPricingPage></PassengersPricingPage>
    <!-- <div class="Passengers">
      <div class="PassengersTitle">{{PassengersTitle}}</div>
     
       -->

   <!-- <PassengersPricingPage></PassengersPricingPage> -->

    </div>
</template>
<script>
// import Header from '@/components/PassengersPricing/Header'
// import Body from '@/components/PassengersPricing/Body'
// import Footer from '@/components/PassengersPricing/Footer'
//import PassengersPricingPage from '@/components/PassengersPricing/PassengersPricingPage'
import PassengersPricingPage from '@/components/PassengersPricing/PassengersPricingPage'
    export default{
        name:'Passengers',
        data(){
            return{
                // PassengersTitle:'乘客端计价'
                  }
    },
    components:{
          PassengersPricingPage:PassengersPricingPage
       // PassengersPricingPage:PassengersPricingPage
        //    "app-header":Header,
        //    "app-body":Body,
        //    "app-footer":Footer
    }

  
    }
</script>
<style scoped>
/* .PassengersTitle{
    margin: 0px auto;
     padding: 1px 300px 1px 300px;
    width: 165px;
	height: 42px;
	font-family: PingFangSC-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
} */
</style>