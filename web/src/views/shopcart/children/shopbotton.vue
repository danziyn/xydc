<template>
    <!-- <div> -->
        <div class="botton">
            <span :class="{active:isActive}" @click="btnclick"></span>
        </div>
    <!-- </div> -->
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            btnclick() {
                console.log('222222')
                this.$emit('btnnclick')
                this.$emit('qrxrbtn')
            }
        },
    }
</script>

<style scoped>

    @media screen and (min-width: 430px){
        .botton {
            position: absolute;
        }
        span {
            width: 25px;
            height: 25px;
        }
    }

    @media screen and (max-width: 430px){
        .botton {
            position: absolute;
            width: 20px;
            /* height: 110px; */
            height: 100%;
        }
        span {
            display: inline-block;
            width: 15px;
            height: 15px;
            position: relative;
            top: 50%;
            transform: translate(0, -50%);
        }
    }

    span {
        display: inline-block;
        position: relative;
        /* top: 50%; */
        /* transform: translate(50%, 0); */
        border: 2px solid #ccc;
        border-radius: 50%;
    }

    .active {
        background-color: #f1c40f;
        border: 1px solid #f1c40f;
    }
</style>