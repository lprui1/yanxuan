<template>
    <div class="cutlist">
        <a class="shang" v-on:click="back"><span>&lt;</span></a>
        <div class="cutlistheader">
            <h4>砍价列表</h4>
        </div>
        <div class="cutmain">
            <!-- <scroller ref="my_scroller"> -->
                <dl v-for="(item,index) in allkanjialist" :key="index">
                    <dt>
                        <img :src="item.pic" alt="">
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
                                <span>18件</span>
                                <p>销量</p>
                            </li>
                        </ul>
                    </dd> 
                </dl>  
            <!-- </scroller> -->
        </div>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            allkanjialist:[]
        }
    },
    created() {
        Axios.get('https://api.it120.cc/small4/shop/goods/list').then((res) =>{
            let { data } = res.data
            this.allkanjialist = data.filter(res => {
                return res.kanjia
            })
            console.log(this.allkanjialist)
        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
    }
}
</script>

<style>

</style>
