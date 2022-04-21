<template>
  <div id="app">
    <!-- <router-link to="/"></router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <router-view />
    <!-- <AppTabbar /> -->
  </div>
</template>
<script>
// import AppTabbar from '@/components/AppTabbar'

// export default {
//   components: { AppTabbar }
// }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #ccc;
  min-height: 100%;
  font-size: 0.14rem;
}
html,
body {
  height: 100%;
}
html {
  font-size: 100px !important;
}
p {
  font-size: 0.14rem;
}
</style>
