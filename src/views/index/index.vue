<template>
    <div class="box">
        <div class="goods">
            <scroller ref="my_scroller">
                <Swiper></Swiper>
                <Nav></Nav>
                <Cut></Cut>
                <Selected></Selected>
                <Recommend></Recommend>
            </scroller>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Swiper from '../../components/index/swiper'
import Nav from '../../components/index/nav'
import Cut from '../../components/index/cut'
//精选主题
import Selected from '../../components/index/Selected'
//人气推荐
import Recommend from '../../components/index/recommend'
import Footer from '../../components/common/footer'
export default {
    components: {
        Swiper,
        Nav,
        Cut,
        Selected,
        Recommend,
        Footer
    }
}
</script>

<style scoped lang="scss">

</style>
