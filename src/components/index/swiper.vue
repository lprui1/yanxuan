<template>
    <div class="swiper">
       <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
                    <img :src="item.picUrl" alt="">
                </li>
            </ul>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import Axios from 'axios'
export default {
    data() {
        return{
            swiperlist:[]
        }
    },
    mounted() {
        //轮播
        var mySwiper = new Swiper('.swiper-container',{
            loop:true,          //循环滚动
            observer:true,                           //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,                  //修改swiper的父元素时，自动初始化swiper
            autoplay:{                  //自动播放
                disableOnInteraction: false,
                delay:4000      
            },    
            pagination: {
                el: '.swiper-pagination',
            },
            infinite:1      //无限滚动前后遍历数组
            })
        Axios.get('https://api.it120.cc/small4/banner/list').then((res) => {
            let { data } = res.data
            this.swiperlist = data;
            // console.log(this.swiperlist)
        })
    }
}
</script>

<style>

</style>
