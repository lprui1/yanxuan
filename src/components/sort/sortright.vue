<template>
    <div class="sortright">
        <!--轮播图-->
        <div class="swiper">
            <div class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <img src="../../img/banner3.jpg" alt="">
                    </li>
                    <li class="swiper-slide">
                        <img src="../../img/banner3.jpg" alt="">
                    </li>
                </ul>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!--分类列表-->
        <div class="sortlist">
            <ul>
                <li v-for="(item,index) in sortlist" :key="index">
                    <p><img v-lazy="item.icon" alt=""></p>
                    <p><span>{{item.name}}</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import Axios from 'axios'
import { bus } from '@/bus.js'
export default {
    data() {
        return {
            rightlist:[]
        }
    },
    mounted() {
        // console.log(this.$store.state.count)
        //轮播
        var mySwiper = new Swiper('.swiper-container',{
            observer:true,                           //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,                  //修改swiper的父元素时，自动初始化swiper
            autoplay: {
            delay: 1000,
            },
        pagination: {
            el: '.swiper-pagination',
            },
        })
    },
    computed: {
        sortlist() {
            return this.$store.state.sortlist
        }
    },
    created() {
        //分类
        this.$store.commit('getlist')
        // console.log(this.$store)
        //点击左边切换右边
        bus.$on('sort',(index) => {
            // console.log(index)
            switch(index) {
                case 0:
                this.rightlist = this.sortlist
                break;
                case 1:
                this.rightlist = this.sortlist.fiiter(item => {
                    return item.type==='jujia2'
                })
                break;
                case 2:
                this.rightlist = this.sortlist.fiiter(item => {
                    return item.type==='peishi2'
                })
                break;
                case 3:
                this.rightlist = this.sortlist.fiiter(item => {
                    return item.type==='fuzhuang2'
                })
                break;
                default:
                this.rightlist = this.sortlist.fiiter(item => {
                    return item.type==='dianqi2'
                })
                break;
            }
        })
    }
}
</script>

<style>

</style>
