<template>
    <div class="daishouhuo">
        <orderstatus></orderstatus>
        <scroller ref="my_scroller">
            <div class="haslist">
                <ul>
                    <li v-for="(item,index) in yiwancheng" :key="index">
                        <p>
                            <span>下单时间：{{item.dateAdd}}</span>
                            <span class="yanse">{{item.statusStr}}</span>
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
            haslist:false,
            yiwancheng:{},       //订单列表
            goods:{}
        }
    },
    created() {
        //获取所有用户订单列表
        let paramss = new URLSearchParams()
        paramss.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/order/list',paramss).then(res => {
            var OredrList = res.data.data
            this.goods = res.data.data.goodsMap
            this.yiwancheng = OredrList.orderList.filter(item => {
                return item.status === 4
            })
            this.yiwancheng.map(item => {
                console.log(item)   
            })
            let goods = res.data.data.goodsMap
            for(var i=0;i<goods.length;i++) {
            }
        })
    }
}
</script>

<style>

</style>
