import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios' 

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        sortlist: [],
        listdata:[],
        goodlist:[]
    },
    getters:{
        leftdata(state){
          return  state.sortlist.filter(item => {
                return item.level===1
            })
        },
        rightdata(state) {
            return state.sortlist.filter(item => {
                return item.level === 2
            })
        }
    },
    mutations: {
        getlist(state) {
            Axios.post('/api/small4/shop/goods/category/all').then((res) => {
                let { data } = res.data;
                state.sortlist = data;
            })
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
        }
    }
})

export default store