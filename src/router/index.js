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
import KeepAlive from '../components/keepalive/KeepAlive.vue';
import VueCross from '../components/vuecross/VueCross.vue';
import ApiCross from '../components/api/ApiCross.vue';
import Table from '../components/api/Table.vue';
import ElTable from '../components/api/ElTable.vue';
import Slot from '../components/slot/Slot.vue';
import Lazy from '../components/importbyneed/ImportLazy.vue';
import KeyProp from '../components/keyprop/KeyProp.vue';
import CompWatch from '../components/compwatch/CompWatch.vue';
import Watch from '../components/compwatch/Watch.vue';
import Comp from '../components/compwatch/Computed.vue';
import Filter from '../components/filter/Filter.vue';

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
      },
      {
        path: '/home/keep_alive',
        component: KeepAlive
      },
      {
        path: '/home/vue_cross',
        component: VueCross
      },
      {
        path: '/home/api_cross',
        component: ApiCross,
        children: [
          { path: '/home/api_cross/table', component: Table },
          { path: '/home/api_cross/el_table', component: ElTable }
        ]
      },
      {
        path: '/home/slot',
        component: Slot
      },
      {
        path: '/home/lazy',
        component: Lazy
      },
      {
        path: '/home/key_prop',
        component: KeyProp
      },
      {
        path: '/home/comp_watch',
        component: CompWatch,
        children: [
          { path: '/home/comp_watch/watch', component: Watch },
          { path: '/home/comp_watch/computed', component: Comp }
        ]
      },
      {
        path: '/home/filter',
        component: Filter
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
