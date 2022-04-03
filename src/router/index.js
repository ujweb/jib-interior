import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front/IndexView.vue'),
    children: [{
      path: '/',
      component: () => import('../views/Front/HomeView.vue'),
      meta: {
        title: '首頁',
      },
    },
    {
      path: 'about',
      component: () => import('../views/Front/AboutView.vue'),
      meta: {
        title: '關於 Jib',
      },
    },
    {
      path: 'team',
      component: () => import('../views/Front/TeamView.vue'),
      meta: {
        title: '團隊介紹',
      },
    },
    {
      path: 'contact',
      component: () => import('../views/Front/ContactView.vue'),
      meta: {
        title: '聯絡我們',
      },
    },
    {
      path: 'works',
      component: () => import('../views/Front/WorksView.vue'),
      meta: {
        title: '設計作品',
      },
    },
    {
      path: 'work/:id',
      component: () => import('../views/Front/WorkView.vue'),
      meta: {
        title: '設計作品',
      },
    },
    {
      path: 'products',
      component: () => import('../views/Front/ProductsView.vue'),
      meta: {
        title: '家具選購',
      },
    },
    {
      path: 'product/:id',
      component: () => import('../views/Front/ProductView.vue'),
      meta: {
        title: '家具選購',
      },
    },
    {
      path: 'checkout',
      component: () => import('../views/Front/CheckoutView.vue'),
      meta: {
        title: '訂購資訊',
      },
    },
    {
      path: 'bill/:id',
      component: () => import('../views/Front/BillView.vue'),
      meta: {
        title: '建立訂單',
      },
    }],
  },
  // 登入頁
  {
    path: '/login',
    component: () => import('../views/Front/LoginView.vue'),
    meta: {
      title: '登入',
    },
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Admin/DashboardView.vue'),
    children: [{
      path: 'products',
      component: () => import('../views/Admin/ProductsView.vue'),
      meta: {
        title: '產品後台',
      },
    },
    {
      path: 'orders',
      component: () => import('../views/Admin/OrdersView.vue'),
      meta: {
        title: '訂單後台',
      },
    },
    {
      path: 'coupons',
      component: () => import('../views/Admin/CouponsView.vue'),
      meta: {
        title: '優惠券後台',
      },
    },
    {
      path: 'articles',
      component: () => import('../views/Admin/ArticlesView.vue'),
      meta: {
        title: '文章後台',
      },
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
