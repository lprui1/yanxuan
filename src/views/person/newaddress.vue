<template>
    <div class="newaddress">
        <a href="#" class="shang" v-on:click="back"><span>&lt;</span></a>
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
                    <label>选择地区</label>
                    <select @change="sheng" v-model="province">
                        <option value="">选择省</option>
                        <option v-for="item in shengfen" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                    <select v-on:click="City" v-model="city">
                        <option value="">选择市</option>
                        <option v-for="item in citylist" :key="item.id" :value="item.id">{{item.name}}</option>
                    </select>
                    <select v-on:click="Xiang" v-model="xiang">
                        <option value="">选择乡</option>
                        <option v-for="item in xianglist" :key="item.id" :value="item.id">{{item.name}}</option>
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
                <p v-if="!hasaddress">
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
            province:'',   //省
            shengfen:[],  //省份列表
            city:'',        //市
            citylist:[],    //市列表
            xianglist:[],   //乡列表
            xiang:'',       //乡
            id:'',
            hasaddress:true,
            aa:[]
        }
    },
    mounted() {
        this.sheng()
    },
    methods: {
        //点击上一页
        back() {
            history.back(1)
        },
        //点击省
        sheng() {
            // console.log(this.province)
            Axios.post('https://api.it120.cc/common/region/province').then(res => { 
                this.shengfen = res.data.data   
            }) 
        }, 
        //市
        City() {
            let params = new URLSearchParams();
            params.append('pid',this.province)
            Axios.post('https://api.it120.cc/common/region/child',params).then(res => {
                this.citylist = res.data.data
            })
        },
        //乡镇
        Xiang() {
            let params = new URLSearchParams();
            params.append('pid',this.city)
            Axios.post('https://api.it120.cc/common/region/child',params).then(res => { 
                this.xianglist = res.data.data
                // console.log(this.xianglist)
                // if(this.xianglist) {
                //     this.xianglist = res.data.data
                // }else{
                //     alert('aaa')
                // }
            })
        },
        //保存
        Address() {
            if(this.id == '' || this.id == undefined) {
                let params = new URLSearchParams();
                params.append('linkMan',this.linkMan);
                params.append('mobile',this.mobile);
                params.append('address',this.address);
                params.append('code',this.code);
                params.append('token',this.$cookie.get('token'))
                params.append('provinceId','750001'),  //省
                params.append('cityId','750001'),    //市
                Axios.post('https://api.it120.cc/small4/user/shipping-address/add',params).then(res => {
                    let { data } = res
                    if(data.code===0) {
                        this.hasaddress = true
                        this.$router.go(-1)           
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
                params.append('token',this.$cookie.get('token'))
                params.append('provinceId','750001'),  //省
                params.append('cityId','750001'),    //市
                Axios.post('https://api.it120.cc/small4/user/shipping-address/update',params).then(res => {
                })
            }       
        },
        //删除
        remove() {
            let id = localStorage.getItem('id')
            let params = new URLSearchParams()
            params.append('id',id)
            params.append('token','d5a5ab1b-0678-439c-825b-2cee8e1273d6')
            Axios.post('https://api.it120.cc/small4/user/shipping-address/delete',params).then(res => {
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
