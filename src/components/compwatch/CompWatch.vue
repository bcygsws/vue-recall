<template>
  <div class="compwatch_container">
    <router-link to="/home/comp_watch/watch">watch侦听属性</router-link>
    <router-link to="/home/comp_watch/computed">computed计算属性</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    console.log(window.location.hash);// #/home/comp_watch  在浏览器中，#及其后面的内容被称为hash
  },
  watch: {
    '$route.path': function(newVal) {
      if (newVal === '/home/comp_watch/watch') {
        console.log('进入watch组件对应路由');
      } else if (newVal === '/home/comp_watch/computed') {
        console.log('进入computed组件对应的路由');
      }
    }
  }
};
</script>
<style lang="less" scoped>
.compwatch_container {
  a {
    margin-right: 30px;
    font-size: 13px;
    color: red;
  }
}
</style>
