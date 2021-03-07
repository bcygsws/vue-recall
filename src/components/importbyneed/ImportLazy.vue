<template>
  <div>
    <h3>.vue文件按需引入，路由懒加载</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    print() {
      /**
       * .vue文件的常规引入方式和按需引入（即路由懒加载方式）
       * 1.常规方式：
       * import child from '../slot/Child.vue';
       * 
       * 2.按需引入的方式：
       * webpack 2.4以前
       * 参数1；懒加载时需要的模块，用空数组[]参数表示
       * 参数2：箭头函数返回 return r()路由路径
       * 参数3：组块名称，childChunk
       * const child=r=>require.ensure([],()=>r(require('../slot/Child.vue')),'childChunk');
       * webpack 2.4以后，现在懒加载的引入方式
       */
      //  const child=()=>import(/* webpackChunkName:'childChunk' */'../slot/Child.vue');  
    
    }
  }
};
</script>
