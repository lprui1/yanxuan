<template>
    <div class="order">
        <div class="orderheader">
            <p v-on:click="myorder">
                <span class="iconfont icon-icon-"></span>
                <span>我的订单</span>
            </p>
            <a href="#">></a>
        </div>
        <ul>
            <li>
                <router-link to="/daifukuan">
                    <span class="iconfont icon-daifukuan"></span>
                    <p>待付款</p>
                </router-link>
            </li>
            <li>
                <router-link to="/daifahuo">
                    <span class="iconfont icon-daishouhuo"></span>
                    <p>待发货</p>
                </router-link>
            </li>
            <li>
                <router-link to="/daishouhuo">
                    <span class="iconfont icon-daishouhuo1"></span>
                    <p>待收货</p>
                </router-link>
            </li>
            <li>
                <router-link to="/daipingjia">
                    <span class="iconfont icon-daipingjia"></span>
                    <p>待评价</p>
                </router-link>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        //我的订单
        myorder() {
            this.$router.push({path:'/daifukuan'})
        }
    }
}
</script>

<style>

</style>
