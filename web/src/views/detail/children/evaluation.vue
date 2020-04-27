<template>
    <div id="evaluation">
        <!-- {{item[this.$store.state.type].userevaluation}} -->
        <h3>评论</h3>
        <div v-if="item[this.$store.state.type].userevaluation.length != 0" class="user">
            <div class="item" v-for="(item, index) in item[this.$store.state.type].userevaluation" :key="index">
                <span class="name">{{item.name}}</span>
                <span class="content">内容: {{item.content}}</span>
                <span class="time">时间:{{item.usertime}}</span>
                <span class="scroe">评分: {{item.userscore}}分(满分5)</span>
                <!-- {{item}} -->
            </div>
        </div>
        <h2 v-else>暂时没有评论哦</h2>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['item'])
        },
    }
</script>

<style  scoped>
    @media screen and (min-width: 430px){
        h3 {
            padding: 1.3vw;
            font-size: 1.6vw;
            border-bottom: 3px solid #fff;
            background: #eaeaea;
        }

        h2 {
            background: #fff;
        }
        .item {
            position: relative;
            height: 7.8vw;
            background-color: #eaeaea;
            border-bottom: 2px solid #fff;
        }

        .item .name {
            font-size: 1.6vw;
            height: 7.8vw;
            line-height: 7.8vw;
            padding: 1.3vw;
        }

        .item .content {
            padding: 2.6vw;
        }

        .item .time {
            position: absolute;
            top: 10%;
            right: 10%;
        }

        .item .scroe {
            position: absolute;
            bottom: 10%;
            right: 10%;
        }
    }

    @media screen and (max-width: 430px){
        h3 {
            padding: 3.125vw;
            border-bottom: 3px solid #fff;
        }
        .item {
            height: 28.125vw;
            position: relative;
            border-bottom: 3px solid #fff;
            overflow: hidden;
            /* background-colorgb(15, 6, 6)f00; */
        }

        .item .name {
            display: inline-block;
            font-size: 6.25vw;
            padding: 3.125vw 3.125vw 3.125vw 6.25vw; 
        }

        .item .content {
            font-size: 4.68vw;
            display: block;
            margin: 3.125vw;
        }

        .item .time {
            position: absolute;
            font-size: 3.75vw;
            right: 5%;
            top: 5%;
        }
        .item .scroe {
            position: absolute;
            font-size: 3.75vw;
            right: 8%;
            top: 30%;
        }
    }
</style>