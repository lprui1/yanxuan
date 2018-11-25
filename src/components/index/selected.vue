<template>
    <div class="selected">
        <h4 class="topic">
            <router-link to="/Selectedlist">
                精选主题
                <span class="iconfont icon-xiangyouyuanjiantouyoujiantouxiangyouxianxing"></span>
            </router-link>    
        </h4>
        <div class="main">
            <dl v-for="(item,index) in selection" :key="index">
                <dt>
                    <router-link :to="'/selectdetail/'+item.id"> 
                        <img v-lazy="item.pic" alt="">
                    </router-link>
                </dt>
                <dd>
                    <p><span>{{item.descript}}</span><span>29起</span></p>
                    <p>{{item.title}}</p>
                </dd>
            </dl>
        </div>     
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            selection:[]
        }
    },
    created() {
        Axios.get('https://api.it120.cc/small4/cms/news/list').then((res) =>{
            let { data } = res.data
            this.selection  = data
        })
    }
}
</script>

<style>

</style>
