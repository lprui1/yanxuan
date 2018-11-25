<template>
    <div class="orderstatus">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="daifukuanheader">
            <h4>订单列表</h4>
            <ul>
                <router-link to="/daifukuan" exact>
                    <li>待付款</li>
                </router-link>
                <router-link to="/daifahuo">
                    <li>待发货</li>
                </router-link>
                <router-link to="/daishouhuo">
                    <li>待收货</li>
                </router-link>
                <router-link to="/daipingjia">
                    <li>待评价</li>
                </router-link>
                <router-link to="/yiwancheng">
                    <li>已完成</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
