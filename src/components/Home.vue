<template>
  <div class="home_container">
    <h3>这是Home组件</h3>
    <router-link to="/home/directives">自定义指令</router-link>
    <router-link to="/home/life">vue生命周期案例</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.home_container {
  a {
    margin-left: 20px;
  }
}
</style>
