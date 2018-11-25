<template>
    <div class="Selectedlist">
        <div class="header">
            <router-link to="/" class="shang">&lt; </router-link>
            <h4>严选专栏</h4>
        </div>
        <div class="section">
            <!--横向滚动-->
            <ul class="heng">
                <li v-for="(item,index) in selection" :key="index">
                    <img :src="item.pic" alt="">
                    <div class="mess">
                          <b>严选推荐</b>
                    </div>
                </li>
            </ul>
            <div class="main">
                <ul>
                    <li v-for="(item,index) in selection" :key="index">
                        <img :src="item.pic" alt="">
                        <div class="mess">
                            <p><b>{{item.descript}}</b></p>
                            <p>{{item.title}}</p>
                            <p>
                                <router-link :to="'/selectdetail/'+item.id">
                                    查看详情
                                </router-link>   
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            selection:[]
        }
    },
    created() {
        Axios.get('https://api.it120.cc/small4/cms/news/list').then((res) =>{
            let { data } = res.data
            this.selection  = data
            // console.log(this.selection)
        })
    }
}
</script>

<style>

</style>
