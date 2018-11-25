<template>
    <div class="login">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="loginheader">
            <h4>欢迎注册</h4>
        </div>
        <div class="loginsection">
            <form action="#">
                <ul>
                    <li>
                        <label for="user">手机号</label>
                        <input type="text" id="user" v-model="mobile" @blur="Mobile">
                    </li>
                    <li>
                        <label for="tuxing">图形码</label>
                        <input type="text" id="tuxing" v-model="picCode" @blur="txm" placeholder="点击右边图形码切换">
                        <img v-on:click="suiji" :src="'https://api.it120.cc/small4/verification/pic/get?key='+key" alt="">
                    </li>
                    <li>
                        <label for="yzm">验证码</label>
                        <input type="text" id="yzm" v-model="code" @blur="yzduanxin">
                        <button v-on:click="Code()" :disabled="disabled">{{content}}</button>
                    </li>
                    <li>
                        <label for="yzm">密码</label>
                        <input type="password" v-model="pwd" @blur="sqpsd">
                    </li>
                </ul>
                <p class="tishi">{{msg}}</p>
                <p class="xieyi">点击“注册”按钮，即表示您同意该协议</p>
                <p>
                    <button v-on:click="reg()">注册</button>
                </p>
                <p v-on:click="qdl">已有账号去登录</p>
            </form>   
        </div>      
    </div> 
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            mobile:'',
            pwd:'',
            code:'',        //短信验证码
            picCode:'',
            // yzmcode:'',     //用户输入的验证码内容
            key:Math.random(),         //验证码标识
            content:'获取验证码',       //按钮里的内容
            totalTime: 60,      //记录具体倒计时时间
            canClick: true,
            msg:'手机号码不能为空',     //提示信息
            disabled:false
        }
    },
    methods: {
        //点击图片遂渐换验证码
        suiji() {
            this.key = Math.random()
        },
        //手机号失去焦点
        Mobile() {
           var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
           if(this.mobile == '') {
               this.msg = '内容不能为空'
           }else if(!reg.test(this.mobile)){
               this.msg = "手机格式不正确";
            }else{
                this.msg = '手机号正确'
            }
        },
        //图形码失去焦点
        txm() {
            var reg= /\w{0,5}/;
            if(this.picCode == ''){
                this.msg = '图形码不能为空'
            }else{
               this.msg = "图形码正确";
            }
        },
        //密码失去焦点
        sqpsd() {
            var reg= /\w{6,18}/;
            if(this.pwd == ''){
                this.msg = '密码不能为空'
            }
            else{
               this.msg = "密码正确";
            }
        },
        //点击短信验证码，发送验证码
        Code() {
            if (!this.canClick) return
                this.canClick = false
                this.content = this.totalTime + 's后重新发送'
                let clock = window.setInterval(() => {
                this.totalTime--
                this.content = this.totalTime + 's后重新发送'
                if (this.totalTime < 0) {
                window.clearInterval(clock)
                this.content = '重新发送验证码'
                this.totalTime = 10
                this.canClick = true  //这里重新开启
                }
            },1000)
            //短信验证码
            Axios.post('https://api.it120.cc/small4/verification/sms/get?mobile='+this.mobile+'&key='+this.key+'&picCode='+this.picCode)
            .then(res => {
                console.log(res)
            })
        },
        //短信验证  失去焦点
        yzduanxin() {
            let paramss = new URLSearchParams();
            paramss.append('mobile',this.mobile);
            paramss.append('code',this.code)
            Axios.post('https://api.it120.cc/small4/verification/sms/check',paramss).then(res =>{
                // console.log(res)
            })
            
        },
        //注册
        reg() {
            let params = new URLSearchParams();
            params.append('mobile',this.mobile);
            params.append('pwd',this.pwd);
            params.append('code',this.code);
            Axios.post('https://api.it120.cc/small4/user/m/register',params).then(res => {
                // console.log(res.data)
                if(res.data.code === 0) {
                    this.msg = '恭喜你注册成功'
                    this.$router.push({path:'/log'})
                }else{
                    this.msg = '注册失败'
                }  
            })
        },
        //点击已有账号去登录
        qdl() {
            // alert('aaaa')
            this.$router.push({path:"/log"})
        }  
    }
}
</script>

<style>

</style>
