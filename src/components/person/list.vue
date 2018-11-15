<template>
    <div class="personlist">
        <ul>
            <li>
                <router-link to="/balance">
                    <span class="iconfont icon-daifukuan"></span>
                    <p>我的余额</p>
                    <p style="padding:0">0元</p>
                </router-link>
            </li>
            <li>
                <router-link to="/cutlist">
                    <span class="iconfont icon-kanjia" style="color:red"></span>
                    <p>我的砍价</p>
                </router-link>
            </li>
            <li>
                <router-link to="/gift">
                    <span class="iconfont icon-liquan"></span>
                    <p>我的礼券</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myaddress">
                    <span class="iconfont icon-shoucang"></span>
                    <p>我的收藏</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myaddress">
                    <span class="iconfont icon-dizhi"></span>
                    <p>我的地址</p>
                </router-link>   
            </li>
            <li>
                <router-link to="/myaddress">
                    <span class="iconfont icon-lianxikefu"></span>
                    <p>联系客服</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
