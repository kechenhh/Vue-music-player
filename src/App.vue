<template>
  <div id="app">
    <m-header></m-header>
    <!--导航栏-->
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab.vue'
export default {
  components:{
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet.stylus">
  @import "./common/stylus/variable"

  #app
    color $color-theme
</style>
