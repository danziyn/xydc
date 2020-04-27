<template>
    <div id="olderitem"> 
        <!-- {{user_comment}} -->

        <!-- {{user_comment}} -->
        <div class="pc">   
            <!-- {{mycomment}} -->
            <img :src="item.item_img" alt="">
            <span class="shopname">商品名字:</span>
            <span class="shopnamevalue">{{item.item_title}}</span>
            <span class="headname">店铺名字:</span>
            <span class="headnamevalue">{{item.head_title}}</span>
            <span class="headname">价格:</span>
            <span class="headnamevalue">{{item.item_price}}元</span>
            <div class="btn">
                <button class="add" v-show="mycomment.length == 0"  @click="addevaluation">添加评价</button>
                <button class='del' @click="delcomm">删除订单</button>
            </div>
            <div class="display" v-show="isdisplay">
                <li class="first">t
                    <span>内容:</span><input type="text" ref="contentt">
                </li>
                <li class="second"> 
                    <span>评分:</span>
                    <label for="one">
                        <input type="radio" v-model="score" name="one" value="1">1
                    </label>
                    <label for="two">
                        <input type="radio" v-model="score" name="two" value="2">2
                    </label>
                    <label for="three">
                        <input type="radio" v-model="score" name="three" value="3">3
                    </label>
                    <label for="four">
                        <input type="radio" v-model="score" name="three" value="4">4
                    </label>
                    <label for="five">
                        <input type="radio" v-model="score" name="three" value="5">5
                    </label>
                </li>
                <div class="btnbutton">
                    <button @click="pccommit">提交</button>
                    <button @click="btnbackup">返回</button>
                </div>
            </div>
        </div>
        <div class="phone clear-fix">   
            <img :src="item.item_img" alt="">
            <li>
                <span class="shopname">商品名字:</span>
                <span class="shopnamevalue">{{item.item_title}}</span>
            </li>
            <li>
                <span class="headname">店铺名字:</span>
                <span class="headnamevalue">{{item.head_title}}</span>
            </li>
            <li>
                <span class="headname">价格:</span>
                <span class="headnamevalue">{{item.item_price}}元</span>
            </li>
            <div class="btn">  
                <!-- {{mycomment}} -->
                <button class="add" v-show="mycomment.length == 0"  @click="addevaluation">添加评价</button>
                <button class='del' @click="delcomm">删除订单</button>
            </div>
            <div class="display" v-show="isdisplay">
                <li>
                    <span>内容:</span><input type="text" ref="contentq">
                </li>
                <li> 
                    <span>评分:</span>
                    <label for="one">
                        <input type="radio" v-model="score" name="one" value="1">1
                    </label>
                    <label for="two">
                        <input type="radio" v-model="score" name="two" value="2">2
                    </label>
                    <label for="three">
                        <input type="radio" v-model="score" name="three" value="3">3
                    </label>
                    <label for="four">
                        <input type="radio" v-model="score" name="three" value="4">4
                    </label>
                    <label for="five">
                        <input type="radio" v-model="score" name="three" value="5">5
                    </label>
                </li>

                <div class="btnbutton">
                    <button @click="commit">提交</button>
                    <button @click="btnbackup">返回</button>
                </div>
            </div>
        </div>
        <!-- {{mycomment[0] == undefined}} -->
        <div class="content  clear-fix" v-if="mycomment[0] !== undefined" >  
            <div class="contentscore">
                <span>评分:</span>
                <span>{{mycomment[0].data.score}}</span>
            </div>
            <span class="contenttime">{{mycomment[0].data.time}}</span>
            <div class="contentcontent clear-fix">
                <span class="user">用户:</span>
                <span class="text">{{mycomment[0].data.user_content}}</span>
            </div>
        </div>
        <div v-if="mycomment[0] !== undefined && mycomment[0].data.shopcontent != undefined" class="content  clear-fix">
            <div  class="content  clear-fix"></div>
            <span class="contenttime">{{mycomment[0].data.shopcontenttime}}</span>
            <div class="contentcontent clear-fix">
                <span class="user">商家:</span>
                <span class="text">{{mycomment[0].data.shopcontent}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isdisplay: false,
                score: "",
                mycomment: [],
                isseedisplay: false
            }
        },
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            },
            user_comment: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        mounted() {
            // 分离出属于自己的评价
            // 异步执行一次,延迟一会,以免数据没有过来
            // console.log('我请求了')
            // console.log(this.item)
            setTimeout(() => {
                this.mycomment = this.user_comment.filter(item => {
                    console.log(this.item)
                    return this.item.item_title == item.data.item_title && this.item.user_time == item.data.create_time
                    // return this.item.item_title == item.data.item_title && this.item.user_time == item.data.time
                })
                // this.mycomment = 1
                // console.log(this.mycomment.length)
            })
        },
        methods: {
            // 添加评价
            addevaluation() {
                console.log('true')
                this.isdisplay = true
            },
            pccommit() {
                if(this.score == '') {
                    this.$toast.show('请先选择评分', 2000)
                }else {
                    // console.log(this.item)
                    const data = {}
                    data._id = this.item._id
                    data.name = this.item.name
                    data.head_title = this.item.head_title
                    data.item_title = this.item.item_title
                    data.item_img = this.item.item_img
                    data.item_price = this.item.item_price
                    data.content = this.$refs.contentt.value
                    data.score = this.score
                    data.create_time = this.item.user_time
                    var time = new Date()
                    data.contenttime = time.getMonth() + 1 + '/' + time.getDate() + ' ' + time.getHours() + '.' +  time.getMinutes()
                    // console.log(data)

                    // // 发送评论ajax
                    // console.log('发送ajax函数前')
                    this.$ajax.post('/common/add', data).then(res => {
                        this.$toast.show(res.data, 2000)
                    })
                    // console.log('发送ajax函数后')
                }
                
            },
            commit() {
                // console.log('11111111112222222222')
                if(this.score == '') {
                    this.$toast.show('请先选择评分', 2000)
                }else {
                    const data = {}
                    data._id = this.item._id
                    data.name = this.item.name
                    data.head_title = this.item.head_title
                    data.item_title = this.item.item_title
                    data.item_img = this.item.item_img
                    data.item_price = this.item.item_price
                    data.content = this.$refs.contentq.value
                    data.score = this.score
                    data.create_time = this.item.user_time
                    var time = new Date()
                    data.contenttime = time.getMonth() + 1 + '/' + time.getDate() + ' ' + time.getHours() + '.' +  time.getMinutes()
                    // console.log(data, this.item)

                    // 发送评论ajax
                    this.$ajax.post('/common/add', data).then(res => {
                        this.$toast.show(res.data, 2000)
                    })
                }
                
            },
            seevaluation() {
                this.isseedisplay = true
            },
            btnbackup() {
                this.isdisplay = !this.isdisplay
            },
            delcomm() {
                var delshop_id = {}
                delshop_id._id = this.item._id
                delshop_id.shopname = this.item.item_title
                delshop_id.tel = this.$store.state.user.tel
                delshop_id.time = this.item.time
                console.log(this.item)

                // var 
                // console.log(delshop_id)
                // 发送ajax函数
                this.$ajax.post('/users/deletecomm', delshop_id).then(res => {
                    // console.log()
                    this.$toast.show(res.data, 2000)
                })

                // 还需要删除评论
                this.$ajax.post('/common/delcommcon', this.item).then(res => {
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
        #olderitem {
            font-size: 1.03896vw;
        }

        .phone {
            display: none;
        }
        img {
            float: left;
            width: 6.75324vw;
            height: 6.75324vw;
            margin: 0.51948vw 1.55844vw;
        }

        .shopname, .headname {
            display: inline-block;
            width: 6.49350vw;
            height: 7.79220vw;
            line-height: 7.79220vw;
        }

        .shopnamevalue, .headnamevalue {
            margin-right: 2.59740vw;
        }

        .btn {
            float: right;
            position: relative;
        }

        .btn button {
            width: 6.23376vw;
            height: 2.59740vw;
            border-radius:0.51948vw;
            position: relative;
            top: 2.80519vw;
            margin-right: 3.53246vw;
            /* position: absolute;
            top: 50px; */
        }

        .content {
            position: relative;
            padding: 1.54440vw;
            border-top: 1px solid #fff;
        }

        .content .contenttime{
            float: right;
            padding-right: 3.08880vw;
        }

        .content .contentscore {
            float: left;
        }

        .content .contentcontent {
            padding: 2.31660vw;
        }

        .content .user {
            margin-left: 9.26640vw;
            margin-right: 5.55984vw;
            font-weight: 700;
        }

        .display {
            width: 100%;
            height: 7.72200vw;
            padding: 1.54440vw;
            border-top: 2px solid #fff;
        }

        .display li {
            display: inline-block;
            height: 4.63320vw;
            line-height: 4.63320vw;
        }

        .display .first span {
            margin-left: 11.58301vw;
        }

        .display .first input {
            margin: 0 9.26640vw 0 1.54440vw;
        }

        .display .second span{
            margin: 0 1.54440vw;
        }

        .display .second label {
            margin: 1.54440vw;
        }

        .display .btnbutton {
            float: right;
            line-height: 6.17760vw;
        }

        .display .btnbutton button {
            margin: 0 2.31660vw;
            display: inline-block;
            width: 6.17760vw;
            height: 3.08880vw;
            border-radius: 0.77220vw;
        }
    }

    @media screen and (max-width: 430px) {
        #olderitem {
            font-size: 4.6875vw;
            color: #000;
        }
        .pc {
            display: none;
        }
        img {
            float: left;
            width: 31.25vw;
            height: 31.25vw;
            margin: 3.125vw;
        }

        li {
            margin:1.5625vw 3.125vw;
            width: 55.625vw;
            display: inline-block;
        }

        button {
            margin: 1.5625vw 3.125vw;
        }

        .btn .add {
            /* margin: 1.5625vw 0 1.5625vw 36.125vw; */
            
            float: left;
            margin-left: 6.25vw;
        }

        .btn .del {
            float: right;
            margin-right: 6.25vw;
        }

        .shopnamevalue, .headnamevalue {
            display: inline-block;
            width: 34.375vw;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            vertical-align:top
        }

        .display {
            margin:3.125vw;
        }

        .content {
            border-top: 2px solid #fff;
            padding: 3.125vw 6.25vw;
            width: 100%;
            position: relative;
        }

        .contentscore {
            float: left;
        }

        .content .contenttime {
            float: right;
        }

        .content .contentcontent {
            margin: 6.25vw;
            
        }

        .contentcontent .user {
            width: 15.625vw;
            float: left;
        }

        .contentcontent .text {
            display: inline-block;
            width: 59.375vwx;
        }
    }
</style>