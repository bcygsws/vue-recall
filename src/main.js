import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import axios from 'axios';
import '../public/css/style.less';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
