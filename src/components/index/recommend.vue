<template>
    <div class="recommend">
        <h4 class="cut">
            <router-link to="#">
                人气推荐
                <span class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></span>
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
        </ul>
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
        Axios.get('https://api.it120.cc/small4/shop/goods/list').then((res) => {
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
