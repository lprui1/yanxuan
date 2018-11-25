import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios' 

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        sortlist: [],
        so:[],
        listdata:[],
        goodlist:[],
        getsize:[],
        faqilist:'',      //发起砍价列表
        KJlist:[],
        Name:{},
        name:{},
        CUT:{},
        Token:'',        //token
        tjdd:{},         //提交订单
        photo:[]
    },
    getters:{
        leftdata(state){
          return  state.sortlist.filter(item => {
                return item.level===1
            })
        },
        rightdata(state) {
            return state.so.filter(item => {
                return item.level === 2
            })
        }
        
    },
    mutations: {
        getlist(state) {
            Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then((res) => {
                let { data } = res.data;
                state.sortlist = data;
                state.so = data;
            })
        },
        sort(state,payload) {
            state.so = state.sortlist.filter(i => {
                return i.type === payload + 2
            }) 
        },
        all(state){
            state.so = state.sortlist
        },
        //购物车里的加
        increments(state,payload) {
            payload.num++;
        },
        //购物车里的减
        decrements(state,payload) {
            payload.num--;
        },
        //加入购物车
        Addcart(state,payload) {
            state.listdata.push(payload)
        },
        //选择规格
        xguige(state,payload) {
            state.goodlist = payload
        },
        //选择服务
        Fuwu(state,payload) {
            state.Name = payload
        },
        Versions(state,payload) {
            state.name = payload
        },
        //发起砍价
        faqikj(state,payload) {
            state.faqilist = payload
            console.log(payload)
            // console.log('aaaa')
            // console.log(state.faqilist)
        },
        //砍价参数
        kan(state,payload) {
            state.KJlist = payload
        },
        //提交订单
        tijiao(state,payload) {
            state.tjdd = payload
        }
    }
})

export default store