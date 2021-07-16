<template>
  <div class="alive_container">
    <h3>这是keep-alive组件的使用</h3>
    <!-- <keep-alive>
      <coma v-if="flag"></coma>
      <comb v-else></comb>
    </keep-alive>
    <input type="button" value="切换coma和comb组件的显示和隐藏，理解keep-alive的缓存机制" @click="switchCom" /> -->
    <!-- max属性，缓存组件个数最多为10个；include属性设置后，仅coma 和comb的文本输入框中的内容，在动态组件切换可以保持，
    不被覆盖.comc中输入的内容会被覆盖。但注意：如果使用正则表达式或者数组的方式，那么include属性要使用v-bind绑定，而使用使用
    正常的,分割的方式，则无须动态绑定-->
    <!-- <keep-alive max="10" include="coma,comb"> -->
    <!-- <keep-alive max="10" :include="['coma','comb']"> -->
    <!-- 或者使用下面的第三种方式： -->
    <keep-alive max="10" :include="/coma|comb|comc/">
      <component :is="whichId"></component>
    </keep-alive>
    <input type="button" value="coma" @click="selected('a')" />
    <input type="button" value="comb" @click="selected('b')" />
    <input type="button" value="comc" @click="selected('c')" />
  </div>
</template>
<script>
import coma from './Coma.vue';
import comb from './Comb.vue';
import comc from './Comc.vue';
export default {
  /**
   * keep-alive是vue的内置组件，包裹一个动态组件时（注意：必须是动态组件，而且keep-alive中不能出现循环v-for这样的语句，只用在其直属的一个子组件的开关状态），
   * 用来对组件进行缓存，节省性能
   * 知识点：3个属性、2个钩子
   * 1.keep-alive是一个抽象组件，所以不会渲染成一个具体的DOM元素
   * 2.keep-alive属性，有条件缓存的属性两个：exclude(不缓存哪些组件，优先级高于include)、include（缓存哪些组件）。
   * 属性值可以是字符串、数组和正则表达式，当属性值是数组或者正则表达式，需要使用v-bind动态绑定include或exclude,即
   * :include :exclude
   * vue 2.5.0新增了一个max属性，用于限制最多可以缓存多少个组件实例
   * 3.keep-alive的生命周期钩子activated、deactivated
   * 4.keep-alive中组件就不会执行beforeDestroy 和destroyed事件了，因为keep-alive会将组件缓存起来，而非销毁
   * Vue路由开启keep-alive时的注意点，https://www.jianshu.com/p/42429f4d8f9e
   * 当页面中引入keep-alive时，钩子的执行顺序是：
   * created > mounted > activated ，退出时触发deactivated。当再次进入时（前进或后退时）,只触发activated
   *
   */
  data() {
    return { flag: true, whichId: 'coma' };
  },
  components: {
    coma,
    comb,
    comc
  },
  created() {
    console.log('created阶段了');
  },
  mounted() {
    console.log('mounted阶段了');
  },
  // keep-alive切换时，这两个生命周期钩子都会执行
  activated() {
    console.log('activated钩子执行了');
  },
  deactivated() {
    console.log('deactivated生命周期钩子也执行了');
  },
  methods: {
    switchCom() {
      this.flag = !this.flag;
    },
    selected(res) {
      this.whichId = 'com' + res;
    }
  }
};
</script>
<style lang="less" scoped>
.alive_container {
  input[type='button'] {
    margin-right: 30px;
  }
}
</style>
