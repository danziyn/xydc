<template>
    <div id="shop">
        <div class="text">
            <div class="leftt">
                <div class="leftitem" v-for="(key, index) in item[this.$store.state.type].goodlist" :key="index">{{key.name}}</div>
            </div>
            <div class="pc">
                <div class="rightt">
                    <div v-for="(key, index) in item[this.$store.state.type].goodlist" :key="index">
                        <div class="tit">{{key.name}}</div>
                        <div v-for="(item, index) in key.item1" :key="index">
                            <div class="k">
                                <div class="kleft">
                                    <img :src="item.item_img" alt="">
                                </div>
                                <div class="kright">
                                    <h4>{{item.item_title}}</h4>
                                    <div class="price" >
                                        <span class="price1" :class="{ondline: item.discount !=  undefined}">价格: {{item.item_price}}元</span>
                                        <span class="price2" v-if="item.discount !=  undefined">限时{{item.discount}}折 只需{{item.item_price *  Number('0.' + item.discount)}}元</span>
                                    </div>
                                    <div class="number">销量: {{item.item_number}}</div>
                                    <!-- <span>{{item.shopcontent}}</span> -->
                                </div>
                                <div class="kkright" @click="addgoodlist(item)">加入购物车</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- {{item}} -->
            </div>
            <div class="phone">
                <scroll class="content">
                    <div class="rightt">
                        <div v-for="(key, index) in item[this.$store.state.type].goodlist" :key="index">
                            <!-- 遍历每个种类的标题 -->
                            <div class="tit">{{key.name}}</div>
                            <div v-for="(item, index) in key.item1" :key="index">
                                <div class="k">
                                    <div class="kleft">
                                        <img  :src="item.item_img" alt="">
                                    </div>
                                    <div class="kright">
                                        <h4>{{item.item_title}}</h4>
                                        <div class="price">
                                            <span class="price1" :class="{ondline: item.discount !=  undefined}">价格: {{item.item_price}}元</span>
                                            <span class="price2" v-if="item.discount !=  undefined">{{item.discount}}折 只需{{item.item_price *  Number('0.' + item.discount)}}元</span>
                                            </div>
                                        <div class="number">销量: {{item.item_number}}</div>
                                    </div>
                                    <div class="kkright" @click="addgoodlist(item)">加入购物车</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </scroll>
            </div>
        </div>
        <!-- {{item}} -->
    </div>
</template>

<script>
    import scroll from 'components/common/scroll/scroll'
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                listoftop: [],
            }
        },
        computed: {
            ...mapState(['item'])
        },
        props: {
            fu: {
                type: String,
                default: '',
            }
        },
        methods: {
            addgoodlist(item) {
                // console.log(item)
                let cou = true
                if(this.$store.state.goodlist.length == 0) {
                    cou = true
                }else {
                    for(var i of this.$store.state.goodlist) {
                        // console.log(i)
                        if(i.item_title == item.item_title) {
                            cou = false
                        }
                    }
                }
                if(!cou) {
                    this.$toast.show('如需多选,请移步到购物车', 1000)
                }else {
                    item._id = this.item._id
                    item.head_title = this.item[this.$store.state.type].head_title
                    item.count = 1
                    item.check = true
                    // console.log(item)
                    this.$store.state.goodlist.push(item)
                    this.$toast.show('添加成功', 1000)
                    
                }
            },
        },
        components: {
            scroll
        }
    }
</script>

<style scoped>

    .ondline {
        text-decoration:line-through ;
    }
    @media screen and (min-width: 430px){
        .phone {
            display: none;
        }
        .leftt {
            float: left;
            height: 40.4vw;
            width: 15%;
            background-color: #fff;
            /* display: inline-block; */
        }

        .text .leftitem {
            width: 100%;
            line-height: 3.0vw;
            text-align: center;
            border-bottom: 1px solid #eaeaea;

            
            /* 多出显示省略号 */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .text .leftitem:hover {
            font-weight: 700;
        }

        .text .rightt {
            display: inline-block;
            width: 84%;
            border-left: 1px solid #eaeaea;
        }

        .rightt .tit {
            font-size: 1.3vw;
            font-weight: 700;
            padding: 0 1.3vw;
            margin: 1.3vw 0;
            border-left: 3px solid yellowgreen;
        }

        /* item */
        .k {
            width: 100%;
            height: 11.7vw;
            background: #fff;
            margin-bottom: 0.65vw;
            position: relative;
        }

        .k img {
            float: left;
            margin: 1.3vw 2.6vw;
            width: 11.583vw;
            height: 9.266vw;
        }

        .k .kright h4 {
            font-size: 1.44843vw;
            padding: 2.6vw 1.3vw 1.3vw 1.3vw;
        }

        .k .kright .price {
            font-size: 1.3vw;
        }
        .k .kright .number {
            padding: 1.3vw;
        }

        .k .kright .price .price2 {
            font-size: 1vw;
            margin-left: 2vw;
        }

        .k .kkright {
            position: absolute;
            top: 50%;
            right: 10%;
            padding: 1.3vw;
            border-radius: 0.65vw;
            background: #eaeaea;
            transform: translate(0, -50%);
        }
    }

    @media screen and (max-width: 430px){
        .pc {
            display: none;
        }

        .content {
            position: absolute;
            right: 0;
            top: 54.3vw;
            bottom: 15vw;
            left: 25.62vw;
            z-index: -9;
            overflow: hidden;
        }
        .text .leftt {
            /* display: inline-block; */
            width: 25%;
            float: left;
            height: 108vw;
        }

        .text .leftitem {
            width: 100%;
            height: 12.5vw;
            font-size: 4.68vw;
            border-bottom: 1px solid #fff;
            line-height: 12.5vw;
            text-align: center;

            /* 多出显示省略号 */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .rightt {
            display: inline-block;
            width: 100%;
        }

        .rightt .tit {
            padding: 0 3.125vw;
            margin: 3.125vw 0;
            border-left: 2px solid rgb(116, 146, 57);
        }

        .rightt .k {
            height: 34.3vw;
            margin-bottom: 3.125vw;
            background-color: #eaeaea;
            /* background-color: #f00; */
            position: relative;
        }

        .rightt .k img {
            float: left;
            width: 28.1vw;
            height: 28.1vw;
            margin: 3.125vw;
        }

        .rightt h4 {
            font-size: 4.68vw;
           padding-top: 1.56vw;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .rightt .price {
            margin: 3.125vw;
            font-size: 4.375vw;
        }

        .kright .price2 {
            display: block;
        }

        .rightt .number {
            font-size: 4.375vw;
            margin: 3.125vw;
        }

        .rightt .kkright {
            position: absolute;
            right: 0;
            top: 70%;
            transform: translate(0, -50%);
            font-size: 3.125vw;
        }

        .rightt .kkright:hover {
            font-weight: 700;
        }
    }
</style>