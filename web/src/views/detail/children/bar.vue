<template>
    <div id="bar">
        <div class="tarbar clear-fix">
            <!-- <div class="back">&lt;</div> -->
            <div class="con">
                <img :src="item[this.fu].head_logo" alt="">
                <div class="rightt">
                    <h4>{{item[this.fu].head_title}}</h4>
                    <span v-for="(item, index) in item[this.fu].head_desc" :key="index">{{item}}</span>
                </div>
                <div @click="backup" class="back">
                    返回
                </div>
            </div>
        </div>
        <!-- {{item}} -->
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props: {
            fu: {
                type: String,
                default: ''
            }
        },
        computed: {
            ...mapState(['item'])
        },
        methods: {
            backup() {
                this.$router.push({
                    path: '/cateorgy',
                    query: {
                        dataID: this.$store.state.page
                    }
                })
            }
        }
    }
</script>

<style  scoped>
    .tarbar {
        background: #fff;
        border-bottom: 2px solid #eaeaea;
    }
    @media screen and (min-width: 430px){
        .back {
            display: none;
        }

        img {
            float: left;
            margin: 1.3vw 1.3vw 1.3vw 2.6vw;
            width: 8.4vw;
            height: 8.4vw;
        }

        .rightt {
            height: 100%;
            margin-left: 16.2vw;
        }

        .rightt h4 {
            font-size: 1.9vw;
            padding: 1.8vw 1.3vw 0.8vw 1.3vw;
        }

        .rightt span {
            display: inline-block;
            margin: 2.4vw 1.3vw; 
        }
    }

    @media screen and (max-width: 430px){
        .tarbar {
            margin-top: 13vw;
        }
        img {
            float: left;
            margin: 10px;
            width: 70px;
            height: 70px;
        }
        .con {
            position: relative;
        }
        .con h4 {
            padding: 20px;
        }

        .rightt span {
            margin-right: 10px;
            font-size: 12px;
        }

        .con .back {
            position: absolute;
            right: 5%;
            top: 20%;
            font-size: 13px;
        }
    }
</style>