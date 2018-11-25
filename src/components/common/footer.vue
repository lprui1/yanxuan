<template>
    <div class="indexfooter">
        <ul>
          <li>
            <router-link to="/" exact>
                <p><span class="iconfont icon-shouye"></span></p>
                <b>首页</b>
            </router-link>
          </li>
          <li>
            <router-link to="/sort">
                <p><span class="iconfont icon-guizi"></span></p>
                <b>分类</b>
            </router-link>
          </li>
          <li>
            <router-link to="/cart">
                <p><span class="iconfont icon-gouwuche"></span></p>
                <b>购物车</b>
                <span id="shul">{{zongNum}}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/person">
                <p><span class="iconfont icon-geren"></span></p>
                <b>个人</b>
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        listdata() {
            return this.$store.state.listdata
        },
        zongNum() {
            let zs = 0
            this.listdata.map(item => {
                zs += item.num
            })
            return zs
        },
    }
}
</script>

<style scoped lang="scss">


</style>
