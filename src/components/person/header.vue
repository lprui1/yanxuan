<template>
    <div class="personheader">
        <dl>
            <dt>
                <img src="../../img/list1.jpg" alt="" v-on:click="log()">
            </dt>
            <!-- <dd v-if="!logs">
                <p v-on:click="reglog">注册/登录</p>
            </dd> -->
            <dd v-if="!logs">
                <p><b>123456</b></p>
                <p><span>积分： 20</span></p>
            </dd>
        </dl>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            logs:false
        }
    },
    methods: {  
        //登录
        log() {
            this.$router.push({path:'/reg'})
        },
        //登录注册
        reglog() {
            this.$router.push({path:'/reg'})
        }
    }
}
</script>

<style>

</style>
