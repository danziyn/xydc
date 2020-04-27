<template>
    <div id="goodlistitem">
        <div class="con">
            <shopbutton @btnnclick='btnclick' :isActive='item.check' />
            <img :src="item.item_img" alt="">
            <span class="tit">{{item.item_title}}</span>
            <span class="price">
                <span :class="{iscount: item.discount != undefined}">
                    单价:{{item.item_price}}
                </span>
                <span v-if="item.discount != undefined">折后{{item.item_price * Number('0.' + item.discount)}}元</span>
            </span>
            <span class="count">
                数量:{{item.count}}
                <button @click="btnclick1">+</button>
                <button @click="btnclick2">-</button>
            </span>
            <span class="out" @click="btnout(item.item_title)">移除</span>
        </div>
        <!-- {{item}} -->
    </div>
</template>

<script>
    import shopbutton from './shopbotton'
    export default {
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {

            }
        },
        components: {
            shopbutton
        },
        methods: {
            btnclick() {
                this.$forceUpdate()
                this.item.check = !this.item.check
            },
            btnclick1() {
                this.$forceUpdate()
                this.item.count += 1
            },
            btnclick2() {
                this.$forceUpdate()
                if(this.item.count == 1) {
                    this.$toast.show('最少选择一个哦', 1000)
                }else {
                    this.item.count -= 1
                }
            },
            btnout(item) {
                // console.log(item)
                this.$forceUpdate()
                this.$store.state.goodlist = this.$store.state.goodlist.filter(i => {
                    return i.item_title !=  item
                })
            }
        }
    }
</script>

<style  scoped>
    .iscount {
        text-decoration: line-through;
    }
    @media screen and (min-width: 430px){
        .con {
            height: 180px;
            line-height: 180px;
            position: relative;
            min-width: 1400px;
        }
        .con img {
            float: left;
            width: 140px;
            height: 140px;
            margin: 20px 80px;
        }

        .con .tit {
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            width: 380px;
        }

        .con .price {
            display: inline-block;
            font-size: 18px;
            width: 200px;
        }

        .con .count {
            margin-left: 50px;
        }

        .con .count button {
            width: 40px;
            height: 30px;
            margin-left: 20px;
        }

        .con .out {
            display: inline-block;
            width: 60px;
            height: 50px;
            line-height: 50px;
            border-radius: 15px;
            color: #fff;
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translate(0, -50%);
            text-align: center;
            background-color: #f00;
        }
    }

    @media screen and (max-width: 430px){
        .con {
            height: 110px;
            position: relative;
        }

        .con img {
            float: left;
            width: 90px;
            height: 90px;
            margin: 10px 10px 10px 20px;
        }

        .con .tit {
            display: inline-block;
            padding: 20px 10px 10px 10px;
            width: 200px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap
        }

        .con .price {
            font-size: 12px;
            margin-left: 130px;
            display: block;
        }

        .con .count {
            font-size: 12px;
            margin-left: 130px;
            padding-top: 12px;
            display: block;
        }
        .con .count button{
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-left: 10px;
        }

        .con .out {
            display: inline-block;
            position: absolute;
            bottom: 20px;
            right: 20px;
            padding: 5px;
            border-radius: 5px;
            background: #f00;
            color: #fff;
            font-size: 15px;
        }
    }
</style>