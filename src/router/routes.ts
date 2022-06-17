import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('src/shared/layouts/AuthLayout.vue'),
    meta: {
      authPage: true
    }
  },
  {
    path: '/',
    component: () => import('src/shared/layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
export default routes;
