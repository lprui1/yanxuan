<template>
    <div class="Selectedlist">
        <div class="header">
            <router-link to="/">&lt; </router-link>
            <h4>严选专栏</h4>
        </div>
        <div class="section">
            <!--横向滚动-->
            <ul class="heng">
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/zhuanlan.jpg" alt="">
                </li>
            </ul>
            <div class="main">
                <ul>
                    <li v-for="(item,index) in selection" :key="index">
                        <div class="bg"></div>
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
            // bg:{
            //     width:'100%',
            //     height:'100%',
            //     background:"url('+require(../../img/banner.jpg')+')",
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     filter: 'blur(1px)',
            // }
        }
    },
    created() {
        Axios.get('/api/small4/cms/news/list').then((res) =>{
            let { data } = res.data
            this.selection  = data
            console.log(this.selection)
        })
    }
}
</script>

<style>

</style>
