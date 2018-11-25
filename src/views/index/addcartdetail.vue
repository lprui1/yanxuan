<template>
    <div class="addcartbox">
        <div class="addcartdetail">
            <!--上一页-->
            <div class="shang" v-on:click="back"><span>&lt;</span></div> 
            <div class="section">
                <scroller ref="my_scroller">
                    <div class="header">
                        <!--轮播-->
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
                    <!--拼团流程-->
                    <div class="procss" v-if="pintuan">
                        <h4>拼团流程</h4>
                        <ul>
                            <li>
                                <span class="iconfont icon-qian"></span>
                                <p>支付开团或参与拼团</p>
                            </li>
                            <li>
                                <span class="iconfont icon-yaoqinghaoyou"></span>
                                <p>邀请好友一起拼团</p>
                            </li>
                            <li>
                                <span class="iconfont icon-daishouhuo1"></span>
                                <p>达到人数分别发货</p>
                            </li>
                            <li>
                                <span class="iconfont icon-tuikuan"></span>
                                <p>人数不够自动退款</p>
                            </li>
                        </ul>
                    </div>
                    <!--规格-->
                    <div class="size" v-on:click="size()">
                        <p>选择规格：选择版本</p>
                        <a href="#">&gt;</a>
                    </div>
                    <!--介绍-->
                    <!-- <shopmain></shopmain> -->
                    <div class="recommend">
                        <ul class="qiehuan">
                            <li class="active" v-on:click="jieshao">商品介绍</li>
                            <li v-on:click="pingjia">商品评价</li>
                        </ul>
                        <div class="content" v-if="Products">
                            <div class="contentmain" v-html="this.introduce"></div>
                        </div>
                        <div class="pingjia" v-if="!Products">
                            <dl v-for="(item,index) in pingjiasj" :key="index">
                                <dt>
                                    <img src="../../img/add1.jpg" alt="">
                                </dt>
                                <dd>
                                    <p>何小杰<span class="ping">{{item.goods.goodReputationStr}}</span></p>
                                    <p>系统默认好评</p>
                                    <p><span>{{item.goods.dateReputation}}</span></p>
                                    <p><span>{{item.goods.property}}</span></p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </scroller>
            </div>
            <!--砍价的页脚-->
            <div class="cutfooter" v-if="kanjia">
                <p v-on:click="ljkanjia">立即发起砍价，最低可砍到99元</p>
            </div>
            <!--加入购物车的页脚-->
            <div class="addcartfooter" v-if="addcart">
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
            <div class="groupfooter" v-if="pintuan">
                <!--左边-->
                <ul class="left">
                    <li>
                        <span class="iconfont icon-lianxikefu"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-star"></span>
                    </li>
                    
                </ul>     
                <!--右边-->
                <ul class="right">
                    <li>
                        <p>￥299</p>
                        <span v-on:click="yuanjia">原价购买</span>
                    </li>
                    <li>
                        <p>￥289</p>
                        <span v-on:click="kaituan">一键开团</span>
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
                    <p>分类</p>
                    <ul>
                        <li :class="{'active':vala == item.id}" v-on:click="fuwu(item)" v-for="(item,index) in properties" :key="index">{{item.name}}</li>
                    </ul>
                </div>
                <!--选择版本-->
                <div class="versions">
                    <p>尺码</p>
                    <ul>
                        <li :class="{'active':valb == item.id}" v-for="(item,index) in childsCurGoods" :key="index" v-on:click="versions(item)">{{item.name}}</li>
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
                    <button v-on:click="liji({'name':detaillist.name,'id':detaillist.id,'price':detaillist.minPrice,'pic':detaillist.pic,'num':Num,'check':true,'allprice':0})">立即购买</button>
                </p>
                <p class="liji" v-if="yjkt">
                    <button v-on:click="opengroup">一键开团</button>
                </p>
                <p class="liji" v-if="buys">
                    <button v-on:click="Addcart({'name':detaillist.name,'id':detaillist.id,'price':detaillist.minPrice,'pic':detaillist.pic,'num':Num,'check':true,'allprice':0})">{{msg}}</button>
                </p>
            </div>  
        </div>
    </div>    
