import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const details = r => require.ensure([], () => r(require('../page/details/details')), 'details')
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
        content: 'disable'
      }
    },
    //查询细节
    {
      path: '/details',
      name: 'details',
      component: details,
      meta: {
        title: '矿池收益-焱猫矿池',
        content: 'disable'
      }
    },
    {
      path: '/text',
      name: 'text',
      component: text,
      meta: {
        title: '帮助-焱猫矿池',
        content: 'disable'
      }
    },
  ]
})
