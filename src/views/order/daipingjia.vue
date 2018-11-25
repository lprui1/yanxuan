<template>
    <div class="daipingjia">
        <orderstatus></orderstatus>
        <scroller ref="my_scroller">
            <div class="haslist">
                <ul>
                    <li v-for="(item,index) in daipingjia" :key="index">
                        <p>
                            <span>下单时间：{{item.dateAdd}}</span>
                            <span class="yanse">
                                <b @click="b(item)">{{item.statusStr}}</b>
                            </span>
                        </p>
                        <p>
                            订单号:{{item.orderNumber}}
                        </p>
                        <p class="picture">
                            <img :src="goods[item.id][0].pic" alt="">
                        </p>
                    </li>
                </ul>
            </div>
        </scroller>
    </div>
</template>

<script>
import Axios from 'axios'
import orderstatus from '../order/orderstatus'
export default {
    components: {
        orderstatus
    },
    data() {
        return {
            daipingjia:{},
            goods:{}
        }
    },
    created() {
        //获取所有用户订单列表
        let paramss = new URLSearchParams()
        paramss.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/order/list',paramss).then(res => {
           var OredrList = res.data.data.orderList
           this.goods = res.data.data.goodsMap
            this.daipingjia = OredrList.filter(item => {
                return item.status === 3
            })
            // console.log(this.daipingjia[0].id)
            // console.log(res.data.data)
        })
    },
    methods:{
        b(item){
            console.log(item)
            localStorage.setItem('ids',item.id)
            this.$router.push({
                path:'/evaluate'
            })
        }
    }
}
</script>

<style>

</style>
