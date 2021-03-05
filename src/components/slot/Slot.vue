<template>
  <div class="slot_container">
    <h3>插槽的概念理解</h3>
    <!-- 注意区分子组件和插槽，如果是子组件child里面是不填写内容的,而且child直接替换成子组件模板就可以了。但是，插槽概念中，ul无序列表是
    显示在子组件slot标签位置上的，slot标签里如果声明name="flag"属性，还要同父组件中<child slot="flag"></child>对应。插槽分析过程：
    1.将将父组件中嵌入子组件标签处，内容拿出来
    2.父组件中child子标签整体置换成子组件模板
    3.将原本从父组件中拿出来那部分html片段，置换掉<slot></slot>标签-->
    <child>
      <template slot-scope="user">
        {{ user.data }}
        <div class="list" v-for="item in user.data" :key="item.id">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </div>
      </template>
    </child>
    <child>
      <template slot-scope="user1">{{ user1.data }}</template>
    </child>
  </div>
</template>
<script>
import Child from './Child.vue';
export default {
  data() {
    return {
      user: []
    };
  },
  components: {
    // 键是作为子标签，值为引入的子组件名称
    child: Child
  }
};
</script>
<style lang="less" scoped>
.slot_container {
  .list {
    span {
      margin-right: 30px;
    }
  }
  .list:nth-child(2n + 1) {
    /* 犯错：css选择器易于同jquery选择器混淆，css选择中没有even odd这种方法  :nth-child(m) 是父级的第几个（因此，这种方式从1开始）子元素*/
    background-color: hotpink;
  }
  .list:nth-child(2n + 2) {
    background-color: orange;
  }
}
</style>
