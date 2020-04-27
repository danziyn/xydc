<template>
    <div id="goodlist"> 
        <div class="item" v-for="(item, index) in goodlist" :key="index">
            <goodlistitem  :item='item'/>
        </div>
        <!-- {{goodlist}} -->
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import goodlistitem from './goodlistitem'
    export default {
        computed: {
            ...mapState(['goodlist'])
        },
        components: {
            goodlistitem
        },
        methods: {
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        .item {
            width: 100%;
            height: 180px;
            margin-bottom: 10px;
            background-color: #eaeaea;
            position: relative;
        }
    }

    @media screen and (max-width: 430px){
        .item {
            width: 100%;
            height: 110px;
            background-color: #eaeaea;
            margin-bottom: 20px;
        }
    }
</style>