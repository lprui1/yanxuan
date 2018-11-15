<template>
    <div class="addcartbox">
        <div class="addcartdetail">
            <!--上一页-->
            <router-link to="/" class="shang"><span>&lt;</span></router-link>
            <div class="section">
                <div class="header">
                    <div class="swiper-container">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide" v-for="(item,index) in list" :key="index">
                                <img :src="item.pic" alt="">
                            </li>
                        </ul>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <!--信息-->
                <ul class="mess">
                    <li>
                        <b>{{this.detaillist.name}}</b>
                    </li>
                    <li>
                        <p>{{this.detaillist.characteristic}}</p>
                    </li>
                    <li>
                        <p class="left">
                            <span>￥{{this.detaillist.minPrice}}</span>
                            <span><s>￥{{this.detaillist.originalPrice}}</s></span>
                        </p>
                        <p>
                            <span>库存 {{this.detaillist.stores}}</span>
                        </p>
                    </li>
                </ul>
                <!--规格-->
                <div class="size" v-on:click="size()">
                    <p>选择规格：选择版本</p>
                    <a href="#">&gt;</a>
                </div>
                <!--介绍-->
                <div class="recommend">
                    <ul class="qiehuan">
                        <li class="active"><a href="#">商品介绍</a></li>
                        <li><a href="#">商品评价</a></li>
                    </ul>
                    <!--介绍内容-->
                    <div class="content">
                        <div class="contentmain" v-html="this.introduce"></div>
                    </div>
                </div>
            </div>
            <!--砍价的页脚-->
            <div class="cutfooter" v-if="cut">
                <p><a href="#">立即发起砍价，最低可砍到99元</a></p>
            </div>
            <!--加入购物车的页脚-->
            <div class="addcartfooter" v-else-if="!addcart">
                <ul>
                    <li>
                        <span class="iconfont icon-lianxikefu"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-gouwuche"></span>
                        <span id="shul">{{zongNum}}</span>
                    </li>
                    <li>
                        <span class="iconfont icon-shoucang"></span>
                    </li>
                </ul>  
                <div class="right">
                    <span v-on:click="buy()">立即购买</span>
                    <button v-on:click="addcarts">加入购物车</button>
                </div>
            </div>
            <!--立即开团页脚-->
            <div class="groupfooter" v-else-if="!group">
                <!--左边-->
                <ul class="left">
                    <li>
                        <span class="iconfont icon-lianxikefu"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-shoucang"></span>
                    </li>
                    
                </ul>     
                <!--右边-->
                <ul class="right">
                    <li>
                        <p>￥299</p>
                        <span>原价购买</span>
                    </li>
                    <li>
                        <p>￥289</p>
                        <span>一键开团</span>
                    </li>
                </ul>
            </div>
        </div>
        <!--cover-->
        <div id="cover" v-if="cover">
            <div class="covermain" >
                <dl class="covertop">
                    <dt>
                        <span class="close" v-on:click="close()">X</span>
                        <img v-lazy="this.detaillist.pic" alt="">
                    </dt>
                    <dd>
                        <p>{{this.detaillist.name}}</p>
                        <p><b>￥{{this.detaillist.minPrice}}</b></p>
                    </dd>
                </dl>
                <!--选择服务-->
                <div class="versions">
                    <p>选择服务</p>
                    <ul>
                        <li :class="{'active':vala == item.id}" v-on:click="fuwu(item.id)" v-for="(item,index) in properties" :key="index">{{item.name}}</li>
                    </ul>
                </div>
                <!--选择版本-->
                <div class="versions">
                    <p>选择版本</p>
                    <ul>
                        <li :class="{'active':valb == item.id}" v-for="(item,index) in childsCurGoods" :key="index" v-on:click="versions(item.id)">{{item.name}}</li>
                    </ul>
                </div>
                <!--购买数量-->
                <div class="buynum">
                    <p>购买数量</p>
                    <p>
                        <button v-on:click="jian">-</button><button>{{Num}}</button><button v-on:click="add">+</button>
                    </p>
                </div>
                <p class="liji" v-if="!buys">
                    <!-- <router-link to="/confirm"> -->
                        <button v-on:click="liji">立即购买</button>
                    <!-- </router-link> -->
                </p>
                <p class="liji" v-else-if="buys">
                    <button v-on:click="Addcart({'name':detaillist.name,'id':detaillist.id,'price':detaillist.minPrice,'pic':detaillist.pic,'num':Num})">加入购物车</button>
                </p>
            </div>  
        </div>
    </div>    
