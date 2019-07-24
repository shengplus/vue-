<template>
<div class="footer">
    <div class="sum_calculate">
        <div> {{sum_calculate}}</div>
   </div>
</div>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
    sum_calculate:"里程费+时长费+远途费+夜间费用<最低消费时长按最低消费额计算"

    }
  }
}
</script>

<style scoped>
.footer{
    /* padding: 2559px; */
    background-color: #f2f2f2;
    width: 720px;
  	height: 140px;
   
margin:0px auto;
	
}
.sum_calculate{
  padding: 37px 60px 37px 60px;
	width: 600px;
	height: 66px;
	font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #999999;
    text-align: center;
    margin:0 auto;

}
</style>
