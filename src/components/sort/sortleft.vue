<template>
    <div class="sortleft">
        <ul>
            <!-- <li class="active" v-for="(item,index) in list" :key="index">
                <span v-on:click="sort('all')">{{item.name}}</span>
            </li> -->
            <li>
                <span>全部</span>
            </li>
            <li v-for="(item,index) in list" :key="index">
                <span >{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
import { bus } from '@/bus.js'
export default {
    methods: {
        sort(index){
            // this.$store.commit('list')
            // this.state.commit(sortlist)
            // console.log(this.state)
        }
    },
    computed: {
        list() {
            return this.$store.getters.leftdata
        }
    },
    created() {
        // Axios.post(global.globalData.api+'/shop/goods/category/all').then((res) => {
        //     let { data } = res.data;
        //     //居家
        //     this.jujia = data.filter((res) => {
        //         // this.jujia = res
        //         return res.type == 'jujia2'
        //     })
        //     //配饰
        //     this.peishi = data.filter((res) => {
        //         return res.type == 'peishi2'
        //     })
        //     //服装
        //     this.fuzhuang = data.filter((res) => {
        //         return res.type == 'fuzhuang2'
        //     })
        //     console.log(this.jujia)
        //     console.log(this.peishi)
        //     console.log(this.fuzhuang)
        // })
    }
}
</script>

<style>

</style>
