<template>
    <div class="evaluate">
        <!--上一页-->
        <a href="#" class="shang" v-on:click="back"><span>&lt;</span></a>
        <!--头部-->
        <div class="evaluateheader">
            <h4>发表评价 </h4>
        </div>
        <!--main-->
        <div class="evaluatemain">
            <dl v-for="(item , index) in data" :key="index">
                <dt>
                    <img :src="item.pic" alt="">
                    <span>{{item.goodsName}}</span>
                </dt>
                <dd>
                    <textarea name="" id="" cols="45" rows="5" placeholder="请发表你得评论" v-model="message">
                    </textarea>
                    <p class="zifu">你还可以输入200个字符</p>
                    <div class="pjmain">
                        <p>
                            <span v-on:click="hao(2)">好评</span>
                            <span v-on:click="zhong(1)">中评</span>
                            <span v-on:click="cha(0)">差评</span>
                        </p>
                        <button @click="fb(item)">发表评价</button>
                    </div>
                    
                </dd>
            </dl>
            
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
        data(){
            return{
                data:[],
                ping:0,
                message:''
            }
        },
    created() {
        //订单详情
        let id = localStorage.getItem('ids')
        console.log(id)
        let paramss = new URLSearchParams()
        paramss.append('token',this.$cookie.get('token'));
        paramss.append('id',id)
        Axios.post('https://api.it120.cc/small4/order/detail',paramss).then(res => {
            // console.log(res.data.code)
            if(res.data.code == 0) {
                let { goods } = res.data.data
                this.data = goods
            }
        })
    },
    methods: {
        //后退一步
        back() {
            history.back(-1)
        },
        //发表评论
        fb(item){
            console.log(this.message)
            let token = this.$cookie.get('token')
            let ss = {
                    token:token,
                    orderId:item.orderId,
                    reputations:[{
                        id:item.id,
                        reputation:this.ping,
                        remark:this.message
                    }]
                }
            let ff = JSON.stringify(ss)
            let paramss = new URLSearchParams()
            paramss.append('postJsonString',ff)
            Axios.post('https://api.it120.cc/small4/order/reputation?'+paramss).then(res => {
                console.log(res)
            
            })
        },
        //好评
        hao() {
           console.log('好评')
        },
        //中评
        zhong() {
            console.log('中评')
        },
        //差评
        cha() {
            console.log('差评')
        }
    }
}
</script>

<style>

</style>
