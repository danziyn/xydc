<template>
    <div id="shoptypeitem">
            <fieldset>
                <legend>{{type}}分类商品</legend>
                <div class="content" v-for="(item, index) in goodlisttt" :key="index">
                    <!-- {{item}} -->
                        <div class="title">商品标题:{{item.item_title}}</div>
                        <img :src="item.item_img" alt="">
                        <div class="price">商品价格:{{item.item_price}}</div>
                </div> 
            </fieldset>
         
        <fieldset>
            <legend>商品详情</legend>
            <li>
                <span>标题:</span> <input type="text" ref="item_title">
            </li>
            <li> 
                <span>图片:</span> 
                  
                <input type="file" ref="imgurl" @change="tirggerFile($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  >
            </li>
            <li>
                <span>价格:</span> <input type="text" ref="item_price">
            </li>
            <li>
                <span>销量:</span> <input type="text" ref="item_number">
            </li>
            <li>
                <span>描述:</span> <input type="text" ref="item_desc">
            </li>
            <button @click="addlist">增加商品</button>
            <button @click="addgoodlisttype">保存</button>
        </fieldset>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodlisttt: [],
                newlistitemimg: '',
            }
        },
        mounted() {
            this.goodlisttt = []
        },
        activated() {
            this.goodlisttt = []
            console.log('我进来了')
        },
        props: {
            type: {
                type: String,
                default: ''
            }
        },
        methods: {
            tirggerFile(event) {
                // console.log(event.target.files)
                let reader = new FileReader()
                // console.log(file.files)
                reader.readAsDataURL(event.target.files[0])
                // console.log(file.files[0])
                reader.onload = () => {
                    // console.log(reader.result)
                    this.newlistitemimg = reader.result
                    // console.log('commimg', this.commimg)
                }
                // console.log(this.commimg)
            },
            addlist() {
                // 添加商品
                var list = {}
                list.item_title = this.$refs.item_title.value
                list.item_img = this.newlistitemimg
                list.item_price = this.$refs.item_price.value
                list.item_number = this.$refs.item_number.value
                list.item_desc = this.$refs.item_desc.value
                if(list.item_title == '' || list.item_img == '' || list.item_price == '' || list.item_number == '' ) {
                    this.$toast.show('请填写基本信息', 2000)
                }else {
                    this.goodlisttt.push(list)
                    this.$refs.item_title.value = ''
                    this.$refs.item_price.value = ''
                    this.$refs.item_number.value = ''
                    this.$refs.item_desc.value = ''
                    this.$refs.imgurl.value = ''
                }
            },
            addgoodlisttype() {
                console.log('11111')
                this.$emit('addgoodlisttype', this.goodlisttt )
            }
        },
        watch:{
            type: {
        　　　　immediate: true,
        　　　　handler: function(newVal) {
        　　　　　　this.goodlisttt = []
        　　　　}
        　　}
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    @media screen and (min-width: 430px) {
        #shoptypeitem fieldset {
            width: 100%;
            margin: 1.54440vw;
            font-size: 1.54440vw;
            /* padding: 0 0 0 4.0625vw; */
        }

        #shoptypeitem h3 {
            margin: 1.15874vw;
        }

        #shoptypeitem li {
            /* padding: 1.5625vw 0; */
            font-size: 1.4vw;
            margin: 1.0vw;
        }

        fieldset button {
            margin: 0.57937vw 1.15874vw;
        }

        #shoptypeitem .content {
            position: relative;
            height: 8.69061vw;
            background-color: #eaeaea;
            margin-bottom: 5px;
            /* border: 1px solid red; */
        }

        #shoptypeitem .content img {
            /* float: left; */
            height: 5.79374vw;
            width: 5.79374vw;
            /* text-align: ; */
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(0 , -50%);
        }

        #shoptypeitem .content div {
            /* margin-left: 350px; */
            display: inline-block;
            line-height: 8.69061vw;
        }

        #shoptypeitem .content .title {
            margin: 0 5.79374vw 0 20.27809vw;
        }
    }

    @media screen and (max-width: 430px) {
        /* #shoptypeitem {
            margin-bottom: 15vw;
        } */
        #shoptypeitem fieldset {
            width: 100%;
            padding: 0 0 0 4.0625vw;
        }

        #shoptypeitem li {
            padding: 1.5625vw 0;
        }

        fieldset button {
            margin: 1.5625vw 3.125vw;
        }

        .content {
            position: relative;
            display: block;
            height: 31.25vw;
            /* border: 1px solid red; */
            background-color: #eaeaea;
            margin: 3.125vw 0;
        }

        .content img {
            width: 25vw;
            height: 25vw;
            position: absolute;
            top: 50%;
            left: 5%;
            transform: translate(0 , -50%);
        }

        .content .title, .content .price {
            /* display: inline-block; */
            line-height: 15.625vw;
            margin-left: 39.0625vw;
        }
    }
</style>