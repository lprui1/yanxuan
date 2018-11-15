import Vue from 'vue'
import Router from 'vue-router'
//首页
import Index from '@/views/index/index'
//砍价列表
import Cut from '@/views/index/cutlist'
//全民砍价详情
import Cutdeatil from '@/views/index/cutdetail'
//加入到购物车详情
import addcartdetail from '@/views/index/addcartdetail'
//拼团详情
import group from '@/views/index/group'
//精选主题   严选专栏   页面
import Selectedlist from '@/views/index/Selectedlist'
//专栏详情
import Selectdetail from '@/views/index/selectdetail'
//首页签到
import Sigin from '@/views/index/sigin'
//优惠券
import Gift from '@/views/index/gift'
//分类
import Sort from '@/views/sort/sort'
//购物车
import Cart from '@/views/cart/cart'
//确认订单
import confirm from '@/views/cart/confirm'
//个人
import Person from '@/views/person/person'
//我的地址
import Myaddress from '@/views/person/myaddress'
//我的余额
import Balance from '@/views/person/balance'
//新增地址
import newaddress from '@/views/person/newaddress'
//订单列表
import orderlist from '@/views/person/orderlist'
//登录
import Login from '@/views/person/login'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/cutlist',
      component: Cut
    },
    {
      path: '/cutdetail',
      component: Cutdeatil
    },
    {
      path: '/Selectedlist',
      component: Selectedlist
    },
    {
      path: '/sigin',
      component: Sigin
    },
    {
      path: '/gift',
      component: Gift
    },
    {
      path: '/addcartdetail/:id',//传参第一步   在目标路由匹配所需的参数
      component: addcartdetail
    },
    {
      path: '/group',
      component: group
    },
    {
      path: '/myaddress',
      component: Myaddress
    },
    {
      path: '/balance',
      component: Balance
    },
    {
      path: '/newaddress', 
      component: newaddress
    },
    {
      path: '/confirm',
      component: confirm
    },
    {
      path: '/selectdetail/:id',
      component: Selectdetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/orderlist',
      component: orderlist
    }  
  ]
})
