import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import(/* webpackChunkName: "slider" */ '../views/Slider.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
