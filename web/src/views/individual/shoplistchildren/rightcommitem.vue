<template>
    <div id="rightcommitem">
        <!-- {{item}} -->
        <h2 v-if="length == 0">暂没有用户评论哦</h2>
        <div v-else class="ccc">
            <!-- {{item}} -->
            <div class="shoptit">
                <span>商品名:</span>{{item.data.item_title}}
            </div>
            <div class="shoptime">
                {{item.data.time}}
            </div>
            <div class="box">
                <div class="username">
                    <span>用户名:</span>{{item.data.user_id}}
                </div>
                <div class="content">
                    <span>内容:</span>{{item.data.user_content}}
                </div>
                <div class="score">
                    <span>评分:</span>{{item.data.score}}
                    <button v-show="item.data.shopcontent == undefined" @click="btnbutton">回复</button>
                </div>
            </div>
            <div class="shophome">
                <!-- {{item.data.shopcontent == undefined}} -->
                <div v-show="item.data.shopcontent != undefined" class="username">
                    <span>商家:</span>
                </div>
                <div v-show="item.data.shopcontent != undefined" class="content">
                    <span>内容:</span>{{item.data.shopcontent}}
                </div>
                <div v-show="item.data.shopcontent != undefined" class="shopcontime">
                    {{item.data.shopcontenttime}}
                </div>
            </div>
            <!-- {{item.data.shopcontent}} -->
            <div v-show="item.data.shopcontent == '' || isshowcontent " class="shopcontent">
                <label for="shopcontent">
                    <span>回复:</span>
                    <input type="" name="shopcontent" ref="shopcontent" value="">
                </label>
                <button @click="commsubmit">提交</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isshowcontent: false
            }
        },
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            },
            length: {
                type:Number,
                default: 0,
            }
        },
        mounted() {
            // console.log(this.item)
        },
        methods: {
            btnbutton() {
                this.isshowcontent = !this.isshowcontent 
            },
            commsubmit() {
                var data = {}
                data._id = this.item._id
                data.user_id = this.item.data.user_id
                data.shop_id = this.item.data.shop_id
                data.shop_title = this.item.data.shop_title
                data.item_title = this.item.data.item_title
                data.item_img = this.item.data.item_img
                data.user_content = this.item.data.user_content
                data.score = this.item.data.score
                data.create_time = this.item.data.create_time
                data.time = this.item.data.time
                data.item_imt = this.item.data
                data.shopcontent = this.$refs.shopcontent.value
                data.time = this.item.data.time
                var time = new Date()
                data.shopcontenttime = time.getMonth() + 1 + '/' + time.getDate() + ' ' + time.getHours() + '.' +  time.getMinutes()
                // console.log(data)
                if(data.shopcontent == '') {
                    this.$toast.show('请先填写评论', 2000)
                }else {
                    this.$ajax.post('/common/upcomm', data).then(res => {
                        this.$toast.show(res.data, 2000)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
        #rightcommitem {
            position: relative;
            background-color: #eaeaea;
            margin-bottom: 1.54440vw;
            padding:  2.31660vw;
            font-size: 1.54440vw;
        }

        .shoptime {
            float: right;
        }

        .box {
            border-bottom: 1px solid #000;
        }

        .username, .content, .score {
            display: inline-block;
            margin: 5px 1.54440vw ;
            padding: 1.54440vw 0;
        }

        .username span, .content span, .score span {
            font-weight: 700;
            margin: 0 1.54440vw;
        }

        .shopcontime {
            float: right;
            padding: 1.54440vw 0;
        }

        .score button {
            position: absolute;
            right: 4.16988vw;
            top: 6.33204vw;
            width: 4.63320vw;
            height: 2.31660vw;
        }

        .shopcontent {
            padding: 1.54440vw 0 0 0;
        }

        .shopcontent input{
            margin: 0 2.31660vw;
        }

        .shopcontent button {
            width: 4.63320vw;
            height: 2.31660vw;
        }
}
    @media screen and (max-width: 430px) {
        #rightcommitem {
            background-color: #eaeaea;
            font-size: 4.0625vw;
            position: relative;
            padding-bottom: 1.5625vw;
            margin-bottom: 3.125vw;
        }
        .shoptime {
            position: absolute;
            right: 0;
            top: 0;
        }

        .username, .content {
            padding: 3.125vw 3.125vw 0 ;
        }

        .score {
            position: relative;
            padding: 3.125vw 3.125vw  ;
            border-bottom: 1px solid rgb(105, 104, 104);
        }

        .score button {
            position: absolute;
            bottom: 3.125vw;
            right: 3.125vw;
            width: 9.375vw;
            height: 6.25vw;
        }

        .shopcontent {
            padding: 3.125vw;
            position: relative;
        }
        .shopcontent  input {
            width: 44.375vw;
        }

        .shopcontent button {
            position: absolute;
            bottom: 3.125vw;
            right: 3.125vw;
            width: 9.375vw;
            height: 6.25vw;
        }

        .shophome {
            position: relative;
        }

        .shopcontime {
            position: absolute;
            right: 1.5625vw;
            top: 1.5625vw;
        }
    }
</style>