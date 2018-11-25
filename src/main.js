// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
//aioxs
import Axios from 'axios'
//阿里巴巴图标
// import './iconfont/font_909414_563yby9czf/iconfont.css'
import './iconfont/font_922466_g5x1ab79pm/iconfont.css'

//api
import './config/global'
//swiper
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
//app.scss
import '@/assets/css/app.scss'

//懒加载
import VueLazyload from 'vue-lazyload'

//上拉加载更多
import infiniteScroll from 'vue-infinite-scroll'
//store
import store from './store'

//scroller
import VueScroller from 'vue-scroller'
import VueCookie from 'vue-cookie'
Vue.use(Vuex)
Vue.use(VueLazyload,{
  loading:'../static/lazy.gif'
})
Vue.use(infiniteScroll)
Vue.use(VueScroller)

//cookie

Vue.use(VueCookie)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
