import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic/Index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/Basic/Index.vue',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
