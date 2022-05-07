<template>
  <div>
    <h3>侦听属性watch-实现姓名拼接</h3>
    <input type="text" name="first" v-model="firstName" />
    +
    <input type="text" name="last" v-model="lastName" />
    =
    <input type="text" name="total" v-model="total" />
  </div>
</template>
<script>
/**
 * 参考文档：https://www.cnblogs.com/jiajialove/p/11327945.html
 * 区别在以下几个方面：使用场合+支持缓存+支持异步+其他（1.watch中可以添加属性deep、immediately；2.watch可以监听路由地址的变化）
 * computed的使用：
 * 1.computed 多用于一个属性是其他属性计算而来的，这个属性依赖于其他属性，是多对一或一对一的情形
 * 2.支持缓存，依赖的属性发生变化，才会重新计算属性
 * 3.不支持异步，异步的数据监听无变化
 * 4.computed属性值默认走缓存，计算属性是基于它们的响应式依赖进行缓存的。也就是基于data中声明的变量或者父组件传递的props属性
 * watch的使用：
 * 1.watch 多用于有异步操作，且内存开销较大的场合
 * 2.不支持缓存，数据改变，立即触发
 * 3.支持异步操作，侦听属性的函数有两个参数，分别是最新值和原来值
 * 4.watch中的immediately和deep属性
 * immediately 组件加载，立即触发回调函数的执行
 * deep 深度监听
 * 5.watch可以监听路由地址的变化 路由地址this.$route.path
 * 例子：在CompWatch.vue文件中使用watch监听路由，从路径/home/comp_watch去往
 * 路径/home/comp_watch/watch 或者/home/comp_watch/computed
 *
 *
 */
export default {
  data() {
    return { firstName: '', lastName: '', total: '' };
  },
  watch: {
    firstName(newVal, oldVal) {
      this.total = newVal + this.lastName;
    },
    lastName(newVal, oldVal) {
      this.total = this.firstName + newVal;
    }
  }
};
</script>
