<template>
    <div class="log">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="logheader">
            <h4>欢迎登录</h4>
        </div>
        <ul class="logul">
            <li>
                <label for="mobile">手机号</label>
                <input type="text" v-model="mobile">
            </li>
            <li>
                <label for="yzm">密码</label>
                <input type="password" v-model="mima">
            </li>
        </ul>
        <p><button v-on:click="dl">登录</button></p>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            mobile:'',
            mima:''
        }
    },
    methods: {
        dl() {
            let paramss = new URLSearchParams();
            paramss.append('mobile',this.mobile);
            paramss.append('pwd',this.mima)
            Axios.post('https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey',paramss).then(res =>{
                this.$cookie.set('token',res.data.data.token)
                this.$router.push({path:'/person'})
                // if(res.data.code === 0) {
                    
                // }else{
                //     alert(res.data.msg)
                // }
            })
           
        }
    }
}
</script>

<style>

</style>
