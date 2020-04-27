<template>
    <div  id="shopitem">
        <div class="pc">
            <div   class="rightt">
                <div v-for="(item, index) in rightdis" :key="index">
                    <!-- 遍历每个种类的标题 -->
                    <div class="tit">{{item.name}}</div>
                    <div v-for="(item, index) in item.item1" :key="index">
                        <rightitemitem :item='item' @btndelbtn='btndelbtn(item)' :rightdisshopid='rightdisshopid' />
                    </div>
                </div>
            </div>
        </div>
        <div class="phone">

            <scroll class="content">
                <div   class="rightt">
                    <div v-for="(item, index) in rightdis" :key="index">
                        <div class="tit">{{item.name}}</div>
                        <div v-for="(item, index) in item.item1" :key="index">
                            <rightitemitem :item='item' @btndelbtn='btndelbtn(item)' :rightdisshopid='rightdisshopid' />
                            
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
    import scroll from 'components/common/scroll/scroll'

    import rightitemitem from './rightitemitem'
    export default {
        data() {
            return {
                item: {},
            }
        },
        mounted() {
            // console.log(this.shop_id._id)
            // this.$ajax.get('/common/all').then(res => {
            //     // console.log(res.data)
            //     this.item = res.data.filter(item => {
            //         return item.data.shop_id == this.shop_id._id
            //     })
            // })
        },
        props: {
            rightdis: {
                type: Object,
                default() {
                    return {}
                }
            }
            ,
            rightdisshopid: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            scroll,
            rightitemitem
        },
        methods: {
            btndelbtn(item) {
                // console.log('我被点击了', item , this.rightdis, shop_id)
                var data = {}
                data.item = item
                data.shopmess = this.rightdisshopid
                console.log(data)
                this.$ajax.post('/data/delitem', data).then(res => {
                    console.log(res.data)
                    this.$toast.show('移除成功', 2000)
                })
                
                setTimeout(() => {
                    this.$router.push('/individual')
                }, 2300)
            },
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
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
        .rightt {
            display: inline-block;
            width: 100%;
        }

        .phone .content {
            position: absolute;
            right: 0;
            bottom: 15vw;
            top: 48vw;
            left: 26vw;
            overflow: hidden;
        }

        .rightt .tit {
            padding: 0 3.125vw;
            margin: 3.125vw 0;
            border-left: 2px solid rgb(116, 146, 57);
        }

        /* .rightt .k {
            height: 34.3vw;
            margin-bottom: 3.125vw;
            background-color: #eaeaea;
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
        }

        .rightt .price {
            margin: 3.125vw;
            font-size: 4.375vw;
        }

        .rightt .number {
            font-size: 4.375vw;
            margin: 3.125vw;
        } */

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