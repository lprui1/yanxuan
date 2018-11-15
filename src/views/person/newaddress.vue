<template>
    <div class="newaddress">
        <router-link to="/myaddress" href="#" class="shang"><span>&lt;</span></router-link>
        <!--头部-->
        <div class="newaddressheader">
            <h4>新增地址</h4>
        </div>
        <!--新增地址内容-->
        <div class="newsection">
            <ul class="newlist">
                <li>
                    <label for="linkMan">联系人</label>
                    <input type="text" name="" id="linkMan" placeholder="姓名" v-model="linkMan">
                </li>
                <li>
                     <label for="mobile">手机号码</label>
                    <input type="text" name="" id="mobile" placeholder="11位手机号码" v-model="mobile">
                </li>
                <li>
                    <label for="area">选择地区</label>
                    <!-- <input type="text" name="" id="area" placeholder="选择地区"> -->
                    <select name="" id="area" >
                        <option value="">选择省</option>
                        <option value="">选择省</option>
                    </select>
                    <select name="" id="" v-on:click="shi()">
                        <option value="">选择市</option>
                        <option value="">选择市</option>
                    </select>
                    <select name="" id="">
                        <option value="">选择乡</option>
                    </select>
                </li>
                <li>
                     <label for="address">详细地址</label>
                    <input type="text" name="" id="address" placeholder="街道门牌信息" v-model="address">
                </li>
                <li>
                     <label for="code">邮政编号</label>
                    <input type="text" name="" id="code" placeholder="邮政编号" v-model="code">
                </li>
            </ul>
            <div class="newbutton">
                <p>
                    <button class="save" v-on:click="Address()">保存</button>
                </p>
                <p v-if="hasaddress">
                    <button class="read">从微信读取</button>
                </p>
                <p v-if="hasaddress">
                    <button class="cancel" v-on:click="remove">删除</button>
                </p>
                <p>
                    <button class="cancel">取消</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import Axios from 'axios'
export default {
    data() {
        return{
            data:[],	
            linkMan:'', //联系人
            mobile:'', //手机号码
            address:'', //地址
            code:'',
            id:'',
            hasaddress:true,
            aa:[]

        }
    },
    // created(){
    //      Axios.post('/api/common/region/province').then(resss => {
    //             console.log(resss)
    //         })
    // },
    methods: {
        //点击省
     
           
       
        //市
        // shi() {
        //     let params = new URLSearchParams();
        //     params.append('pid',this.aa)
        //     Axios.post('/api/common/region/child?',params).then(res => {
        //         console.log(res)
        //     })
        // },
        //保存
        Address() {
            if(this.id == '' || this.id == undefined) {
                let params = new URLSearchParams();
                params.append('linkMan',this.linkMan);
                params.append('mobile',this.mobile);
                params.append('address',this.address);
                params.append('code',this.code);
                params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
                params.append('provinceId','750001'),  //省
                params.append('cityId','750001'),    //市
                Axios.post('/api/small4/user/shipping-address/add',params).then(res => {
                    let { data } = res
                    if(data.code===0) {
                        this.hasaddress = true
                        location.href = '/myaddress'            
                    }else{
                        this.hasaddress = false
                        alert(data.msg)
                    }
                })
            }else{
                let params = new URLSearchParams();
                params.append('linkMan',this.linkMan);
                params.append('mobile',this.mobile);
                params.append('address',this.address);
                params.append('code',this.code);
                params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
                params.append('provinceId','750001'),  //省
                params.append('cityId','750001'),    //市
                Axios.post('/api/small4/user/shipping-address/update',params).then(res => {
                })
            }       
        },
        //删除
        remove() {
            let id = localStorage.getItem('id')
            let params = new URLSearchParams()
            params.append('id',id)
            params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
            Axios.post('/api/small4/user/shipping-address/delete',params).then(res => {
                console.log(res)
                let { code } = res.data
                if(code === 0){
                    alert('删除成功')
                    this.$router.go(-1)
                }
            })
        }
    }
}
</script>

<style>

</style>
