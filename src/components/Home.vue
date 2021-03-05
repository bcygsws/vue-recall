<template>
  <div class="home_container">
    <h3>这是Home组件</h3>
    <router-link to="/home/directives">自定义指令</router-link>
    <router-link to="/home/life">vue生命周期案例</router-link>
    <router-link to="/home/ajax_pack">ajax的封装，封装post和get方式</router-link>
    <router-link to="/home/axios_pack">axios的二次封装，封装post和get方式</router-link>
    <router-link to="/home/cancel_request">axios取消请求</router-link>
    <router-link to="/home/qs">qs的使用</router-link>
    <router-link to="/home/keep_alive">keep-alive缓存组件的使用</router-link>
    <router-link to="/home/vue_cross">vue跨域的使用fetch和axios</router-link>
    <router-link to="/home/api_cross">数据接口的跨域</router-link>
    <router-link to="/home/slot">插槽的概念理解</router-link>
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
