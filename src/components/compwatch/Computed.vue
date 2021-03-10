<template>
  <div>
    <h3>计算属性computed-实现姓名拼接</h3>
    <input type="text" name="first" v-model="firstName" />+ <input type="text" name="last" v-model="lastName" />=
    <input type="text" name="total" :value="total" />
  </div>
</template>
<script>
/**
 * computed的使用：
 * 1.computed 多用于一个属性是其他属性计算而来的，这个属性依赖于其他属性，是多对一或一对一的情形
 * 2.支持缓存，依赖的属性发生变化，才会重新计算属性
 * 3.不支持异步，异步的数据监听无变化
 * 4.computed属性值默认走缓存，计算属性是基于它们的响应式依赖进行缓存的。也就是基于data中声明的变量或者父组件传递的props属性
 *
 *
 */
export default {
  data() {
    return { firstName: '', lastName: '' };
  },
  computed: {
    total() {
      return this.firstName + this.lastName;
    }
  }
};
</script>
