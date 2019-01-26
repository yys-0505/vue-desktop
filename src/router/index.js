import Vue from 'vue'
import Router from 'vue-router'
import { getData } from 'utils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['components/Login'], resolve)
    },
    {
      path: '/home',
      // component: Home,
      component: resolve => require(['components/Home'], resolve),
      redirect: '/opt1',
      meta: {
        breadcrumbName: '导航一',
        keepAlive: true
      },
      children: [
        {
          path: '/opt1',
          component: resolve => require(['components/Option11'], resolve),
          meta: {
            keepAlive: true,
            breadcrumbName: '选项一'
          }
        },
        {
          path: '/opt2',
          component: resolve => require(['components/Option12'], resolve),
          meta: {
            keepAlive: true,
            breadcrumbName: '选项二'
          }
        },
        {
          path: '/opt3',
          component: resolve => require(['components/Option13'], resolve),
          meta: {
            keepAlive: true,
            breadcrumbName: '选项三'
          }
        },
        {
          path: '/opt4',
          component: resolve => require(['components/Option14'], resolve),
          meta: {
            breadcrumbName: '选项四'
          },
          redirect: '/opt41',
          children: [
            {
              path: '/opt41',
              component: resolve => require(['components/Option141'], resolve),
              meta: {
                keepAlive: true,
                breadcrumbName: '选项一'
              }
            }
          ]
        },
        {
          path: '/opt5',
          component: resolve => require(['components/Option15'], resolve),
          meta: {
            breadcrumbName: '选项五',
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/home',
      component: resolve => require(['components/Home'], resolve),
      meta: {
        breadcrumbName: '导航二',
        keepAlive: true
      },
      children: [
        {
          path: '/opt21',
          component: resolve => require(['components/Option21'], resolve),
          meta: {
            keepAlive: true,
            breadcrumbName: '选项一'
          }
        },
        {
          path: '/opt22',
          component: resolve => require(['components/Option22'], resolve),
          meta: {
            keepAlive: true,
            breadcrumbName: '选项二'
          }
        }
      ]
    },
    {path: '/', redirect: '/home'},
    {path: '*', redirect: '/home'}// 404
  ]
})

router.beforeEach((to, from, next) => {
  const username = getData('username')
  if (!username && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
