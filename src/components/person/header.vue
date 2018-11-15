<template>
    <div class="personheader">
        <dl>
            <dt>
                <img src="../../img/list1.jpg" alt="">
            </dt>
            <dd v-if="logs">
                <p><router-link to="/login">注册/登录</router-link></p>
            </dd>
            <dd v-else-if="!logs">
                <p><b>仙女味的黑妹</b></p>
                <p><span>积分： 20</span></p>
            </dd>
        </dl>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            logs:false
        }
    },
    created() {
        
    },
    methods: {   
    }
}
</script>

<style>

</style>
