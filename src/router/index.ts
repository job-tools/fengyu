import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录方式选择页
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    // 账号密码登录
    {
      path: '/login/account',
      component: () => import('@/views/login/account.vue')
    },
    // 手机验证码登录
    {
      path: '/login/sms',
      component: () => import('@/views/login/sms.vue')
    },
    // 注册
    {
      path: '/login/registry',
      component: () => import('@/views/login/registry.vue')
    },


    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      children: [
        // {
        //   path: 'role',
        //   component: () => import('@/views/role/index.vue'),
        //   meta: { name1: '角色管理', name2: '角色列表' }
        // },
        // 首页
        {
          path: '/index',
          alias: "/",
          component: () => import('@/views/Index/Index.vue'),
          meta: { name: '首页' }
        },
        // 我的
        {
          path: '/personalCenter',
          component: () => import('@/views/personalCenter/index.vue'),
          meta: { name: '我的' }
        },
        {
          path: '/',
          component: () => import('@/views/Index/Index.vue'),
          meta: { name1: '首页', name2: '首页' }
        }
      ]
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/question/Create.vue'),
          meta: { name: '发布问题' }
        },
        {
          path: 'list',
          component: () => import('@/views/question/List.vue'),
          meta: { name: '问题列表' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/404.vue')
    }
  ]
});

// router.addRoute('layout', {
//   path: 'order',
//   component: () => import('@/views/order/index.vue'),
//   meta: { name1: '订单管理', name2: '订单列表' }
// })

// router.addRoute('layout', {
//   path: 'user/create',
//   component: () => import('@/views/user/create.vue'),
//   meta: { name1: '用户管理', name2: '用户创建' }
// })

export default router;
