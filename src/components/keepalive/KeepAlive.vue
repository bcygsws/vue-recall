<template>
  <div>
    <h3>这是keep-alive组件的使用</h3>
    <keep-alive>
      <coma v-if="flag"></coma>
      <comb v-else></comb>
    </keep-alive>
    <input type="button" value="切换coma和comb组件的显示和隐藏，理解keep-alive的缓存机制" @click="switchCom" />
  </div>
</template>
<script>
import coma from './Coma.vue';
import comb from './Comb.vue';
export default {
  data() {
    return { flag: true };
  },
  components: {
    coma,
    comb
  },
  methods: {
    switchCom() {
      this.flag = !this.flag;
    }
  }
};
</script>
