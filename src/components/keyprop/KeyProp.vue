<template>
  <div class="key_container">
    <h3>这是keyprop子组件</h3>
    id:
    <input type="text" name="id" id="id" v-model="id" />
    name:
    <input type="text" name="name" id="name" v-model="name" />
    <input type="button" value="添加数据" @click="add" />
    <ul>
      <li class="checkbox" v-for="item in list" :key="item.id">
          <label>
            <input type="checkbox" value="" />
            {{ item.id }}---{{ item.name }}
          </label>
          <a href="javascript:;" @click="deleteRow">删除</a>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * 情景：
 * 设定一个情景，在添加数据前，勾选“4---刘邦”这一栏。如果没有为li标签绑定key属性后，每次在最上面添加一条数据，其结果是勾选这个行为会
 * 被赋予在index=3这个标签上。然而，因为在最上面添加了一条数据，导致index=3指向的li标签易主，变为添加前的index=2的那个li标签(此时它的索引是3)。
 * 这种结果将是极端错误的。因此，v-for循环中，一定要绑定:key属性
 *
 * 作用：v-for循环中绑定key属性的目的是 为了更高效地更新DOM
 * 原因：v-for在渲染正在更新的列表时，会使用“就地复用”策略。如果数据项的顺序改变（例子中原本id=4,index=3在最顶端添加元素后index变成了4），
 * vue将不会移动DOM元素来匹配数据顺序的改变，而是简单地复用这个元素
 *
 */
export default {
  data() {
    return {
      list: [{ id: 1, name: '项羽' }, { id: 2, name: '韩信' }, { id: 3, name: '张良' }, { id: 4, name: '刘邦' }, { id: 5, name: '樊哙' }],
      id: '',
      name: ''
    };
  },
  methods: {
    add() {
      this.list.unshift({ id: this.id, name: this.name });
    },
    deleteRow() {}
  }
};
</script>
<style lang="less" scoped>
.key_container {
  ul {
    li {
      list-style: none;
    }
  }
}
</style>
