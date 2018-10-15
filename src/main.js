  // Copyright (c) 2018.10.8 Copyright Holder All Rights Reserved.
  // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import Vuex from 'vuex'
  // 兼容处理
  import 'babel-polyfill'
  import 'url-search-params-polyfill'
  import 'es6-promise/auto'
  /*全局引入*/
  import md5 from 'js-md5';
  import iView from 'iview';
  import echarts from 'echarts'
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import api from './api/api.js';
  import common from './common/common.js'; //引入公共方法
  import global_ from './components/tool/global'
  //css
  import 'iview/dist/styles/iview.css';
  import 'swiper/dist/css/swiper.css'; //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  require('!style-loader!css-loader!less-loader!./style/commonStyle.less')
  Vue.prototype.$md5 = md5
  Vue.prototype.common = common; //引入公共方法&修改VUE原型方法
  Vue.prototype.api = api; //引入公共方法&修改VUE原型方法
  Vue.prototype.$axios = axios
  Vue.config.productionTip = false
  Vue.prototype.$echarts = echarts
  Vue.prototype.GLOBAL = global_ //全局变量

  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    // if (sessionStorage.getItem("user")) {
    //   return next();
    // } else {
    //   return next({
    //     path: "/home"
    //   });
    // }
    next();
  })

  /* eslint-disable no-new */
  Vue.use(iView)
  Vue.use(Vuex)
  Vue.use(VueAxios, axios)
  Vue.use(VueAwesomeSwiper, /* { default global options } */ )
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })
