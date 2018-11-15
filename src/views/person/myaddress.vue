<template>
    <div class="myaddress">
        <a href="#" class="shang"><span>&lt;</span></a>
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
                        <input name="checkbox" value="Item 1" type="checkbox" class="tui-checkbox">
                        <!-- <a href="#" class="danxuan">
                            <span class="iconfont icon-xuanzhong" v-if="hasaddress"></span>
                        </a> -->
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
            <router-link to="/newaddress">
                <button><span>+</span>新增地址</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            hasaddress:true,    //默认没有地址
            addresslist:[],  
        }
    },
    created() {
        let params = new URLSearchParams();
        params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
        Axios.post('/api/small4/user/shipping-address/list',params).then(res => {
            let { data } = res.data
            console.log(data)
            this.addresslist = data
            // console.log(this.addresslist)
            if(this.addresslist === ''||this.addresslist === undefined) {
                this.hasaddress = true
            }else{
                this.hasaddress = false
            }
        })
    },
    methods: {
        //修改
        edit(item) {
            console.log(item)
            // let params = new URLSearchParams();
            // params.append('id',item.id);
            // params.append('code',item.code);
            // params.append('linkMan',item.linkMan);
            // params.append('mobile',item.mobile);
            // params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
            // Axios.post('api/small4/user/shipping-address/update',params).then(res => {
            //     console.log(res)
            //     if(res.data.code === 0) {
            //         localStorage.setItem('id',item.id)
            //     }
            // })
        },
        //单选
        // danxuan() {
        //     this.hasaddress = false
        // }
    }

}
</script>

<style>

</style>
