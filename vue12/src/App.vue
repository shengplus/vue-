<template>
  <div id="app">
    <router-view/>
    <p>
      <router-link to="/Passengers">乘客端</router-link>
      <router-link to="/Drivers">司机端</router-link>
    </p>
  </div>
</template>
 
<script>


export default {
  name: 'App',
  components:{
   
  }
}
</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>