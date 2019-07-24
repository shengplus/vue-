<template>
  <div class="body">
      <div class="Div1">
           <!-- <div class="type">-->
            <!-- <div class="type1">{{type1}}</div>
            <div class="type2">{{type2}}</div>
            <div class="type3">{{type3}}</div>
            <div class="black"></div> -->
            <!--</div>-->
            <div class="type">
                <div class="{active:shows1=1}" @click="jjtype()">经济型</div>
                <div class="{active:shows1=2}" @click="sstype()">舒适型</div>
                <div class="{active:shows1=3}" @click="sstype()">豪华型</div>
            </div>
      </div>
        <div class="Div2">
           <div class="start_up_fee">{{start_up_fee}}</div>
            <div class="ordinary_period1">{{ordinary_period1}}</div>
            <div class="ordinary_period1_fee">{{ordinary_period1_fee}}</div>
            <div class=" before_dawn1">{{before_dawn1}}</div>
            <div class="before_dawn1_fee">{{before_dawn1_fee}}</div>
            <div class=" morning1">{{morning1}}</div>
            <div class="morning1_fee">{{morning1_fee}}</div>
             <div class=" afternoon1">{{afternoon1}}</div>
            <div class="afternoon1_fee">{{afternoon1_fee}}</div> 
            <div class="blank_1"></div>
           </div>
        

        <div class="Div3">
            <div class="mileage_fee">{{mileage_fee}}</div>
            <div class="ordinary_period2">{{ordinary_period2}}</div>
            <div class="ordinary_period2_fee">{{ordinary_period2_fee}}</div>    
            <div class=" before_dawn2">{{before_dawn2}}</div>
            <div class="before_dawn2_fee">{{before_dawn2_fee}}</div>
            <div class="morning2">{{morning2}}</div>
            <div class="morning2_fee">{{morning2_fee}}</div>
            <div class=" afternoon2">{{afternoon2}}</div>
            <div class="afternoon2_fee">{{afternoon2_fee}}</div>
            <div class="blank_2 "></div>
        </div> 
        
         <div class="Div4">
            <div class="time_fee">{{time_fee}}</div>
            <div class="ordinary_period3">{{ordinary_period3}}</div>
            <div class="ordinary_period3_fee">{{ordinary_period3_fee}}</div>
               <div class="time_fee_description1">{{time_fee_description1}}</div>
            <div class=" before_dawn3">{{before_dawn3}}</div>
            <div class="before_dawn3_fee">{{before_dawn3_fee}}</div>
                <div class="time_fee_description2">{{time_fee_description1}}</div>
            <div class="morning3">{{morning3}}</div>
            <div class="morning3_fee">{{morning3_fee}}</div>
                <div class="time_fee_description3">{{time_fee_description1}}</div>
            <div class=" afternoon3">{{afternoon3}}</div>
            <div class="afternoon3_fee">{{afternoon3_fee}}</div>
                <div class="time_fee_description4">{{time_fee_description1}}</div>
            <div class="blank_3"></div>
        </div> 

        <div class="Div5">
            <div class="long_distance_fee">{{long_distance_fee}}</div>
            <div class="distance1">{{distance1}}</div>
            <div class="distance1_fee">{{distance1_fee}}</div>
            <div class="distance2">{{distance2}}</div>
            <div class="distance2_fee">{{distance2_fee}}</div>
            <div class="blank_4"></div>
        </div> 

        <div class="Div6">
            <div class="night_fee">{{night_fee}}</div>
            <div class="night_payment">{{night_payment}}</div>
              <div class="night_fee_description">{{night_fee_description}}</div>
             <div class="blank_5"></div>
        </div> 

          <div class="Div7">
            <div class="overtime_waiting_fee">{{overtime_waiting_fee}}</div>
             <div class="waiting_fee_payment">{{waiting_fee_payment}}</div>
            <div class="waiting_fee_description">{{waiting_fee_description}}</div>
            <div class="blank_6"></div>
        </div> 
   
         <div class="Div8">
            <div class="liquidated_damages">{{liquidated_damages}}</div>
            <div class="Liquidated_damages_calculation">{{liquidated_damages_calculation}}</div>
            <div class="Liquidated_damages_description">{{liquidated_damages_description}}</div>
        </div> 

        
  </div >

</template>

