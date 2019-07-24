<template>
  <div class="body">
      <div class="Div1">
           <!-- <div class="type">-->
            <div class="type1">{{type1}}</div>
            <div class="black"></div>
             <div class="blank_1"></div>
            <!--</div>-->
      </div>

        <div class="Div2">
           <div class="start_up_fee">{{start_up_fee}}</div>
           <div class="start_up_payment">{{start_up_payment}}</div>
            <div class="start_up_fee_instruction">{{start_up_fee_instruction}}</div>

            <div class=" mileage_fee">{{mileage_fee}}</div>
            <div class="mileage_fee_payment">{{mileage_fee_payment}}</div>

            <div class=" time_fee">{{time_fee}}</div>
            <div class="time_fee_payment">{{time_fee_payment}}</div>
            <div class="time_fee_instruction">{{time_fee_instruction}}</div>

            <div class="blank_2"></div>
           </div>

        <div class="Div3">
            <div class="long_distance_fee">{{long_distance_fee}}</div>
            <div class="long_distance_payment">{{long_distance_payment}}</div>
            <div class="long_distance_fee_instruction">{{long_distance_fee_instruction}}</div>
            <div class="blank_3"></div>
        </div> 

        <div class="Div4">
            <div class="night_fee">{{night_fee}}</div>
            <div class="night_payment">{{night_payment}}</div>
              <div class="night_fee_description">{{night_fee_description}}</div>
             <div class="blank_4"></div>
        </div> 

          <div class="Div5">
            <div class="overtime_waiting_fee">{{overtime_waiting_fee}}</div>
             <div class="waiting_fee_payment">{{waiting_fee_payment}}</div>
            <div class="waiting_fee_description">{{waiting_fee_description}}</div>
            <div class="blank_5"></div>
        </div> 
   
         <div class="Div6">
            <div class="liquidated_damages">{{liquidated_damages}}</div>
            <div class="Liquidated_damages_calculation">{{liquidated_damages_calculation}}</div>
            <div class="Liquidated_damages_description">{{liquidated_damages_description}}</div>
            <div class="blank_5"></div>
        </div> 

        
  </div >

</template>

<script>
export default {
  name: 'app-body',
  data () {
    return {
   type1:"网约车",
   start_up_fee:"起步费",
   start_up_payment:"11元",
   start_up_fee_instruction:"小于3公里算起步价",
   mileage_fee:"里程费用",
   mileage_fee_payment:"2.1元/公里",
   time_fee:"时间费用",
   time_fee_payment:"0.3元/分钟",
   time_fee_instruction:"免费运行480秒后，加收时间费用",

   long_distance_fee:"远途费",
   long_distance_payment:"0.7元/公里",
   long_distance_fee_instruction:"超10公里，加收远途费",

   night_fee:"夜间费",
   night_payment:"0.9元/分钟",
   night_fee_description:"夜晚（06:00-05:00次日）行驶时，加收夜间服务费。服务费上限40元。",

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
  height: 1265px;
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
  
    padding-left:318px;
    padding-top: 25px;
    position: absolute; 
}

.black{
    width: 84px;
	height: 6px;
	background-color: #333333;
    margin-left:318px;
    margin-top: 83px;
}
.Div2{
    width: 720px;
    height:331px;
  margin-top: 36px;
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
    margin: 36px 564px 277px 60px;
}
.mileage_fee,.time_fee{
    width: 128px;
	height: 45px;
	font-family: PingFangSC-Medium;
	font-size: 32px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;

}

.start_up_payment,.mileage_fee_payment,.time_fee_payment{
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.start_up_payment{
    width:61px;
    height: 40px;
    float: right;
    margin-top:36px;
    padding-right: 60px;
}
.start_up_fee{
    padding:-295px 354px 8px 60px;
    float: left;
    position: absolute;
}
.mileage_fee_payment{
    float: right;
    margin-top: 130px ;
    margin-right: -60px;
}
.mileage_fee{
  margin-right: 364px;
    float: left;
    padding-top: 120px;
   padding-left: 60px;
    position: absolute;
}
.time_fee_payment{
    float: right;
    margin-top: 206px ;
    margin-right: -132px;  

}
.time_fee{
     margin:198px 261px 8px 60px;
    float: left;
   
    margin-right: 60px;
    position: absolute;
}
.start_up_fee_instruction{
    width: 303px;
	height: 33px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    margin:78px 354px 8px 10px;
    float: left;
    position: absolute;
}
.time_fee_instruction{
    width: 355px;
	height: 33px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
      margin:265px 261px 8px 60px;
    float: left;
    margin-right: 261px;
    position: absolute;
}
.blank_1{
   margin-top: 0px;
   margin-left:0px;
   padding-right: 0px;
   position: absolute;

}

.blank_2{
   margin-top: 332px;
   padding-left:0px;
   position: absolute;
}  

.Div3{
    width: 720px;
    height: 154px;
    margin-top:30px;
}



.blank_1,.blank_2,.blank_3,.blank_4,.blank_5,.blank_6{
   width: 720px;
	height: 32px;
	background-color: #f2f2f2;
    float: left;
}

 
.blank_3{
   margin-top: -95px;
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
    height: 154px;
    margin-top: 30px;
}
.long_distance_payment{
    width: 138px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    float: right;
    margin-top:-237px;
    padding-right: 60px;
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
    margin: 36px 564px 204px 60px;
}
.long_distance_fee_instruction{
    width: 600px;
	height: 66px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    float: left;

    position: absolute;
    margin-left: -123px;
    margin-top: -145px;

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
   padding-right: 60px;
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
    padding-right: 60px;
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
    padding-right: 60px;
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
