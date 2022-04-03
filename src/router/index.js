import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front/IndexView.vue'),
    children: [{
      path: '/',
      component: () => import('../views/Front/HomeView.vue'),
    },
    {
      path: 'about',
      component: () => import('../views/Front/AboutView.vue'),
    },
    {
      path: 'team',
      component: () => import('../views/Front/TeamView.vue'),
    },
    {
      path: 'contact',
      component: () => import('../views/Front/ContactView.vue'),
    },
    {
      path: 'works',
      component: () => import('../views/Front/WorksView.vue'),
    },
    {
      path: 'work/:id',
      component: () => import('../views/Front/WorkView.vue'),
    },
    {
      path: 'products',
      component: () => import('../views/Front/ProductsView.vue'),
    },
    {
      path: 'product/:id',
      component: () => import('../views/Front/ProductView.vue'),
    },
    {
      path: 'bill/:id',
      component: () => import('../views/Front/BillView.vue'),
    },
    {
      path: 'checkout',
      component: () => import('../views/Front/CheckoutView.vue'),
    }],
  },
  // 登入頁
  {
    path: '/login',
    component: () => import('../views/Front/LoginView.vue'),
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Admin/DashboardView.vue'),
    children: [{
      path: 'products',
      component: () => import('../views/Admin/ProductsView.vue'),
    },
    {
      path: 'orders',
      component: () => import('../views/Admin/OrdersView.vue'),
    },
    {
      path: 'coupons',
      component: () => import('../views/Admin/CouponsView.vue'),
    },
    {
      path: 'articles',
      component: () => import('../views/Admin/ArticlesView.vue'),
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
