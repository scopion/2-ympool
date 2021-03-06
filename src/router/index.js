import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const wallet = r => require.ensure([], () => r(require('../page/wallet/wallet')), 'wallet')
const help = r => require.ensure([], () => r(require('../page/help/help')), 'help')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const notFound = r => require.ensure([], () => r(require('../page/notFound/notFound')), 'notFound')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    //首页展示
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '焱猫矿池',
      }
    },
    //查询细节
    {
      path: '/wallet.html',
      name: 'wallet.html',
      component: wallet,
      meta: {
        title: '矿池收益-焱猫矿池',
      }
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      meta: {
        title: '帮助-焱猫矿池',
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于我们-焱猫矿池',
      }
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: notFound,
      meta: {
        title: '页面不存在-焱猫矿池',
      }
    },
  ]
})

export default router
