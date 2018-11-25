<template>
    <div class="cartlistbox">
        <div class="shopheader">
            <span v-on:click="bianji()" v-if="listdata.length">{{Updata}}</span>
            <h4>购物车</h4>
        </div>
        <scroller ref="my_scroller">
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
                    <dl v-for="(item,index) in listdata" :key="index"  class="tou"
                        @touchstart='touchStart'
                        @touchmove='touchMove'
                        @touchend='touchEnd(index)'
                    >
                        <dt>
                            <input name="checkbox" :checked="item.check" v-on:click="danxuan(item)" value="Item 1" type="checkbox" class="tui-checkbox">
                            <img v-lazy="item.pic" alt="">
                        </dt>
                        <dd>
                            <div id="middle">
                                <p class="name">{{item.name}}</p>
                                <p class="jq"><b>￥{{item.price}}</b></p>
                                <p class="btn">
                                    <button v-on:click="jian(item)">-</button><button>{{item.num}}</button><button v-on:click="add(item)">+</button>
                                </p>
                            </div>
                            <div class="del">
                                <button v-on:click="delone(item.id)">删除</button>
                            </div>
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
        </scroller>
        <!--全选-->
        <div class="checkall" v-if="listdata.length">
            <div class="checkleft">
                <input name="checkbox" :checked='allChecked' value="Item 1" type="checkbox" class="tui-checkbox" v-on:click="checkAll">
                <span class="qx">全选</span>
            </div>
            <div class="checkright">
                <b>合计：<span>{{zongjia}}</span></b>
                <button v-if="updata" v-on:click="order(listdata)">下单</button>
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
            allChecked:true,      //判断是否选中
            updata:true,
            startX: 0,    //触摸位置
            endX:0,         //结束的位置
            moveX: 0,    //滑动时的位置
            disX: 0,    //移动距离
            data:{}
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
        this.listdata.map(item => {
            // console.log(item)
        })
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
        checkAll() {
            // console.log(this.listdata)
            this.allChecked = !this.allChecked;
            if(this.allChecked == true) {
                this.listdata.map(item => {
                    item.check = true
                })
            }else if(this.allChecked == false){
                this.listdata.map(item => {
                    item.check = false
                })
            }
        },
        //单选
        danxuan(item) {
            item.check = !item.check
            this.allChecked = this.listdata.every(items=>{
              return items.check == true
            })
        },
        //点击编辑
        bianji() {
            // item.check = !item.check
            this.allChecked = !this.allChecked
            this.updata = !this.updata
        },
        //下单
        order(item) {
            this.$router.push({path:'/confirm'})
        },
        //选中删除
        Del(id) {
            console.log(id)
        },
        touchStart(ev) {
            //手指按下的时候记录下的位置
            this.startX = ev.touches[0].clientX;
            this.touchMove(ev)
        },
        touchMove(ev) {
            this.moveX = ev.touches[0].clientX
        },
        touchEnd(index) {
            this.disX = this.startX - this.moveX;
            if(this.disX >= 30){
                let aaa = document.getElementsByClassName('tou')[index]
                aaa.style.marginLeft = -70+'px'
            }else if(this.disX <= -30) {
                let aaa = document.getElementsByClassName('tou')[index]
                aaa.style.marginLeft = 0+'px'
            }
        },
        //单个删除
        delone(id) {
            this.data = this.listdata.filter(item => {
                return item.id != id
            })
            this.$router.go(0);
            
        }

    }
}
</script>

<style>
</style>
