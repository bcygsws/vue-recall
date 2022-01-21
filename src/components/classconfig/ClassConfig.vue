<template>
  <div class="bindclass_container">
    <h3>vue动态绑定类样式的5种方式</h3>
    <!-- 方式1：class绑定一个{} -->
    <p :class="{ active: isActive }">一身转战三千里，一剑曾当百万师</p>
    <!-- 方式2：绑定一个对象 -->
    <p :class="classObj">七龄思即壮，开口咏凤凰</p>
    <!-- 方式3：绑定一个计算属性 -->
    <p :class="obj">故人入我梦，明我长相忆</p>
    <!-- 方式4：数组方式 -->
    <p :class="['active4', 'act-array']">有限光阴过隙，无情日月飞梭</p>
    <!-- 方式5：数组和三元表达式 -->
    <p :class="[isActive1 ? 'active5' : 'array-style']">我愿如星君如月，夜夜流光相皎洁</p>
    <!-- 方式6：数组和对象结合的方式 -->
    <p :class="['active4', { active6: true }]">有限光阴过隙，无情日月飞梭</p>
  </div>
</template>
<script>
/**
 * 动态绑定class样式：
 * 5种方式 可分为两大类：对象方式和数组方式
 *
 *
 */
export default {
  data() {
    return { isActive: true, classObj: { active2: true }, isActive1: false };
  },
  computed: {
    obj() {
      return { active3: true };
    }
  }
};
</script>
<style lang="less" scoped>
.bindclass_container {
  .active {
    color: red;
    font: italic 700 24px 'Arial';
  }
  .active2 {
    color: blue;
    text-decoration: underline;
  }
  .active3 {
    color: orange;
    text-decoration: line-through;
  }
  .active4 {
    color: hotpink;
  }
  .act-array {
    font-weight: bold;
  }
  .active5 {
    color: green;
    text-decoration: line-through;
  }
  .array-style {
    color: purple;
  }

  .active6 {
    background-color: black;
    font-size: 30px;
    text-decoration: line-through;
  }
}
</style>