<script>
export default {
  name: 'app-body',
  data () {
    return {
   type1:"经济型",
   type2:"舒适型",
   type3:"豪华型",
   start_up_fee:"起步费",
   ordinary_period1:"普通时段",
   ordinary_period1_fee:"11元/公里",
   before_dawn1:"00:00-05:00",
   before_dawn1_fee:"12元/3公里",
   morning1:"05:00-09:00",
   morning1_fee:"13元/3公里",
   afternoon1:"17:00-19:00",
   afternoon1_fee:"14元/3公里",

   mileage_fee:"里程费",
   ordinary_period2:"普通时段",
   ordinary_period2_fee:"2.1元/公里",
   before_dawn2:"00:00-05:00",
   before_dawn2_fee:"2.1元/公里",
   morning2:"05:00-09:00",
   morning2_fee:"2.2元/公里",
   afternoon2:"17:00-19:00",
   afternoon2_fee:"2.3元/公里",

   time_fee:"时长费",
   ordinary_period3:"普通阶段",
   ordinary_period3_fee:"0.3元/公里",
   time_fee_description1:"免费运行8分钟后加收时长费",
   before_dawn3:"00:00-05:00",
   before_dawn3_fee:"0.4元/公里",
   morning3:"05:00-09:00",
   morning3_fee:"0.5元/公里",
   afternoon3:"17:00-19:00",
   afternoon3_fee:"0.6元/公里",

   long_distance_fee:"远途费",
   distance1:"大于10公里，小于等于20公里",
   distance1_fee:"0.7元/公里",
   distance2:"大于20公里",
   distance2_fee:"0.9元/公里",

   night_fee:"夜间费",
   night_payment:"0.9元/分钟",
   night_fee_description:"夜间（23:00-05:00次日）行驶时，加收夜间服务费。服务费上限40元。",

   overtime_waiting_fee:"超时等待费",
   waiting_fee_payment:"0.4元/分钟",
   waiting_fee_description:"免费等待5分钟后加收等待费用，上限10元",

   liquidated_damages:"违约金",
   liquidated_damages_calculation:"根据订单金额计算",
   liquidated_damages_description:"乘客有则取消订单时收取；预约订单按金额15%收取。即时订单按订单金额10%收取，上限3元。若符合其他免责条款则不收取违约金"
    }
  }
}
</script>

<style scoped>

.Div_body{
  width: 720px;
  height: 2231px;
  margin:0px auto;
}
.Div1{
    width: 720px;
	height: 89px;
	border: solid 1px #e5e5e5;
    margin: 0px auto;
    position:relative;
}
.type1{
    width: 84px;
	height: 40px;
	font-family: PingFangSC-Medium;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    padding: 25px 558px 24px 78px;
    position: absolute; 
}
.type2{
    width: 84px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding: 25px 318px 24px 318px;
    position: absolute;
}
.type3{
    width: 84px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding: 25px 78px 24px 558px;
    position: absolute;
}
.black{
    width: 84px;
	height: 6px;
	background-color: #333333;
    margin-left:78px;
    margin-top: 83px;
}
.Div2{
    width: 720px;
    height:358px;
    margin: 0px auto;
    position:relative;
    
}

.start_up_fee{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    padding: 36px 564px 277px 60px;
}


.ordinary_period1_fee{
    width: 138px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin-top: -238px;   
    padding-left:522px;
    float:right;
    
    
   
}
.ordinary_period1{
    width: 112px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin: -238px 350px 8px 60px;
    float:left;
    margin-right: 350px;
    position:absolute;
}

.before_dawn1_fee{
    width: 146px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: right;
    margin-top: -169px; 
    padding-left: 517px;
    
}
.before_dawn1{
    width: 196px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin: -169px 261px 8px 40px;
  
    float: left;  
    margin-right: 261px;
    position:absolute;
     
    

}
.morning1_fee{
   width: 146px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin-top: -121px;
    padding-left: 517px;
    float:right;
}
.morning1{
    width: 196px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin-top: -121px;
    padding-left: 40px;
    float: left;
    margin-right: 300px;
    position: absolute;

}
.afternoon1_fee{
    width: 146px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin-top: -73px;
    padding-left: 517px;
    float:right;
}

