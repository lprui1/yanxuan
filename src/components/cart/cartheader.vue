<template>
    <div class="cartlistbox">
        <div class="shopheader">
            <span v-on:click="bianji()" v-if="listdata.length">{{Updata}}</span>
            <h4>购物车</h4>
        </div>
        <div class="section">
            <!--没有商品的状态-->
            <div class="notshop" v-if="!listdata.length">
                <div class="nolist">
                    <div>
                        <img src="../../img/gwc.jpg" alt="">
                        <p>去添加点什么吧</p>
                    </div>    
                </div>
            </div>
            <!--有商品的状态-->
            <div class="shoplist" v-if="listdata.length">
                <dl v-for="(item,index) in  listdata" :key="index">
                    <dt>
                        <input name="checkbox" v-if="danxuan" value="Item 1" type="checkbox" class="tui-checkbox">
                        <!-- <span class="iconfont icon-xuanzhong" syle="background-color:red"></span> -->
                        <img v-lazy="item.pic" alt="">
                    </dt>
                    <dd>
                        <p>{{item.name}}</p>
                        <p><b>￥{{item.price}}</b><s></s></p>
                        <p>
                            <button v-on:click="jian(item)">-</button><button>{{item.num}}</button><button v-on:click="add(item)">+</button>
                        </p>
                    </dd>
                </dl>                
            </div>
            <!--猜你喜欢-->
            <div class="like">
                <h4>人气推荐</h4>
                <ul>
                    <li>
                        <router-link to="/group">
                            <dl>
                                <dt>
                                    <img src="../../img/list2.jpg" alt="">
                                </dt>
                                <dd>
                                    <p>name</p>
                                    <p>全场模板使用优惠券立减88元</p>
                                    <p><b>￥0</b><span>已售359</span></p>
                                </dd>
                            </dl>
                        </router-link>  
                    </li>
                    <li>
                        <router-link to="/group">
                            <dl>
                                <dt>
                                    <img src="../../img/list2.jpg" alt="">
                                </dt>
                                <dd>
                                    <p>name</p>
                                    <p>全场模板使用优惠券立减88元</p>
                                    <p><b>￥0</b><span>已售359</span></p>
                                </dd>
                            </dl>
                        </router-link>  
                    </li>
                    <li>
                        <router-link to="/group">
                            <dl>
                                <dt>
                                    <img src="../../img/list2.jpg" alt="">
                                </dt>
                                <dd>
                                    <p>name</p>
                                    <p>全场模板使用优惠券立减88元</p>
                                    <p><b>￥0</b><span>已售359</span></p>
                                </dd>
                            </dl>
                        </router-link>  
                    </li>
                    <li>
                        <router-link to="/group">
                            <dl>
                                <dt>
                                    <img src="../../img/list2.jpg" alt="">
                                </dt>
                                <dd>
                                    <p>name</p>
                                    <p>全场模板使用优惠券立减88元</p>
                                    <p><b>￥0</b><span>已售359</span></p>
                                </dd>
                            </dl>
                        </router-link>  
                    </li>
                </ul>
            </div>
        </div>
        <!--全选-->
        <div class="checkall" v-if="listdata.length">
            <div class="checkleft">
                <input name="checkbox" v-model="allChecked" value="Item 1" type="checkbox" class="tui-checkbox" v-on:click="checkAll">
                <span class="qx">全选</span>
            </div>
            <div class="checkright">
                <b>合计：<span>{{zongjia}}</span></b>
                <!-- <router-link to="/confirm"> -->
                    <button v-if="updata" v-on:click="order(listdata)">下单</button>
                <!-- </router-link> -->
                <button style="background:#ccc" v-if="!updata" v-on:click="Del()">删除</button>
            </div>     
        </div>
    </div>   
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            hasshop:false, //商品
            Num:1,
            danxuan:true,
            allChecked:true,      //判断是否选中
            updata:true

        }    
    },
    computed: {
        //切换编辑和完成
        Updata() {
            return this.updata ? '编辑' : '完成'
        },
        listdata() {
            return this.$store.state.listdata
        },
        zongjia(){
            let zj = 0;
            this.listdata.map(item => {
                zj += item.price * item.num
            })
            return zj
        }
    },
    created() {
        // console.log(this.$store.state.listdata[0].id)
        // this.$store.state.listdata.map(item => {
        //     if(item.id) {
        //         item.num++
        //     }else{
        //         console.log('aaa')
        //     }
        // })
    },
    methods: {
        //点击加号按钮
        add(item) {
            this.cover = true;
            this.$store.commit('increments',item)
        },
        //点击减号
        jian(id) {
            this.$store.commit('decrements',id)
        },
        //全选
        checkAll(item) {
            this.allChecked = !this.allChecked
        },
        //点击编辑
        bianji() {
            this.updata = !this.updata
        },
        //下单
        order(item) {
            // console.log(item)
            // console.log(this.listdata)
            this.$router.push({path:'/confirm'})
        },
        //删除
        Del(id) {
            // console.log(id)
            alert('删除')
        }
    }
}
</script>

<style>
</style>
