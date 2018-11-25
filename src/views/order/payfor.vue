<template>
    <div class="payfor">
         <a href="#" class="shang" v-on:click="back"><span>&lt;</span></a>
        <!--头部-->
        <div class="payforheader">
            <h4>确认付款</h4>
        </div>
        <!--付款main-->
        <div class="payformain">
            <dl>
                <dt>
                    <span class="iconfont icon-qian1"></span>
                </dt>
                <dd>
                    <p>商品金额: <span>￥{{fukuan.amount}}</span></p>
                    <p>订单号：{{fukuan.orderNumber}}</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <span class="iconfont icon-dizhi"></span>
                </dt>
                <dd>
                    <p>姓名：手机号</p>
                    <p>地址</p>
                </dd>
            </dl>
        </div>
        <!--支付页脚-->
        <div class="payforfooter">
            <p v-on:click="payfor(fukuan)">微信支付￥0.1</p>
            <!-- <p v-on:click="payfor(fukuan)">微信支付￥{{fukuan.amount}}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fukuan:{}
        }
    },
    created() {
        this.fukuan = this.$store.state.tjdd.data
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
        //点击微信支付
        payfor(fukuan) {
            console.log(fukuan)
            let obj = {
                price:0.1,
                id:fukuan.id
            }
             window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/&response_type=code&scope=snsapi_userinfo&state=${JSON.stringify(obj)}#wechat_redirect`
        }
    }
}
</script>

<style>

</style>