.afternoon1{
    width: 184px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: left;
    margin-right: 300px;
    position: absolute;
    margin:-73px 273px 73px 45px;
 
}
.blank_1{
   margin-top: 0px;
   margin-left:0px;
   padding-right: 0px;
   position: absolute;

}
.Div3{
    width: 720px;
    height: 321px;
    margin-top:30px;
}
.mileage_fee{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    padding: 36px 564px 300px 80px;

}
 .ordinary_period2_fee,.before_dawn2_fee,.morning2_fee,.afternoon2_fee{
    width: 152px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
} 
.before_dawn2,.morning2,.afternoon2{
    width: 196px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
 .ordinary_period2_fee{
     float: right;
     margin-top: -272px;
   
}
.ordinary_period2{
   width: 112px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: left;
    margin-right: 354px;
    position: absolute;
    margin: -272px 564px 277px 80px;
}
.before_dawn2_fee{
    float: right;
    margin-left: 354px;
    margin-top: -224px;
    padding-left: 526px;
}
.before_dawn2{
   margin-top: 20px;
   float: left;
   margin-top: -224px;
   padding-left:60px;
   position: absolute;
}
.morning2_fee{
    float: right;
    margin-top:-176px;
    padding-left: 517px;
} 
.morning2{
    float: left;
    margin-right: 264px;
    position: absolute;
    padding-left: 60px;
    margin-top: -176px;
}
.afternoon2_fee{
    float: right;
    margin-top:-128px;
    padding-left: 517px; 
}
.afternoon2{
    float: left;
    margin-right: 264px;
    position: absolute;
    padding-left: 60px;
    margin-top: -128px;
}
.blank_2{
   margin-top: -58px;
   padding-left:0px;
   position: absolute;
}  
.Div4{
    width:720px;
    height: 485px;
    margin-top: 30px;
}
.time_fee{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    padding: 36px 564px 404px 80px;
}
.ordinary_period3_fee,.before_dawn3_fee,.morning3_fee,.afternoon3_fee{
    width: 139px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.before_dawn3,.morning3,.afternoon3{
    width: 196px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.ordinary_period3_fee{
    margin-top: -404px;
    float: right;
}
.ordinary_period3{
    width: 112px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: left;
    margin-right: 349px;
    position: absolute;
    margin: -404px 548px 344px 80px;
}
.before_dawn3_fee{
    float: right;
    margin-left: 354px;
    margin-top: -315px;
    padding-left: 526px;
}
.before_dawn3{
   float: left;
   margin-top: -315px; 
   padding-left:60px;
   position: absolute;
}
.morning3_fee{
    float: right;
    margin-top:-226px;
    padding-left: 517px;
} 
.morning3{
    float: left;
    margin-right: 264px;
    position: absolute;
    padding-left: 60px;
    margin-top: -226px;
}
.afternoon3_fee{
    float: right;
    margin-top:-137px;
    padding-left: 517px; 
}
.afternoon3{
    float: left;
    margin-right: 264px;
    position: absolute;
    padding-left: 60px;
    margin-top: -137px;
}
.time_fee_description1,.time_fee_description2,.time_fee_description3,.time_fee_description4{
    width: 303px;
	height: 33px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
   
}
.time_fee_description1{
   float: left;
   margin-top: -363px;
   padding-left:80px;
   position: absolute;
}
.time_fee_description2{
   float: left;
   margin-top: -274px;
   padding-left:80px;
   position: absolute;
}
.time_fee_description3{
   float: left;
   margin-top: -185px;
   padding-left:80px;
   position: absolute;
}
.time_fee_description4{
   float: left;
   margin-top: -96px;
   padding-left:80px;
   position: absolute;
}
.blank_1,.blank_2,.blank_3,.blank_4,.blank_5,.blank_6{
   width: 720px;
	height: 32px;
	background-color: #f2f2f2;
    float: left;
}

 
.blank_3{
   margin-top: 0px;
   padding-left:0px;
   position: absolute;
}   
.blank_4{
  margin-top: -30px;
   padding-left:0px;
   position: absolute;
}
 .blank_5{
   margin-top: 36px;
   padding-left:0px;
   position: absolute;
} 
.blank_6{
   margin-top: 36px;
   padding-left:0px;
   position: absolute;
} 
.Div5{
    width: 720px;
    height: 255px;
    margin-top: 30px;
}
.long_distance_fee{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    padding: 36px 564px 204px 60px;
}
.distance1,.distance1_fee,.distance2,.distance2_fee{
    font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.distance1_fee{
   width: 138px;
	height: 40px;
    float: right;
    margin-top: -176px;
    padding-left: 80px;
}
.distance1{
    width: 374px;
	height: 40px;
    float: left;
    margin-right: 92px;
    position: absolute;
    padding-left: 80px;
    margin-top: -176px;
}
.distance2_fee{
    width: 139px;
	height: 40px;
    float: right;
    margin-top: -98px;
    padding-left: 80px;

}
.distance2{
    width: 146px;
	height: 40px;
    float: left;
    margin-right: 315px;
    position: absolute;
    padding-left: 80px;
    margin-top: -98px;
}

.Div6{
    width:720px;
    height:187px;
    margin-top: 30px;
}
.night_payment{
    width: 139px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float:right;
    padding-top: 36px;
    padding-left: 60px;
}
.night_fee{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333; 
    float:left;
    margin-right: 364px;
    position:absolute;
    padding-left: 60px;
    padding-top: 36px;
}
.night_fee_description{
    width: 600px;
	height: 66px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding-top: 85px ;
    padding-left: 60px;
    text-align: left;
}
.Div7{
    width: 720px;
    height:154px;
    margin-top:30px;
}
.waiting_fee_payment{
    width: 139px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float:right;
    padding-top: 36px;
    padding-left: 60px;
}
.overtime_waiting_fee{
    width: 160px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float:left;
    margin-right: 300px;
    position:absolute;
    padding-left:60px;
    padding-top: 36px;
}
.waiting_fee_description{
    width: 600px;
	height: 33px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding-top: 85px;
    padding-left:60px;
    text-align: left;
}
.Div8{
    width:720px;
    height:220px;
    margin-top: 30px;
}
.Liquidated_damages_calculation{
    width: 224px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: right;
    padding-left:60px;
    padding-top: 36px;
}
.liquidated_damages{
    width: 96px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float:left;
    margin-right: 280px;
    position: absolute;
    padding-left:60px;
    padding-top: 36px;
}
.Liquidated_damages_description{
    width: 600px;
	height: 99px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding-top: 85px;
    padding-left: 60px;
    text-align: left;
}
</style>
