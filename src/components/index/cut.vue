<template>
    <div class="list">
        <h4 class="cut">
            <router-link to="/cutlist">
                全民砍价
                <span class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></span>
            </router-link>    
        </h4>
        <div class="cutlists">
            <dl v-for="(item,index) in kanjialist" :key="index">
                <router-link :to="'/addcartdetail/'+item.id">
                    <dt>  
                        <img v-lazy="item.pic" alt="">
                    </dt>
                    <dd>
                        <h4>{{item.name}}</h4> 
                        <p class="chao">{{item.characteristic}}</p>
                        <ul>
                            <li>
                                <span class="active">￥{{item.minPrice}}</span>
                                <p>底价</p>
                            </li>
                            <li>
                                <span>￥{{item.originalPrice}}</span>
                                <p>原价</p>
                            </li>
                            <li>
                                <span>{{item.stores}}</span>
                                <p>销量</p>
                            </li>
                        </ul>
                    </dd> 
                </router-link> 
            </dl>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            kanjialist:[]
        }
    },
    created() {
        Axios.get('https://api.it120.cc/small4/shop/goods/list').then((res) =>{
            let { data } = res.data
            this.kanjialist = data.filter(res => {
                return res.kanjia
            })
            this.$store.commit('kan',this.kanjialist)
        })
    }
}
</script>

<style>

</style>
