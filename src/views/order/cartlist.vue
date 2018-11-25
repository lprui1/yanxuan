<template>
    <div class="cartlist">
        <!-- <orderstatus></orderstatus> -->
        <router-view/>
    </div>
</template>

<script>
import Axios from 'axios'
import orderstatus from './orderstatus'
export default {
    components: {
        orderstatus
    }
}
</script>

<style>

</style>
