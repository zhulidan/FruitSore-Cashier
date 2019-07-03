import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home')
    },
    {
      path: '/stockPurchase',
      name: 'stockPurchase',
      component: () => import('../components/stockPurchase')
    },
    {
      path: '/stock',
      name: 'stock',
      component: () => import('../components/stock')
    },
    {
      path: '/reportForm',
      name: '/reportForm',
      component: () => import('../components/reportForm'),
      children: [//children 中的路径永远不带/，如果带/表示是1级路由
        { path: '1', component: () => import('../components/reportForm') },
      
      ]
    }
  ]
})
