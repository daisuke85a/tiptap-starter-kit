import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/Basic/index.vue',
    },
  },
  {
    path: '/menu-bubble',
    component: () => import(/* webpackChunkName: "menu-bubble" */ '../views/MenuBubble/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/MenuBubble/index.vue',
    },
  },
  {
    path: '/floating-menu',
    component: () => import(/* webpackChunkName: "floating-menu" */ '../views/FloatingMenu/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/MenuBubble/FloatingMenu/index.vue',
    },
  },
  {
    path: '/links',
    component: () => import(/* webpackChunkName: "links" */ '../views/Links/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/MenuBubble/Links/index.vue',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
