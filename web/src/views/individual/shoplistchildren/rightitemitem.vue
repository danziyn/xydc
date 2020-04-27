<template>
    <div id="rightitemitem">
        <div class="k">
            <div class="kleft">
                <img  :src="item.item_img" alt="">
            </div>
            <div class="kright">
                <h4>{{item.item_title}}</h4>
                <div class="price">价格: {{item.item_price}}元</div>
                <div class="number">销量: {{item.item_number}}</div>
            </div>
            <!-- 添加活动 -->
            <button class="adddiscount" v-show="item.discount == undefined"  @click="discountt" v-if="discount">添加活动</button>
            <button @click="discountt" v-else>返回</button>
            <button @click="btndelbtn(item)" class="btndel" >移除</button>
            <button  v-if="ischange" @click="changebtn" class="btndel1" >修改</button>
            <button  v-else @click="changebtn" class="btndel1" >返回</button>
        </div>
        <div class="listcount" v-show="item.discount != undefined">
            <div> 折扣数:{{item.discount}}</div>
            <div class="shopcontent"> 原因:{{item.shopcontent}}</div>
        </div>
        <div class="changek" v-show="!ischange" >
            <li>
                <span>标题:</span> <input type="text" ref="item_title">
            </li>
            <li> 
                <span>图片:</span> 
                 
                <input type="file" @change="tirggerFile($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  >
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
            <button @click="addshopmess">提交</button>
        </div>
        <div class="discount" v-show="!discount">
            <h3>{{item.item_title}}</h3>
            <li><span>详情解释:</span><input ref="item_content" type="text" name="" id=""></li>
            <li><span>折扣:</span><input ref="item_discount" type="text" name="" id="">折</li>
            <button @click="btnsubmit">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ischange: true,
                newlistitemimg: '',
                discount: true,
            }
        },
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            },
            rightdisshopid: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            btndelbtn(item) {
                this.$emit('btndelbtn', item)
            },
            changebtn() {
                console.log('我被点击了- - ')
                this.ischange = !this.ischange
            },
            // 处理图片
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
            // 修改商品的内容
            addshopmess() {
                var data = {}
                data.item_title = this.$refs.item_title.value
                data.item_img = this.newlistitemimg
                data.item_price = this.$refs.item_price.value
                data.item_number = this.$refs.item_number.value
                data.item_desc = this.$refs.item_desc.value

                data.item = this.item
                data.rightdis = this.rightdisshopid
                console.log(data)
                if(data.item_title == '' || data.item_img == '' || data.item_price == '' || data.item_number == '') {
                    this.$toast.show('请填写基本信息', 2000)
                }else { 
                    this.$ajax.post('/data/upgooditem', data).then(res => {
                        console.log(res)
                        this.$toast.show(res.data, 2000)
                    })
                    setTimeout(() => {
                        this.$router.push('/individual')
                    }, 2300)
                }
               
            },
            discountt() {
                this.discount = !this.discount
            },
            btnsubmit() {
                var data = {}
                data.item = this.item
                data.content = this.$refs.item_content.value
                data.discount = this.$refs.item_discount.value
                data.shopitem = this.rightdisshopid
                console.log(this.rightdisshopid)
                var a =  /^((0\.[1-9]{1})|(([1-9]{1})(\.\d{1})?))$/
                if(a.test(this.$refs.item_discount.value)) {
                    this.$ajax.post('/data/adddiscount', data).then(res => {
                        // console.log(res.data)
                        var changeid = {}
                        changeid.old_id = res.data.old
                        changeid.new_id = res.data.new
                        this.$ajax.post('/common/upcommid', changeid).then(res => {
                            console.log(res.data)
                            this.$toast.show('添加活动成功', 2000)
                        })
                    })
                }else {
                    this.$toast.show('请输入0.1~9.9的折扣数字', 1000)
                }

                
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
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
            font-size: 25px;
            padding: 2.6vw 1.3vw 1.3vw 1.3vw;
        }

        .k .kright .price {
            font-size: 1.3vw;
        }
        .k .kright .number {
            padding: 1.3vw;
        }

        .k button {
            float: right;
            width: 7.72200vw;
            height: 2.31615vw;
            transform: translate(0, -250%);
            margin: 0 1.73711vw;
        }

        .changek {
            font-size: 1.17302vw;
            padding: 1.17302vw;
            background-color: #fff;
            margin-bottom: 0.58651vw;
        }

        .changek li, .discount li {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-bottom: 0.58651vw;
        }

        .changek li span {
            margin-right: 2.34604vw;
        }

        .discount {
            background-color: #fff;
            padding-bottom: 0.57937vw;
            margin-bottom: 0.57937vw;
        }

        .discount h3 {
            padding: 1.44843vw ;
        }

        .discount li span {
            display: inline-block;
            width:4.63499vw;
            margin: 0 2.34604vw;
        }

        .changek input, .discount input {
            width: 30%;
        }

        .discount button {
            width: 4.63499vw;
            height: 2.31749vw;
            margin: 1.15874vw 2.31749vw;
        }

        .listcount {
            margin-bottom: 0.57937vw;
            padding: 1.15874vw 4.63499vw;
            font-size: 1.15874vw;
            background-color: #fff;
        }
    }

    @media screen and (max-width: 430px) {
        .rightt .k {
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
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
        }

        .rightt .price {
            margin: 3.125vw;
            font-size: 4.375vw;
        }

        .rightt .number {
            font-size: 4.375vw;
            margin: 3.125vw;
        }

        .rightt  .k .btndel {
            float: right;
            transform: translate(-50%, -130%);
        }

        .rightt  .k .btndel1 {
            float: right;
            transform: translate(50%, -5%);
        }   

        .changek {
            padding: 1.5625vw;
            background-color: #f0f0f0;
            margin-bottom: 1.5625vw;
        }

        .changek li, .discount li {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-bottom: 1.5625vw;
        }

        .changek input{
            width: 70%;
        }

        .adddiscount {
            position: absolute;
            right: 19.375vw;
            bottom: 1.25vw;
        }

        .discount input {
            width: 65%;
        }

        .discount li {
            margin: 1.5625vw 0;
        }

        .discount span {
            display: inline-block;
            /* width: 23.75vw; */
        }

        .shopcontent {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .listcount {
            padding: 1.5625vw 6.25vw;
            background-color: #eaeaea;
            margin-bottom: 4.6875vw;
        }
    }
</style>