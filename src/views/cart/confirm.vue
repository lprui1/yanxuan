<template>
    <div class="confirm">
        <a href="#" class="shang"><span>&lt;</span></a>
        <!--头部-->
        <div class="confirmheader">
            <h4>确认订单</h4>
        </div>
        <!--section中间内容-->
        <div class="confirmsection">
            <!--点击新增收货地址-->
            <router-link to="/myaddress">
                <div class="confirmtop" v-if="hasaddress">
                    <div class="left">
                        <button>+</button>
                        <span>新增收货地址</span>
                    </div>
                    <a>&gt;</a>
                </div>
            </router-link>
                <!--有地址-->
            <router-link to="/myaddress" v-if="!hasaddress">
                <div class="hasaddress">
                    <dl>
                        <dt>
                            <input name="checkbox" value="Item 1" type="checkbox" class="tui-checkbox" id="moren">
                            <div class="left">
                                <p id="chao">{{defaults.linkMan}}<span>{{defaults.mobile}}</span></p>
                                <p class="dizhi">{{defaults.address}}</p>
                            </div>
                        </dt>
                        <dd>
                            <router-link to="/newaddress">
                                <span>&gt;</span>
                            </router-link>
                        </dd>
                    </dl>
                </div>
            </router-link>
            
            <!--商品列表-->
            <div class="shoplist">
                <p class="shoplistp">商品列表</p>
                <!--列表-->
                <div class="shoplistmain">
                    <dl v-for="(item,index) in orderlist" :key="index">
                        <dt>
                            <img :src="item.pic" alt="">   
                        </dt>
                        <dd>
                            <ul>
                                <li>
                                    <p id="chao">{{item.name}}</p>
                                    <p>￥{{item.price}}</p>
                                </li>
                                <li class="xuanze">
                                    <p>选择版本:授权版（加密版本)</p>
                                    <p>x{{item.num}}</p>
                                </li> 
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <!--配送方式-->
            <div class="methods">
                <p>
                    <span>配送方式</span>
                    <span>包邮</span>
                </p>
                <p>
                    <span>备注</span>
                    <input type="text" name="" id="" placeholder="如需备注请留言">
                </p>
            </div>
            <!--商品金额-->
            <div class="shopmoney">
                <p>
                    <span>商品金额</span>
                    <span>￥{{zongjia}}</span>
                </p>
            </div>
        </div>
        <!--页脚-->
        <div class="confirmfooter">
            <span>合计：￥{{zongjia}}</span>
            <button v-on:click="suborder(orderlist)">提交订单</button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            defaults:{},
            hasaddress:false
        }
    },
    computed: {
        orderlist() {
            return this.$store.state.listdata
        },
        //总价
        zongjia(){
            let zj = 0;
            this.orderlist.forEach(item => {
                zj += item.price * item.num
            })
            return zj
        }
    },
    created() {
        //地址
        let params = new URLSearchParams();
        params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
        Axios.post('/api/small4/user/shipping-address/default',params).then(res => {
        this.defaults = res.data.data
            // console.log(res)
        })
        // //统计数据列表
        // params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
        // Axios.post('/api/small4/order/statistics',params).then(res => {
        //     console.log(res)
        // })
        //获取用户所有订单
        // params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
        // Axios.post('/api/small4/order/list',params).then(res => {
        //     console.log(res)
        // })
    },
    methods: {
        //提交订单
        suborder(item) {
            console.log(item)
            let params = new URLSearchParams()
            params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
            Axios.post('/api/small4/order/create',params).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style>
</style>
