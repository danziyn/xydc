<template>
    <div id="dele">
        <div class="message">
            商家信息
        </div>
        <div class="con">
            <div class="address"><span>地址: </span>{{item[this.$store.state.type].meggages.address}}</div>
            <div class="time"><span>营业时间:</span>{{item[this.$store.state.type].meggages.time}}</div>
            <div class="score"><span>评分: </span>{{item[this.$store.state.type].meggages.score}}</div>
            <div class="methods"><span>配送方式: </span>{{item[this.$store.state.type].meggages.methods}}</div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['item'])
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        .message {
            font-size: 1.6vw;
            padding: 1.95vw;
            border-bottom: 3px solid #fff;
        }

        .con {
            position: relative;
        }

        span {
            display: inline-block;
            width: 9.76vw;
            padding-left: 1.3vw;
        }

        .address, .score, .methods, .time {
            font-size: 1.43vw;
            padding: 1.3vw;
        }

    }

    @media screen and (max-width: 430px){
        .message {
            font-size: 20px;
            padding: 10px;
            border-bottom: 2px solid #fff;
        }

        span {
            display: inline-block;
            width: 90px;
        }
        .address, .score, .methods, .time {
            font-size: 15px;
            padding: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>