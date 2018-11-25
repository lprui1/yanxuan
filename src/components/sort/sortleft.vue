<template>
    <div class="sortleft">
        <ul>
            <li>
                <span @click='all'>全部</span>
            </li>
            <li v-for="(item,index) in list" :key="index" v-on:click="sort(item.type)">
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
        sort(type){
            this.$store.commit('sort',type)
        },
        all(){
           this.$store.commit('all')
        }
    },
    computed: {
        list() {
            return this.$store.getters.leftdata
        }
    }
}
</script>

<style>

</style>
