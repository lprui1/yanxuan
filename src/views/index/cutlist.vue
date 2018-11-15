<template>
    <div class="cutlist">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="cutlistheader">
            <h4>砍价列表</h4>
        </div>
        <dl v-for="(item,index) in allkanjialist" :key="index">
            <dt>
                <img v-lazy="item.pic" alt="">
            </dt>
            <dd>
                <h4>连盖收纳盒两件组合装</h4> 
                <p>连盖收纳盒&nbsp;大小组合装</p>
                <ul>
                    <li>
                        <span class="active">￥99</span>
                        <p>底价</p>
                    </li>
                    <li>
                        <span>￥359</span>
                        <p>原价</p>
                    </li>
                    <li>
                        <span>18件</span>
                        <p>销量</p>
                    </li>
                </ul>
            </dd> 
        </dl>
      
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
        Axios.get('/api/small4/shop/goods/list').then((res) =>{
            let { data } = res.data
            this.allkanjialist = data.filter(res => {
                return res.kanjia
            })
        })
    }
}
</script>

<style>

</style>
