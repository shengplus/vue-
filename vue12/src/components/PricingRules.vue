<template>
  <div class="PricingRules">
    <h1>{{ msg }}</h1>
    
   
    <!-- <router-view><router-view> -->
  </div>
</template>

<script>
export default {
  name: 'PricingRules',
  data () {
    return {
      msg: '计价规则'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
  margin: 0px auto;
}
</style>
