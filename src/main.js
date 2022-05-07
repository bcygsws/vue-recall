import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import axios from 'axios';
import '../public/css/style.less';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3001/';
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
console.log(vm);
console.log(vm.$route.path);
