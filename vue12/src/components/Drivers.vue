<template>
    <!-- <div class="Drivers">
      <div class="DriversTitle">{{DriversTitle}}</div> -->
     
        <DriversPricingPage></DriversPricingPage>

    <!-- <app-header></app-header>
   <app-body></app-body>
   <app-footer></app-footer> -->
    </div>
</template>
<script >
// import Header from '@/components/DriverPricing/Header'
// import Body from '@/components/DriverPricing/Body'
// import Footer from '@/components/DriverPricing/Footer'

import DriversPricingPage from '@/components/DriversPricing/DriversPricingPage'
    export default{
        name:'Drivers',
        data(){
            return{
                // DriversTitle:'司机端计价'
            }
    },
    components:{
        
        DriversPricingPage:DriversPricingPage
        // "app-header":Header,
        //  "app-body":Body,
        // "app-footer":Footer,
    }
    

    }
</script>
<style scoped>
/* .DriversTitle{
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