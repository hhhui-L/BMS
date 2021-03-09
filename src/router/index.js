import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    // 重定向：初始为login界面
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/device/bms',
        name: 'Bms',
        component: () => import('../views/bms/Bms'),
        meta: {
          title: '电池监控'
        }
      },
      {
        path: '/device/data',
        name: 'DataStatistics',
        component: () => import('../views/bms/DataStatistics'),
        meta: {
          title: '数据统计'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound'),
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  routes,
  // 网址不出现哈希值#
  mode: 'history',
  linkActiveClass: 'active'
})

// 网址显示title
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
