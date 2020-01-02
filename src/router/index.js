import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const login = r => require.ensure([], () => r(require('@/views/Login')), 'login');
const home = r => require.ensure([], () => r(require('@/views/Home')), 'home');
const content = r => require.ensure([], () => r(require('@/views/Content')), 'content');
const personnel = r => require.ensure([], () => r(require('@/views/Personnel')), 'personnel');

const routes = [{
    path: '/',
    component: login
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home,
    name: '',
    meta: {
      requireAuth: true, // 判断是否需要登录
    },
    children: [{
      path: '',
      component: content,
      meta: []
    }, {
      path: '/personnel',
      component: personnel,
      meta: ['人员管理'],
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
