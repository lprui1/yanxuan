<template>
    <div class="myaddress">
        <a href="#" class="shang" v-on:click="back"><span>&lt;</span></a>
        <!--头部-->
        <div class="myaddressheader">
            <h4>我的地址</h4>
        </div>
        <div class="myaddressmain">
            <!--没有地址-->
            <div class="noaddress" v-if="hasaddress">
                <img src="../../img/no.jpg" alt="">
            </div>
            <!--有地址-->
            <div class="hasaddress" v-if="!hasaddress">
                <dl v-for="(item,index) in addresslist" :key="index">
                    <dt>
                        <input name="checkbox" type="checkbox" class="tui-checkbox">
                        <div class="left">
                            <p id="chao">{{item.linkMan}}<span>{{item.mobile}}</span></p>
                            <p class="dizhi">{{item.address}}</p>
                        </div>
                    </dt>
                    <dd>
                        <router-link to="/newaddress">
                            <span class="iconfont icon-bianji"  v-on:click="edit(item)"></span>
                        </router-link>
                    </dd>
                </dl>
            </div>
        </div>
        <!--新增地址-->
        <div class="addmyaddress">
            <button v-on:click="addaddress"><span>+</span>新增地址</button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            hasaddress:true,    //默认没有地址
            addresslist:[]
        }
    },
    created() {
        let params = new URLSearchParams();
        params.append('token',this.$cookie.get('token'))
        Axios.post('https://api.it120.cc/small4/user/shipping-address/list',params).then(res => {
            let { data } = res.data
            this.addresslist = data
            // console.log(item.isDefault)
            // this.addresslist.map(item => {
            //     console.log(item.isDefault)
            //     if(item.isDefault == 'true'){
            //        console.log('aaaaa')
            //     }
            // })
            if(this.addresslist === ''||this.addresslist === undefined) {
                this.hasaddress = true
            }else{
                this.hasaddress = false
            }
        })
    },
    methods: {
        //上一页
        back() {
            history.back(-1)
        },
        //修改
        edit(item) {
            console.log(item)
            let params = new URLSearchParams();
            params.append('id',item.id);
            params.append('code',item.code);
            params.append('linkMan',item.linkMan);
            params.append('mobile',item.mobile);
            params.append('token',this.$cookie.get('token'))
            Axios.post('https://api.it120.cc/small4/user/shipping-address/update',params).then(res => {
                if(res.data.code === 0) {
                    localStorage.setItem('id',item.id)
                }
            })
        },
        //新增地址
        addaddress(){
            this.$router.push({path:'/newaddress'})
        }
    }

}
</script>

<style>

</style>