</template>

<script>
import Axios from 'axios'
import Swiper from 'swiper'
export default {
    data() {
        return{
            active:0,
            cover:false,  //遮罩层
            properties:{},  //sku
            childsCurGoods:{},  //sku尺寸 
            detaillist:{},
            introduce:{},   //介绍
            list:[],
            cut:false, //砍价页脚
            addcart:false, //加入购物车的页脚
            group:true,      //拼团页脚
            buys:false,
            Num:null,
            vala:'',
            valb:''
        }
    },
    computed: {
        listdata(){
            return this.$store.state.listdata
        },
        zongNum() {
            let zs = 0
            this.listdata.map(item => {
                zs += item.num
            })
            return zs
        }
    },
    mounted(){
        //轮播
        var mySwiper = new Swiper('.swiper-container',{
            autoplay: {
                delay: 1000,
            },
            observer:true,                           //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,                  //修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    created() {
        let { id } = this.$route.params;
        //点击跳转详情页
        Axios.post('/api/small4/shop/goods/detail?id='+id).then((res) => {
            let { data } = res.data
            this.list = data.pics
            // console.log(this.list)
            this.detaillist = data.basicInfo;
            this.introduce = data.content
            this.properties = data.properties
            //sku
            this.vala = this.properties[0].id
            this.childsCurGoods = data.properties[0].childsCurGoods
            this.valb = this.childsCurGoods[0].id
            //砍价
            if(data.basicInfo.kanjia === true) {
                this.cut = true
            }
            //拼团
            if(data.basicInfo.pingtuan === true) {
                // alert('拼团')
                this.group === true
            }
        })
    },
    
    methods: {
        //点击规格
        size() {
            this.cover = true;
            this.buys = true
        },
        //立即购买
        buy() {
            //遮罩层显示，立即购买按钮显示
            this.cover = true;
            this.buys = false;
            // this.Num = 1;
        },
        //加入购物车
        addcarts(item) {
            //遮罩层显示，加入购物车按钮显示
            this.cover = true;
            this.buys = true; 
            this.Num = 1;     
        },
        //点击遮罩层里的购物车,加到购物车
        Addcart(item) {
            console.log(item)
            this.$store.commit('Addcart',item);
            this.$router.push({path:'/cart'})  
            // location.href = '/cart'
        },
        //点击立即购买
        liji() {
            this.Num = 1;
            this.$router.push({path:"/confirm"});
        },
        //点击关闭时，遮罩层隐藏
        close() {
            this.cover = false;
        },
        //点击选择服务
        fuwu(id) {
            // this.active = id
            this.vala = id
        },
        //点击选择版本
        versions(id) {
            this.Num = 1;
            this.valb = id;
            // this.active = id
            // //选择规格和尺寸
            let params = new URLSearchParams();
            params.append('goodsId',this.$route.params.id)
            params.append('propertyChildIds',this.vala+":"+this.valb)
            Axios.post('/api/small4/shop/goods/price',params).then(res => {
                // console.log(res)
                // let { data } = res.data
                // if(data.propertyChildIds == '' ||data.propertyChildIds == undefined) {
                //     alert('请选择尺码')
                // }
            })
        },
        //点击加号按钮
        add() {
            this.cover = true;
            this.Num++
        },
        //点击减号
        jian() { 
            this.Num--
            this.Num = this.Num <= 1 ? 1 : this.Num
        }
    }
}
</script>

<style>

</style>
