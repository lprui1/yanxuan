<template>
    <div class="daifukuan">
        <orderstatus></orderstatus>
        <div>
            <p>待发货</p>
            <ul>
                <li v-for="(item,index) in daifahuo" :key="index">
                    <p>
                        <span>下单时间：{{item.dateAdd}}</span>
                        <span class="yanse">{{item.statusStr}}</span>
                    </p>
                    <p>
                        订单号:{{item.orderNumber}}
                    </p>
                    <p class="picture">
                        <img src="../../img/pic1.jpg" alt="">
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
            daifahuo:{}
        }
    },
    created() {
        //获取所有用户订单列表
        let paramss = new URLSearchParams()
        paramss.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/order/list',paramss).then(res => {
           var OredrList = res.data.data.orderList
            this.daifahuo = OredrList.filter(item => {
                return item.status === 1
            })
            console.log(this.daifahuo)
        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
    }
}
</script>

<style>

</style>
