<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #ccc;
  min-height: 100%;
  font-size: .14rem;
}
html,body {
  height: 100%;
}
html{
  font-size: 100px !important;

}
p{
  font-size: .14rem;
}
</style>
