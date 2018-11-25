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
//详情页商品介绍和商品评价
import shopmain from '@/views/index/shopmain'
//详情页商品介绍
import shopleft from '@/views/index/shopleft'
//商品页详情页商品评价
import shopright from '@/views/index/shopright'
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
import Cart from '@/views/order/cart'
//确认订单
import confirm from '@/views/order/confirm'
//订单列表
import cartlist from '@/views/order/cartlist'
//确认付款页面
import payfor from '@/views/order/payfor'
//待付款
import daifukuan from '@/views/order/daifukuan'
//待发货
import daifahuo from '@/views/order/daifahuo'
//待收货
import daishouhuo from '@/views/order/daishouhuo'
//待评价
import daipingjia from '@/views/order/daipingjia'
//已完成
import yiwancheng from '@/views/order/yiwancheng'
//评价
import evaluate from '@/views/order/evaluate'

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
//注册
import reg from '@/views/person/reg'
//登录
import log from '@/views/person/log'

//购物车
import gouwuche from '@/views/index/gouwuche'

Vue.use(Router)
export default new Router({
  // mode:'history',
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
      path: '/gouwuche',
      component: gouwuche
    },
    {
      path: '/cartlist',
      component: cartlist,
      redirect: '/cartlist',
      children: [
        {
          path: '/daifukuan',
          component: daifukuan
        }, 
        {
          path: '/daifahuo',
          component: daifahuo
        },
        {
          path: '/daishouhuo',
          component: daishouhuo
        },
        {
          path: '/daipingjia',
          component: daipingjia
        },
        {
          path: '/yiwancheng',
          component: yiwancheng
        },
      ]
    },
    {
      path: '/payfor',
      component: payfor
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
      path: '/shopmain',
      component: shopmain,
      children: [
        {
          path: '/shopleft',
          component: shopleft
        },
        {
          path: '/shopright',
          component: shopright
        },
      ]
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
      path: '/reg',
      component: reg
    },
    {
      path: '/log',
      component: log
    },
    {
      path: '/orderlist',
      component: orderlist
    },
    {
      path: '/evaluate',
      component: evaluate
    }
  ]
})
