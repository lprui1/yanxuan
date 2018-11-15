<template>
    <div class="selectdetail">
        <a href="#" class="shang"><span>&lt;</span></a>
        <div class="cutlistheader">
            <h4>专题详情</h4>
        </div>
        <!--内容-->
        <div class="newsdetail">
            <h5 v-html="this.newsdetail.title"></h5>
            <p v-html="this.newsdetail.content"></p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            newsdetail:{}
        }
    },
    created() {
        let { id } = this.$route.params
        Axios.get('/api/small4/cms/news/detail?id='+id).then((res) =>{
            let { data } = res.data
            this.newsdetail = data
            console.log(this.newsdetail)
        })
    }
}
</script>

<style>

</style>
