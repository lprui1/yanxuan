<template>
    <div class="recommend">
        <h4 class="cut">
            <router-link to="#">
                人气推荐
                <span>&gt;</span>
            </router-link>
        </h4>
        <ul>
            <!--路由传参第二步 传参方式name和params组合，params获取id-->
            <li v-for="(item,index) in recommendlist" :key="index">
                <!-- <router-link to="/group"> -->
                <!-- <router-link to="/cutdetail"> -->
                <router-link :to="'/addcartdetail/'+item.id">
                    <dl>
                        <dt>
                            <img v-lazy="item.pic" alt="">
                        </dt>
                        <dd>
                            <p>{{item.name}}</p>
                            <p>{{item.characteristic}}</p>
                            <p><b>￥{{item.originalPrice}}</b></p>
                        </dd>
                    </dl>
                </router-link>
            </li>
            <!-- <li>
                <router-link to="/group">
                    <dl>
                        <dt>
                            <img src="../../img/tuijian1.jpg" alt="">
                        </dt>
                        <dd>
                            <p>清欢素雅小程序端模板啥时候上市</p>
                            <p>全场模板使用优惠券立减88元</p>
                            <p><b>￥299</b></p>
                        </dd>
                    </dl>
                </router-link>
            </li> -->
        </ul>
        <!--上拉加载更多-->
        <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance='1'>
            <img src="../../../static/lazy.gif" alt="">
        </div> -->
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            recommendlist:[]
        }
    },
    created() {
        // console.log(this.$route)
        let { id } = this.$route.query
        //渲染列表数据
        Axios.get('api/small4/shop/goods/list').then((res) => {
            let { data } = res.data
            this.recommendlist = data.filter(res => {
                return res.recommendStatusStr == '推荐'
            })
        });
    },
    methods: {
        //上拉加载更多
        // loadMore: function() {
        //     this.busy = true;
        //     // let set=setTimeout(() => {
        //     //     this.Page++;
        //     //     this.getGOODSList(true);
        //     //     this.busy = false;
        //     // }, 1000);
        // },
    }
}
</script>

<style>

</style>
