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
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/FloatingMenu/index.vue',
    },
  },
  {
    path: '/links',
    component: () => import(/* webpackChunkName: "links" */ '../views/Links/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/Links/index.vue',
    },
  },
  {
    path: '/images',
    component: () => import(/* webpackChunkName: "Images" */ '../views/Images/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/Images/index.vue',
    },
  },
  {
    path: '/hiding-menu-bar',
    component: () => import(/* webpackChunkName: "hiding-menu-bar" */ '../views/HidingMenuBar/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/HidingMenuBar/index.vue',
    },
  },
  {
    path: '/tables',
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/Tables/index.vue',
    },
  },
  {
    path: '/todo-list',
    component: () => import(/* webpackChunkName: "tables" */ '../views/TodoList/index.vue'),
    meta: {
      githubUrl: 'https://github.com/daisuke85a/tiptap-starter-kit/blob/master/src/views/TodoList/index.vue',
    },
  },

];

const router = new VueRouter({
  routes,
});

export default router;
