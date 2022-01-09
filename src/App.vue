<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import AppConfig from "/static/config/config.yml";

export default {
  name:'App',
  data() {
    return {
      
    }
  },
  created(){
    // const dd = require('/static/config/config.yml')
    console.log(AppConfig);
  }
}
</script>
<style lang="scss">

</style>
