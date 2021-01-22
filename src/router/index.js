import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
// 导入自定义指令组件
import Dir from '../components/directive/Dir.vue';
import Life from '../components/life/LifeCircle.vue';

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
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
