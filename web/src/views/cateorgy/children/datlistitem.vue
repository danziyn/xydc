<template>
    <div id="listitem">
        <div  class="content">
            <div class="shopimg">
                <div class="leftt">
                    <img  @click="detail" :src="listitem[this.spec].head_logo" alt="">
                </div>
                <div class="rightt">
                    <h3 @click="detail">{{listitem[this.spec].head_title}}</h3>
                    <span v-for="(item, index) in listitem[this.spec].head_desc" :key="index">{{item}}</span>
                </div>
                <div class="meth">
                    <span @click="detail">进店</span>
                </div>
            </div>
        </div>
        <!-- {{listitem}} -->
    </div>
</template>

<script>
    export default {
        props: {
            listitem: {
                type: Object,
                default() {
                    return {}
                }
            },
            spec: {
                type: String,
            }
        },
        data() {
            return {
            }
        },
        methods: {
            detail() {
                // console.log('1111')
                this.$store.state.item = this.listitem
                // console.log(this.$store.state.item)
                this.$router.push({
                    path: '/detail',
                    query: {
                        fu: this.spec
                    }
                })
            }
        },
        mounted() {

            // console.log(this.listitem[this.spec])
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        /* .content {
            position: relative;
        } */

        .content img {
            float: left;
            width: 12.9vw;
            height: 12.9vw;  

            margin-left: 4.9vw;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
        }

        .content .rightt {
            margin-left: 21.6vw;
        }

        .content .rightt h3 {
            margin:  3.4vw 2.4vw;
            font-size: 1.8vw;
            font-weight: 700;
        }

        .content .rightt span {
            display: inline-block;
            margin:   1.5vw 1.5vw 1.5vw 2vw;
        }

        .content .meth {
            display: inline-block;
            width: 4.9vw;
            height: 2.4vw;
            line-height: 2.4vw;
            border: 1px solid #eaeaea;
            border-radius: 1.2vw;
            background: #f39c12;
            text-align: center;
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translate(0, -50%);
        }

        .content .meth:hover {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 430px){
        .content img {
            float: left;
            width: 25vw;
            height: 25vw;

            margin-left: 6.25vw;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
        }

        .content .rightt {
            margin-left: 37.5vw;
            font-size: 4.6vw;
        }

        .content .rightt h3 {
            padding: 5.6vw;
            margin: 0 0 1.56vw 3.1vw;
            font-weight: 700;
        }

        .content .rightt span {
            display: inline-block;
            font-size: 4vw;
            margin: 0 3.125vw;
        }

        .content .meth {
            display: none;
        }
    }

</style>