<template>
<div class="header">
        <div class="div_box1"
            <div class="title">{{details_price}}</div>
        <div>

        <div class="div_box2"
         
             <img :src="imgUrl">
      </div> 
        <div class="div_box3">
                <div class="tips">{{tips}}</div>
       </div>
      
      
</div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      details_price:"计价规则",
      tips:"温馨提示：预估费用仅供参考，实际情况可能因交通情况，天气等因素不同。",
       imgUrl:require("../assets/1.png")
    }
  }
}
</script>

<style scoped>
.header{
    width: 720px;
    height: 456px;
    margin:0px auto;
}

.div_box1{
    width: 720px;
	height: 128px;
	background-color: #ffffff;
	box-shadow: 0px 2px 10px 0px 
	rgba(0, 0, 0, 0.07);
}
.title{
    padding: 61px 300px 25px 300px;
    width: 120px;
	height: 42px;
	font-family: PingFangSC-Medium;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.div_box2{
    width: 720px;
    height: 228px;
    padding-top:50px;
}
.bitmap{
    width: 720px;
	height: 228px;
    background-color: #e8e8e8;
}
.div_box3{
    width: 720px;
	height: 100px;
	background-color: #e8e8e8;
}
.tips{
    width: 600px;
	height: 66px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    padding: 17px 60px 17px 60px;
}
</style>
