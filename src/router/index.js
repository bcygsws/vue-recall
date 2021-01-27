import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
// 导入自定义指令组件
import Dir from '../components/directive/Dir.vue';
import Life from '../components/life/LifeCircle.vue';
import Pack from '../components/ajaxPack/AjaxPack.vue';
import Axios from '../components/axiopack/AxiosPack.vue';
import CancelRequest from '../components/cancelrequest/CancelRequest.vue';
import QS from '../components/qs/QS.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/directives',
        component: Dir
      },
      {
        path: '/home/life',
        component: Life
      },
      {
        path: '/home/ajax_pack',
        component: Pack
      },
      {
        path: '/home/axios_pack',
        component: Axios
      },
      {
        path: '/home/cancel_request',
        component: CancelRequest
      },
      {
        path: '/home/qs',
        component: QS
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
