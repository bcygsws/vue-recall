<template>
  <div>
    <h3>这是vue2生命周期演示案例</h3>
    <p id="para">{{ msg }}</p>
    <input type="button" value="点击案例改变msg的值" @click="changeValue" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'ok'
    };
  },
  methods: {
    changeValue() {
      this.msg = '骑驴渺渺入荒陂';
    },
    printA() {
      alert('A');
    }
  },
  beforeCreate() {
    // data methods都没有完成初始化
    // console.log(this.msg); // undefined
    // this.printA();// 报错：this.printA is not a function"
    // console.log(document.getElementById('para').innerText);
  },
  // 如果想获取data值，操作methods中的方法，最早也只能在created阶段
  created() {
    console.log(this.msg); // ok
    // 在created阶段可以调用methods中定义的方法了
    // this.printA();
  },
  beforeMount() {
    // 此时模板已经在内存中编译好了，还没有挂载到页面中，页面还是旧的
    /* 代码报错：Error in beforeMount hook: "TypeError: Cannot read property 'innerText' of null */
    // console.log(document.getElementById('para').innerText);
  },
  // 操作DOM最早也应该在Mounted阶段
  mounted() {
    console.log(document.getElementById('para').innerText); // 打印ok, 可以操作DOM
  },
  // 点击按钮以后，测试beforeUpdate和updated阶段
  // 此阶段，data数据已经完成了更新，但是页面还是旧的     render函数执行，生成了虚拟DOM,但是还是在patch之前的阶段
  beforeUpdate() {
    console.log(this.msg); // 打印：骑驴渺渺入荒陂  data已经是新值
    console.log(document.getElementById('para').innerText); // 打印：ok  页面中的DOM中还是旧值
  },
  // 此阶段是页面patch和重新渲染之后，不仅data更新了，更新的页面也重新渲染出来了
  updated() {
    console.log(this.msg);
    console.log(document.getElementById('para').innerText);
  }
};
</script>
