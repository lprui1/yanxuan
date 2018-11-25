<template>
    <div class="confirm">
        <a href="#" class="shang" v-on:click="back"><span>&lt;</span></a>
        <!--头部-->
        <div class="confirmheader">
            <h4>确认订单</h4>
        </div>
        <!--section中间内容-->
        <div class="confirmsection">
            <!--点击新增收货地址-->
            <!-- <router-link to="/myaddress"> -->
            <div class="confirmtop" v-if="hasaddress">
                <div class="left">
                    <button>+</button>
                    <span>新增收货地址</span>
                </div>
                <a>&gt;</a>
            </div>
            <!-- </router-link> -->
                <!--有地址-->
            <!-- <router-link to="/myaddress" v-if="!hasaddress"> -->
            <div class="hasaddress">
                <dl>
                    <dt>
                        <span class="iconfont icon-weizhi"></span>
                        <!-- <input name="checkbox" value="Item 1" type="checkbox" v-if="!check" class="tui-checkbox" id="moren"> -->
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
            <!-- </router-link> -->
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
                                    <p>{{fuwu.name}}:{{versions.name}}</p>
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
            hasaddress:false,
            check:false
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
        },
        fuwu() {
            return this.$store.state.Name
        },
        versions() {
            return this.$store.state.name
        }
    },
    created() {
        //地址
        let paramss = new URLSearchParams();
        
        paramss.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/user/shipping-address/default',paramss).then(res => {
            this.defaults = res.data.data
            // console.log(res)
        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
        //提交订单
        suborder(item) {
            this.$store.commit('piccc',item)
            var vala = this.fuwu.id;
            var valb = this.versions.id;
            item.map(item => {
                let params = new URLSearchParams();
                params.append('token',this.$cookie.get('token'));
                params.append('goodsJsonStr',JSON.stringify([{"goodsId":item.id,"number":item.num,'propertyChildIds':vala+':'+valb,"logisticsType":0}]))
                Axios.post('https://api.it120.cc/small4/order/create',params).then(res => {
                    // console.log(res)
                    if(res.data.code === 0) {
                        this.$store.commit('tijiao',res.data)
                        this.$router.push({path:'/payfor'})
                    }
                })
            })  
        }
    }
}
</script>

<style>
</style>
