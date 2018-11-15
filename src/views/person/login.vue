<template>
    <div class="login">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="loginsection">
            <form action="#">
                <p>
                    <label for="user">手机号</label>
                    <input type="text" v-model="mobile" id="user" placeholder=" 请输入手机号">
                </p>
                <p>
                    <label for="user">密码</label>
                    <input type="password" v-model="pwd" id="password" placeholder="密码">
                </p>
                <p>
                    <button v-on:click="reg()">注册</button>
                </p>
                <p>
                    <button v-on:click="log()">登录</button>
                </p>
            </form>   
        </div>      
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            mobile:'13500000000',
            pwd:'123',
            deviceId:'8000',
            deviceName:'000',
        }
    },
    methods: {
        //登录
        log() {
            let params = new URLSearchParams();
            params.append('mobile',this.mobile);
            params.append('pwd',this.pwd);
            params.append('deviceId',this.deviceId);
            params.append('deviceName',this.deviceName);
            Axios.post('/api/user/m/login',params).then((res) =>{
                // console.log(res.data)
                // d5a5ab1b-0678-439c-825b-2cee8e1273d6
                if(res.data.code === 0) {
                    console.log('登录成功')
                    location.href = '/person'
                }
            })
        }
    }
}
</script>

<style>

</style>
