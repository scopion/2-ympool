import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const text = r => require.ensure([], () => r(require('../page/text/text')), 'text')

Vue.use(Router)

export default new Router({
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
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        title: '矿池收益-焱猫矿池',
      }
    },
    {
      path: '/text',
      name: 'text',
      component: text,
      meta: {
        title: '帮助-焱猫矿池',
      }
    },
  ]
})
