<template>
    <div class="sortright">
        <scroller ref="my_scroller">
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
        </scroller>
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
            return this.$store.getters.rightdata
        }
    },
    created() {
        //分类
        this.$store.commit('getlist')
    }
}
</script>

<style>

</style>
