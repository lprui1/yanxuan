<template>
    <div class="personbox">
        <div class="person">
            <PersonHeader></PersonHeader>
            <PersonNotice></PersonNotice>
            <PersonOrder></PersonOrder>
            <PersonList></PersonList>
            <p class="title">清欢严选v2.2.0</p>
        </div>
        <PersonFooter></PersonFooter>
    </div>
    
</template>
<script>
import PersonHeader from '../../components/person/header'
import PersonNotice from '../../components/person/notice'
import PersonOrder from '../../components/person/order'
import PersonList from '../../components/person/list'
import PersonFooter from '../../components/common/footer'
export default {
    components: {
        PersonHeader,
        PersonNotice,
        PersonOrder,
        PersonList,
        PersonFooter
    }
}
</script>

<style>


</style>
