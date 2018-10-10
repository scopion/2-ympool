  // Copyright (c) 2018.10.8 Copyright Holder All Rights Reserved.
  // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  /*全局引入*/
  import iView from 'iview';
  import echarts from 'echarts'
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import commonFunction from './commonFunction/commonFunction.js'; //引入公共方法
  Vue.prototype.commonFunction = commonFunction; //引入公共方法&修改VUE原型方法
  //css
  import 'iview/dist/styles/iview.css';
  import 'swiper/dist/css/swiper.css'; //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import './style/commonStyle.css' //公共样式
  Vue.config.productionTip = false

  Vue.prototype.$echarts = echarts


  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  })

  /* eslint-disable no-new */
  Vue.use(iView)
  Vue.use(VueAwesomeSwiper, /* { default global options } */ )
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })
