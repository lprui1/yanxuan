<template>
    <div class="daifukuan">
        <orderstatus></orderstatus>
        <scroller ref="my_scroller"> 
            <div class="haslist">
                <ul>
                    <li v-for="(item,index) in daifukuan" :key="index">
                        <p>
                            <span>下单时间：{{item.dateAdd}}</span>
                            <!-- <span class="yanse">{{item.statusStr}}</span> -->
                            <span class="yanse">待付款</span>
                        </p>
                        <p>
                            订单号:{{item.orderNumber}}
                        </p>
                        <p class="picture">
                            <img :src="goods[item.id][0].pic" alt="">
                        </p>
                        <p>
                            <span class="yanse">合计：￥{{item.amount*item.goodsNumber}}</span>
                            <span id="btns">
                                <button>取消订单</button>
                                <button>立即支付</button>
                            </span>
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
            haslist:false,
            daifukuan:{},       //订单列表
            goods:{},
        }
    },
    created() {
        //获取所有用户订单列表
        let paramss = new URLSearchParams()
        paramss.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/order/list',paramss).then(res => {
            // console.log(res)
            var OredrList = res.data.data.orderList
            this.goods = res.data.data.goodsMap
            console.log(this.goods)
            this.daifukuan = OredrList.filter(item => {
                return item.status === -1
            })
            // console.log(this.daifukuan)

        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
    },
}
</script>

<style>

</style>
