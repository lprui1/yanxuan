<template>
    <div class="sort">
        <div class="header">
            <input type="text" name="" id="" placeholder="搜索商品">
        </div>
        <div class="sortmain">
            
                <Sortleft></Sortleft>
                <!-- <scroller ref="my_scroller"> -->
                    <Sortright></Sortright>
                <!-- </scroller>     -->
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Sortleft from '../../components/sort/sortleft'
import Sortright from '../../components/sort/sortright'
import Footer from '../../components/common/footer'
export default {
    components: {
        Sortleft,
        Sortright,
        Footer
    },
    created(){
        
    }
}
</script>

<style>

</style>
