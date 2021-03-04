<template>
  <div class="api_container">
    <router-link to="/home/api_cross/table">普通表格渲染</router-link>
    <router-link to="/home/api_cross/el_table">使用element表格组件渲染</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.api_container {
  a {
    margin: 0 10px;
    font-size: 14px;
    color: blue;
    text-decoration: none;
  }
}
</style>
