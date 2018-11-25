<template>
    <div class="cutdetail">
        <!--上一页-->
        <a class="shang" v-on:click="back"><span>&lt;</span></a> 
        <div class="cutsection">
            <!--main-->
            <div class="cutmain">
                <p>
                    <img src='../../img/add1.jpg' alt="">
                </p>
                <p>喵了个咪</p>
                <p>我发现一件好货，来帮我砍到最低价吧~</p>
                <dl>
                    <dt>
                        <img :src="this.kanjiaInfo.pic" alt="">
                    </dt>
                    <dd>
                        <p>{{kanjiaInfo.name}}</p>
                        <p><span>底价 ￥{{this.cutLi.minPrice}}</span><s>原价 ￥{{this.cutLi.curPrice}}</s></p>
                    </dd>
                </dl>
                <p>当前价259元，已砍0.00元</p>
                <p class="kan">
                    <button v-on:click="own">自己先砍一刀</button>
                    <button>邀请好友砍价</button>
                </p>
                <!--倒计时-->
                <p class="time">
                    <span>72</span>  :
                    <span>19</span>  :
                    <span>16</span>  :
                    <span>53</span>
                </p>
            </div>
            <!--好友砍价-->
            <div class="friend">
                <p v-if="cuts">没有数据</p>
                <p class="help">{{this.cutLi.helpNumber}}名好友帮砍</p>
                <dl v-if="!cuts">
                    <dt>
                        <img src="../../img/add1.jpg" alt="">
                        <div class="cutmess">
                            <p>仙女味的黑妹</p>
                            <p><span>2018-11-20 15:32:50</span></p>
                        </div>
                    </dt>
                    <dd>
                        <img src="../../img/dao.jpg" alt="">
                        <span>砍掉{{CUTP.cutPrice}}元</span>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import Swiper from 'swiper'
export default {
    data() {
        return {
            cutLi:{},
            kanjiaIn:[],
            kanjiaInfo:{},
            CUTP:{},
            cuts:false,
            msg:'自己先砍一刀'
        }
    },
    computed: {
        cutprice() {
            this.$store.state.KJlist
        }
    },
    created() {
        console.log(this.$store.state)
        // console.log(this.$store.state.faqilist)
        //我的砍价
        let params = new URLSearchParams();
        params.append('kjid',this.$store.state.faqilist)
        params.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/shop/goods/kanjia/my',params).then(res => {
            //砍价参数
            var kjl = this.$store.state.KJlist
            this.cutLi = res.data.data
            console.log(res)
            this.kanjiaIn = kjl.filter(item => {
                return item.id === this.cutLi.goodsId
            })
            this.kanjiaInfo = this.kanjiaIn[0];
        })   
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
        //点击自己砍一刀
        own() {
            //参与砍价列表
            let params = new URLSearchParams();
            params.append('kjid',this.cutLi.kjId)
            params.append('token',this.$cookie.get('token'));
            Axios.post('https://api.it120.cc/small4/shop/goods/kanjia/join',params).then(res => {
                // console.log(res)
                // console.log(res)
            })
            // 砍价列表详情
            let paramss = new URLSearchParams();
            paramss.append('kjid',this.cutLi.kjId)
            paramss.append('joiner',this.cutLi.uid)
            Axios.post('https://api.it120.cc/small4/shop/goods/kanjia/info',paramss).then(res => {
                this.CUTP = res.data.data.helps
                this.cutLi = res.data.data.kanjiaInfo
                console.log(this.cutLi)
                // console.log(this.cutLi)
            })
        }
    }
}
</script>

<style>

</style>
