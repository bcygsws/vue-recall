<template>
  <div class="child_container">
    <h3>这是子组件</h3>
    <!-- slot里面没有声明name属性，就是单个插槽(或者匿名插槽)，一旦声明name属性，就成为具名插槽，具名插槽要求子组件和父组件中
      slot属性值一一对应 -->
    <!-- 作用域插槽的功能：类似子组件向父组件传值 子组件：动态绑定一个变量。如：:data="list"
      父组件接收<child><template slot-scope="user">{{user.data}}</template></child>-->
    <slot :data="list"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '花满楼',
          age: 18
        },
        {
          id: 2,
          name: '陆小凤',
          age: 19
        },
        {
          id: 3,
          name: '楚留香',
          age: 20
        },
        {
          id: 4,
          name: '萧十一郎',
          age: 19
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.child_container {
  background-color: green;
}
</style>
