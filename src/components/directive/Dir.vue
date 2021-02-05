<template>
  <div>
    <h3>这是自定义指令组件</h3>
    <input type="button" value="自定义指令更爱文本颜色" @click="changeColor" />
    <p v-color="color">劝我试求三亩宅，从公已觉十年迟</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'red'
    };
  },
  directives: {
    color: {
      // 绑定指令的元素被插入父元素时调用---相当于初始化显示红色文本
      // 钩子只执行一次
      // 打印 {name: "color", rawName: "v-color", value: "red", expression: "color", modifiers: {…}, …}
      inserted: function(el, binding) {
        console.log(binding);
        el.style.color = binding.value;
      },
      // bind钩子，表示指令第一次被绑定到元素时执行
      // 钩子只执行一次
      bind: function(el, binding) {},
      // 所有Vnode更新时调用，可能发生子Vnode更新之前。指令值可能发生改变，也可能不变
      // 钩子可以多次执行
      // 这种更新不是响应式的，原因是inserted bind钩子都只执行一次
      update: function(el, binding) {
        el.style.color = binding.value;
      },
      // 指令的所有Vnode和子Vnode更新时调用
      componentUpdated: function(el, binding) {},
      // 指令解绑时执行
      // 这个钩子只执行一次
      unbind: function(el, binding) {}
    }
  },
  methods: {
    changeColor() {
      this.color = 'green';
    }
  }
};
</script>
