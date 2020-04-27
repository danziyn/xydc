<template>  
    <div id="datalist">
        <div class="list" v-for="(item, index) in list" :key="index"> 
            <datlistitem  :listitem='item' :spec='spec' />
        </div>
    </div>
</template>

<script>
    import datlistitem from './datlistitem'
    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            },
            spec: {
                type: String,
            }
        },
        components: {
            datlistitem
        },
        methods: {
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        .list {
            width: 100%;
            height: 15.4vw;
            border: 1px solid #eaeaea;
            position: relative;
        }
    }

    @media screen and (max-width: 430px){
        .list {
            height: 110px;
            /* background-color: #f00; */
            border: 1px solid #eaeaea;
            position: relative;
        }
    }

</style>