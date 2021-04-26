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
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/register'),
    meta: {
      title: '注册账号'
    }
  },
  {
    path: '/changePwd',
    name: 'changePwd',
    component: () => import('../views/changePwd/changePwd'),
    meta: {
      title: '修改密码',
      requireAuth: true
    }
  },
  {
    path: '/main',
    name: '首页',
    component: () => import('../views/Main'),
    meta: {
      title: '首页',
      requireAuth: true
    },
    children: [
      {
        path: '/',
        // 重定向：初始为当前实验界面
        redirect: '/currentexp'
      },
      {
        path: '/currentexp',
        name: '当前实验',
        component: () => import('../views/currentExperiment/currentExperiment'),
        meta: {
          title: '当前实验',
          requireAuth: true
        }
      },
      {
        path: '/bms',
        name: '电池监控',
        component: () => import('../views/bms/Bms'),
        meta: {
          title: '电池监控',
          requireAuth: true
        }
      },
      {
        path: '/setting',
        name: '工艺设置',
        component: () => import('../views/setting/setting'),
        meta: {
          title: '工艺设置',
          requireAuth: true
        }
      },
      {
        path: '/expdata',
        name: '实验数据',
        component: () => import('../views/expData/expData'),
        meta: {
          title: '实验数据',
          requireAuth: true
        }
      },
      {
        path: '/manage',
        name: '项目管理',
        component: () => import('../views/manage/manage'),
        meta: {
          title: '项目管理'
        }
      },
      {
        path: '/test',
        name: '项目测试',
        component: () => import('../views/test'),
        meta: {
          title: '项目测试'
        }
      },
      {
        path: '/expdata/datarecord',
        name: '数据记录',
        component: () => import('../views/dataRecord/dataRecord'),
        meta: {
          title: '数据记录'
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
  document.title = to.matched[0].meta.title // 显示标题
  // next()
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('isLogin') === 'true') {
      next()
    } else {
      // 未登录，跳转到登录页面
      next('/login')
    }
  } else {
    // if (sessionStorage.getItem('isLogin') === 'true') {
    //   next('/menu')
    // } else {
    //   next()
    // }
    next()
  }
})
export default router