</template>
<script>
import Axios from 'axios'
import Swiper from 'swiper'
import shopmain from './shopmain'
export default {
    components: {
        shopmain
    },
    data() {
        return{
            msg:'加入购物车',
            active:0,
            cover:false,  //遮罩层
            properties:{},  //sku
            childsCurGoods:{},  //sku尺寸 
            detaillist:{},
            introduce:{},   //介绍
            Products:true,  //默认显示商品介绍
            list:[],
            pingjiasj:[],       //评价
            fqkj:[],        //发起砍价
            kanjia:true, //砍价页脚
            addcart:false, //加入购物车的页脚
            pintuan:false,      //拼团页脚
            yjkt:true,         //一键开团
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
        // console.log(id)
        //点击跳转详情页
        Axios.post('https://api.it120.cc/small4/shop/goods/detail?id='+id).then((res) => {
            let { data } = res.data
            this.list = data.pics
            this.detaillist = data.basicInfo;
            // console.log(this.detaillist.id)
            //砍价
            if(this.detaillist.kanjia == true){
                console.log('砍价')
                this.kanjia = true
            }else if(this.detaillist.pingtuan == true){
                console.log('拼团')
                this.pintuan = true
                this.kanjia = false
            }else{
                console.log('加入购物车')
                this.addcart = true
                this.kanjia = false
            }
            this.introduce = data.content
            this.properties = data.properties
            //sku
            this.vala = this.properties[0].id
            this.childsCurGoods = data.properties[0].childsCurGoods
            this.valb = this.childsCurGoods[0].id
        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
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
            this.yjkt = false;
            this.Num = 1;
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
            // console.log(item)
            this.$store.commit('Addcart',item);
            this.$router.push({name:'Cart'});
             // //选择规格和尺寸
            let params = new URLSearchParams();
            params.append('goodsId',this.$route.params.id)
            params.append('propertyChildIds',this.vala+":"+this.valb)
            Axios.post('https://api.it120.cc/small4/shop/goods/price',params).then(res => {
                // console.log(res.data.data)
                if(res.data.data == '') {
                    alert('请选择规格和尺寸')
                }else{
                    this.$router.push({name:'Cart'});
                }
            })
        },
        //立即发起砍价
        ljkanjia() {
            let { id } = this.$route.params
            Axios.post('https://api.it120.cc/small4/shop/goods/kanjia/list').then(res => {
                let { result } = res.data.data
                let faqi = result.filter(item => {
                    return item.goodsId == id
                })
                this.fqkj = faqi
                // console.log(faqi)
                this.$router.push({path:'/cutdetail'})
                this.$store.commit('faqikj',this.fqkj[0].id)
            })
        },
        //点击商品介绍
        jieshao() {
            this.Products = true
        },
        pingjia() {
            this.Products = false;
            let { id } = this.$route.params;
            // console.log(this.detaillist.id)
            let params = new URLSearchParams();
            params.append('goodsId',id)
            Axios.post('https://api.it120.cc/small4/shop/goods/reputation',params).then(res => {
                this.pingjiasj = res.data.data
                // console.log(this.pingjiasj)
            })
        },
        //点击立即购买
        liji(item) {
            console.log(item)
            this.Num = 1;
            this.$store.commit('Addcart',item);
            this.$router.push({path:"/confirm"});
        },
        //点击关闭时，遮罩层隐藏
        close() {
            this.cover = false;
        },
        //点击选择服务
        fuwu(item) {
            this.vala = item.id;
            this.$store.commit('Fuwu',{'name':item.name,'id':item.id});
        },
        //点击选择版本
        versions(item) {
            // console.log(item)
            this.Num = 1;
            this.valb = item.id;
            this.$store.commit('Versions',{'name':item.name,'id':item.id});
        },
        //原价购买
        yuanjia() {
            this.cover = true;
            this.buys = false;
            this.yjkt = false;
            this.Num = 1;
        },
        //一键开团
        kaituan() {
            this.cover = true;
            this.buys = false;
            this.yjkt = true;
            this.Num = 1;
        },
        //一键开团按钮
        opengroup() {
            let params = new URLSearchParams();
            params.append('token',this.$cookie.get('token'));
            params.append('goodsId',this.detaillist.id)
            Axios.post('https://api.it120.cc/small4/shop/goods/pingtuan/open',params).then(res => {
                // console.log(res)
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
