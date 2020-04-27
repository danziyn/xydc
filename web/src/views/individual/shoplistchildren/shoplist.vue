<template>
    <div id="shoplist">
        <div class="pc">
            <div class="tit clear-fix">
                <h3>商家信息</h3>
                <li class="basemess"><span>电话:</span> {{this.$store.state.user.tel}} </li>
                <h3 class="h3">店铺与信息</h3>
                <button v-show="!listtocomm" class="query" @click="querycomm">返回</button>
                <button v-show="listtocomm" class="query" @click="querycomm">查看所有评论</button>
                <button v-show="addshopitem" class="addshop" @click="addshop">添加商品</button>
                <button v-show="!addshopitem" class="addshop" @click="addshop">返回</button>
                <button class="addshopstore" @click="addshopstore" v-if="store">添加商铺</button>
                <button class="addshopstore" @click="addshopstore" v-else>返回</button>
            </div>
            <!-- {{store}} -->
            <div class="nodatadiv" v-if="rightdis.length == 0">
                <h2>暂无店铺</h2>
            </div>
            <div v-else class="lengthcontent">
                <div class="content" v-if="store">
                    <div class="leftq">
                        <li v-for="(item, index) in goodlist" :key="index">
                            <leftitem :item='item' :class="{active: index == isactive}" @click.native="btnclick(item, index)" />
                        </li>
                    </div>
                    <div class="contentright" v-show="addshopitem">
                        <div v-if="listtocomm" class="rightq">
                            <rightitem :rightdis='rightdis' :rightdisshopid='rightdisshopid' /> 
                        </div>
                        <div v-if="!listtocomm" class="rightqcomm">
                            <rightcomm :shop_id='copy_listid' />
                        </div> 
                    </div> 
                    <div class="contentrightadd" v-show="!addshopitem">
                        <span class="addlisttitle" :class="{isactivetitle: index == isactivetitle}" v-for="(item, index) in rightdis" @click="titleactive(index)" :key="index">
                            {{item.name}}
                        </span>
                        <!-- <span>其他</span>    -->
                        <fieldset>
                            <legend>填写信息</legend>
                            <li> <span>名字:</span> <input ref="pc_item_title" type="text" name=""  value=""></li>
                            <li> 
                                <span>图片:</span> 
                                <input type="file" @change="tirggerFilee($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
                            </li>
                            <li> <span>价格:</span> <input ref="pc_item_price" type="number" name=""  value=""></li>
                            <li> <span>描述:</span> <input ref="pc_item_desc" type="text" name=""  value=""></li>
                            <button @click="pc_addshoplistitem">提交</button>
                        </fieldset>
                    </div>
                </div>
                <div class="additem" v-else>
                    <h4>填写基本信息</h4>
                    <fieldset>
                        <legend>基本信息</legend>
                        <li> <span>商铺名字:</span> <input ref="head_titlep" type="text" name="" id=""> </li>
                        <li class="itemtyep"> 
                            <span>商铺类型:</span>
                            
                            <label for="five">
                                <input type="radio" v-model="typeshop" value='near' name="" id="five">周边美食
                            </label>
                            <label for="six">
                                <input type="radio" v-model="typeshop" value='meng' name="" id="six">梦华苑
                            </label>
                            <label for="seven">
                                <input type="radio" v-model="typeshop" value='xue' name="" id="seven">学致苑
                            </label>
                            <label for="eight">
                                <input type="radio" v-model="typeshop" value='ju' name="" id="eight">学聚苑
                            </label>
                            <label for="nine">
                                <input type="radio" v-model="typeshop" value='tian' name="" id="nine">甜点奶茶
                            </label>
                            <label for="ten">
                                <input type="radio" v-model="typeshop" value='conv' name="" id="ten">快餐炒饭
                            </label>
                        </li>
                        <li> 
                            <span>商铺图片</span> 
                            <input type="file" @change="tirggerFile($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  >

                        </li>
                        <li class="item_desc"> 
                            <span>商铺描述</span> 
                            <label for="one">
                                起送<input type="number" ref="payp" name="" id="one">元
                            </label>
                            <label for="two">
                                配送<input type="number" ref="songp" name="" id="two">起
                            </label>
                        </li>
                        <li> <span>商铺地址</span> <input ref="shopaddressp" type="text" name="" id=""> </li>
                        <li> <span>营业时间</span> <input ref="shoptimep" type="text" name="" id=""> </li>
                        <li class="item_methods"> 
                            <span>营业方式</span> 
                            <label for="three">
                                <input type="radio" v-model="shopmethods" value="由商家提供配送服务" name="" id="three">由商家提供配送服务
                            </label>
                            <label for="four">
                                <input type="radio" v-model="shopmethods" value='由平台提供配送服务' name="" id="four">由平台提供配送服务
                            </label>
                        </li>
                    </fieldset>
                    <fieldset>
                        <legend>产品分类</legend>
                        <li class="item_shoptype"> 
                            <span class="spantitle">产品类别</span>
                            <!-- {{shoptype}} -->
                            <span class="typelist" v-for="(item, index) in pc_shoptype" :key="index" @click="typeclick(index)" :class="{isactive : index == typeactive}">{{item}}</span>
                            <input type="text" ref="pc_shoptype" name="" id="" >
                            <button class="addtype" @click="pc_addshoptype">添加新类</button>
                        </li>
                    </fieldset>
                    <shoptypeitem :type='pc_shoptype[typeactive]' @addgoodlisttype='addgoodlisttype($event)'/>
                    <button class="buttonbootn" @click="addfinalshopp">提交</button>
                </div>
            </div>
        </div>
        <div class="phone">
            <div class="tit clear-fix">
                <h3>商家信息</h3>
                <li class="basemess"><span>电话:</span> {{this.$store.state.user.tel}} </li>
                <h3 class="h3">店铺与信息</h3>
                <button v-show="!listtocomm" class="query" @click="querycomm">返回</button>
                <button v-show="listtocomm" class="query" @click="querycomm">查看所有评论</button>
                <button v-show="addshopitem" class="addshop" @click="addshop">添加商品</button>
                <button v-show="!addshopitem" class="addshop" @click="addshop">返回</button>
                <button class="addshopstore" @click="addshopstore" v-if="store">添加商铺</button>
                <button class="addshopstore" @click="addshopstore" v-else>返回</button>
            </div>
            <div class="nodatadiv" v-if="rightdis.length == 0">
                <h2>暂无店铺</h2>
            </div>
            <div v-else>
                <div class="content" v-if="store">
                    <div class="leftq">
                        <li v-for="(item, index) in goodlist" :key="index">
                            <leftitem :item='item' :class="{active: index == isactive}" @click.native="btnclick(item, index)" />
                        </li>
                    </div>
                    <div class="contentright" v-show="addshopitem">
                        <div v-if="listtocomm" class="rightq">
                            <rightitem :rightdis='rightdis' :rightdisshopid='rightdisshopid' /> 
                        </div>
                        <div v-if="!listtocomm" class="rightqcomm">
                            <rightcomm :shop_id='copy_listid' />
                        </div> 
                    </div> 
                    <div class="contentrightadd" v-show="!addshopitem">
                        <span class="addlisttitle" :class="{isactivetitle: index == isactivetitle}" v-for="(item, index) in rightdis" @click="titleactive(index)" :key="index">
                            {{item.name}}
                        </span>
                        <!-- <span>其他</span>    -->
                        <fieldset>
                            <legend>填写信息</legend>
                            <li> <span>名字:</span> <input ref="item_title" type="text" name=""  value=""></li>
                            <li> 
                                <span>图片:</span> 
                                <input type="file" @change="tirggerFilee($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
                            </li>
                            <li> <span>价格:</span> <input ref="item_price" type="number" name=""  value=""></li>
                            <li> <span>描述:</span> <input ref="item_desc" type="text" name=""  value=""></li>
                            <button @click="addshoplistitem">提交</button>
                        </fieldset>
                    </div>
                </div>
                <div class="additem" v-else>
                    <scroll class="tel_scroll">
                        <h4>填写基本信息</h4>
                        <fieldset>
                            <legend>基本信息</legend>
                            <li> <span>商铺名字:</span> <input ref="head_title" type="text" name="" id=""> </li>
                            <li class="itemtyep"> 
                                <span>商铺类型:</span>
                                
                                <label for="five">
                                    <input type="radio" v-model="typeshop" value='near' name="" id="five">周边美食
                                </label>
                                <label for="six">
                                    <input type="radio" v-model="typeshop" value='meng' name="" id="six">梦华苑
                                </label>
                                <label for="seven">
                                    <input type="radio" v-model="typeshop" value='xue' name="" id="seven">学致苑
                                </label>
                                <label for="eight">
                                    <input type="radio" v-model="typeshop" value='ju' name="" id="eight">学聚苑
                                </label>
                                <label for="nine">
                                    <input type="radio" v-model="typeshop" value='tian' name="" id="nine">甜点奶茶
                                </label>
                                <label for="ten">
                                    <input type="radio" v-model="typeshop" value='conv' name="" id="ten">快餐炒饭
                                </label>
                            </li>
                            <li> 
                                <span>商铺图片</span> 
                                <input type="file" @change="tirggerFile($event)" id="imgurl" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"  >

                            </li>
                            <li class="item_desc"> 
                                <span>商铺描述</span> 
                                <label for="one">
                                    起送<input type="number" ref="pay" name="" id="one">元
                                </label>
                                <label for="two">
                                    配送<input type="number" ref="song" name="" id="two">起
                                </label>
                            </li>
                            <li> <span>商铺地址</span> <input ref="shopaddress" type="text" name="" id=""> </li>
                            <li> <span>营业时间</span> <input ref="shoptime" type="text" name="" id=""> </li>
                            <li class="item_methods"> 
                                <span>营业方式</span> 
                                <label for="three">
                                    <input type="radio" v-model="shopmethods" value="由商家提供配送服务" name="" id="three">由商家提供配送服务
                                </label>
                                <label for="four">
                                    <input type="radio" v-model="shopmethods" value='由平台提供配送服务' name="" id="four">由平台提供配送服务
                                </label>
                            </li>
                        </fieldset>
                        <fieldset>
                            <legend>产品分类</legend>
                            <li class="item_shoptype"> 
                                <span class="spantitle">产品类别</span>
                                <span class="typelist" v-for="(item, index) in shoptype" :key="index" @click="typeclick(index)" :class="{isactive : index == typeactive}">{{item}}</span>
                                <input type="text" ref="shoptype" name="" id="" >
                                <button @click="addshoptype">添加新类</button>
                            </li>
                        </fieldset>
                        <shoptypeitem :type='shoptype[typeactive]' @addgoodlisttype='addgoodlisttype($event)'/>
                        <button class="finalshopstore" @click="addfinalshop">提交</button>
                    </scroll>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import leftitem from './leftitem'
    import rightitem from './rightitem'
    import rightcomm from './rightcomm'

    import shoptypeitem from './shoptypeitem'
    import scroll from 'components/common/scroll/scroll'
    export default {
        data() {
            return {
                goodlist: [],
                rightdis: {},
                isactive: 0,
                isactivetitle: 'classificationone',
                listtocomm: true,
                copy_listid: '',
                addshopitem: true,
                newshopimg: '',
                newlistitemimg: '',
                // 店铺分类
                typeshop: '',
                // 营业分类
                shopmethods: '',

                rightdisshopid: {},
                store: true,
                shoptype: ['其他'],
                pc_shoptype: ['其他'],
                toshoptype: ['classificationone', 'classificationtwo', 'classificationonethree', 'classificationfore', 'classificationfive', 'classificationsix'],
                // 当前在那个类别
                typeactive: 0,
                typelist0: [],
                typelist1: [],
                typelist2: [],
                typelist3: [],
                typelist4: [],
                typelist5: [],
            }
        },
        mounted() {
            this.$ajax.get('/data/redata').then(res => {
                this.goodlist = res.data.filter(item => {
                    return item.tel == this.$store.state.user.tel
                })
                console.log(this.goodlist)
                if(this.goodlist.length == 0) {
                    this.rightdis = []
                }else {
                    this.rightdis = this.goodlist[0][this.goodlist[0].type].goodlist
                    this.rightdisshopid = this.goodlist[0]
                }
                // console.log(this.goodlist)
            })
        },
        methods: {
            btnclick(item, index) {
                this.rightdis = item[item.type].goodlist
                this.rightdisshopid = item
                this.isactive = index

                this.listtocomm = true
            },
            addshop() { 
                // console.log('我要添加商品')
                this.addshopitem = !this.addshopitem
            },
            querycomm() {
                this.listtocomm = !this.listtocomm
                this.copy_listid = this.goodlist[this.isactive]._id
            },
            // 处理item图片
            tirggerFilee(event) {
                // var img = document.querySelector('#imgurl')
                let reader = new FileReader()
                // console.log(img.files)
                reader.readAsDataURL(event.target.files[0])
                // console.log(file.files[0])
                reader.onload = () => {
                    // console.log(reader.result)
                    this.newlistitemimg = reader.result
                }
            },
            // 处理商铺图片
            tirggerFile(event) {
                let reader = new FileReader()
                // console.log(img.files)
                reader.readAsDataURL(event.target.files[0])
                // console.log(file.files[0])
                reader.onload = () => {
                    // console.log(reader.result)
                    this.newshopimg = reader.result
                }
            },
            addshoplistitem() {
                var data = {}
                data._id = this.goodlist[this.isactive]._id
                data.name = this.isactivetitle
                data.type = this.goodlist[this.isactive].type
                data.item_title = this.$refs.item_title.value
                data.item_img = this.newlistitemimg
                data.item_price = this.$refs.item_price.value
                data.item_desc = this.$refs.item_desc.value
                data.item_number = 0
                // console.log(this.$refs.item_title, data)
                var old_id = data._id
                if(data.item_title == '' || data.item_img == '' || data.item_price == '') {
                    this.$toast.show('请填写基本信息', 1000)
                }else {
                    console.log(data)
                    this.$ajax.post('/data/additem', data).then(res => {
                        // console.log(data._id, res.data._id)
                        this.$toast.show('添加成功', 2000)

                        var listid = { old_id: data._id, 
                                    new_id :res.data._id
                                    }
                        // var listid = {
                        //     old_id: '5e6348b1382303ad7483a452',
                        //     new_id: '5e6348b1382303ad74123456'
                        // }
                        this.$ajax.post('/common/upcommid', listid).then(res => {

                        })
                    })
                }
                setTimeout(() => {
                    this.$router.push('/individual')
                }, 2300)
            },
            pc_addshoplistitem() {
                var data = {}
                data._id = this.goodlist[this.isactive]._id
                data.name = this.isactivetitle
                data.type = this.goodlist[this.isactive].type
                data.item_title = this.$refs.pc_item_title.value
                data.item_img = this.newlistitemimg
                data.item_price = this.$refs.pc_item_price.value
                data.item_desc = this.$refs.pc_item_desc.value
                data.item_number = 0
                // console.log( data)
                // var old_id = data._id
                if(data.item_title == '' || data.item_img == '' || data.item_price == '') {
                    this.$toast.show('请填写基本信息', 1000)
                }else {
                    // console.log(data)
                    this.$ajax.post('/data/additem', data).then(res => {
                        // console.log(data._id, res.data._id)
                        this.$toast.show('添加成功', 2000)

                        var listid = { old_id: data._id, 
                                    new_id :res.data._id
                                    }
                        // var listid = {
                        //     old_id: '5e6348b1382303ad7483a452',
                        //     new_id: '5e6348b1382303ad74123456'
                        // }
                        this.$ajax.post('/common/upcommid', listid).then(res => {

                        })
                    })
                }
                setTimeout(() => {
                    this.$router.push('/individual')
                }, 2300)
            },
            titleactive(index) {
                this.isactivetitle = index
                console.log(index, this.isactivetitle)
            },
            addshopstore() {
                this.store = !this.store
            },
            addshoptype() {
                var item = this.$refs.shoptype.value
                // console.log(this.$refs.shoptype.value)
                this.shoptype.push(item)
            },
            pc_addshoptype() {
                var item = this.$refs.pc_shoptype.value
                // console.log(this.$refs.pc_shoptype.value)
                this.pc_shoptype.push(item)
            },
            typeclick(index) {
                this.typeactive = index
            },
            addgoodlisttype(goodlisttt) {
                // console.log(goodlisttt)
                if(this.typeactive == 0) {
                    this.typelist0 = goodlisttt
                }else if(this.typeactive == 0) {
                    this.typelist0 = goodlisttt
                }else if(this.typeactive == 1) {
                    this.typelist1 = goodlisttt
                }else if(this.typeactive == 2) {
                    this.typelist2 = goodlisttt
                }else if(this.typeactive == 3) {
                    this.typelist3 = goodlisttt
                }else if(this.typeactive == 4) {
                    this.typelist4 = goodlisttt
                }else {
                    this.typelist5 = goodlisttt
                }

                // console.log(this.typelist0, this.typelist1, this.typelist2, this.typelist3, this.typelist4, this.typelist5)
            },
            // 搜集所有店铺信息
            addfinalshop() {
                var newshop = {}
                newshop.type = this.typeshop
                newshop.tel = this.$store.state.user.tel
                newshop[this.typeshop] = {}
                newshop[this.typeshop].head_title = this.$refs.head_title.value
                newshop[this.typeshop].head_logo = this.newshopimg
                newshop[this.typeshop].head_desc = []
                newshop[this.typeshop].head_desc.push(`起送${this.$refs.pay.value}元`)
                newshop[this.typeshop].head_desc.push(`配送${this.$refs.song.value}起`)
                newshop[this.typeshop].meggages = {}
                newshop[this.typeshop].meggages.address = this.$refs.shopaddress.value
                newshop[this.typeshop].meggages.time = this.$refs.shoptime.value
                newshop[this.typeshop].meggages.methods = this.shopmethods
                newshop[this.typeshop].userevaluation = []
                newshop[this.typeshop].goodlist = {}
                for(let i in this.shoptype) {
                    newshop[this.typeshop].goodlist[this.toshoptype[i]] = {}
                    newshop[this.typeshop].goodlist[this.toshoptype[i]].name = this.shoptype[i]
                    newshop[this.typeshop].goodlist[this.toshoptype[i]].item1 = this[`typelist${i}`]
                }
                // newshop[this.typeshop].goodlist[]
                console.log(newshop)

                // 发送保存ajax
                this.$ajax.post('/data/addstore', newshop).then(res => {
                    this.$toast.show('添加商铺成功', 2000)
                })
            },
            addfinalshopp() {
                var newshop = {}
                newshop.type = this.typeshop
                newshop.tel = this.$store.state.user.tel
                newshop[this.typeshop] = {}
                newshop[this.typeshop].head_title = this.$refs.head_titlep.value
                newshop[this.typeshop].head_logo = this.newshopimg
                newshop[this.typeshop].head_desc = []
                newshop[this.typeshop].head_desc.push(`起送${this.$refs.payp.value}元`)
                newshop[this.typeshop].head_desc.push(`配送${this.$refs.songp.value}起`)
                newshop[this.typeshop].meggages = {}
                newshop[this.typeshop].meggages.address = this.$refs.shopaddressp.value
                newshop[this.typeshop].meggages.time = this.$refs.shoptimep.value
                newshop[this.typeshop].meggages.methods = this.shopmethods
                newshop[this.typeshop].userevaluation = []
                newshop[this.typeshop].goodlist = {}
                for(let i in this.pc_shoptype) {
                    newshop[this.typeshop].goodlist[this.toshoptype[i]] = {}
                    newshop[this.typeshop].goodlist[this.toshoptype[i]].name = this.pc_shoptype[i]
                    newshop[this.typeshop].goodlist[this.toshoptype[i]].item1 = this[`typelist${i}`]
                }
                // newshop[this.typeshop].goodlist[]
                // console.log(newshop)

                // 发送保存ajax
                this.$ajax.post('/data/addstore', newshop).then(res => {
                    this.$toast.show('添加商铺成功', 2000)
                })
            }
        },
        components: {
            leftitem,
            rightitem,
            rightcomm,
            shoptypeitem,
            scroll
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .isactive {
        color: #eb4d4b;
    }
    @media screen and (min-width: 430px) {
        .phone {
            display: none;
            /* visibility: hidden; */
            
        }
        .leftq li {
            font-size: 1.93050vw;
            /* width: 25%; */
            height: 3.86100vw;
            line-height: 3.86100vw;
            /* border: 1px solid #bdc3c7; */
            text-align: center;
            margin-top: 2px;
        }

        h3 {
            padding:  1.93050vw;
            font-size: 1.93050vw;
        }

        .basemess {
            font-size: 1.54440vw;
        }

        .basemess span {
            display: inline-block;
            font-weight: 700;
            padding: 0 1.54440vw 1.54440vw 3.86100vw;
        }

        .h3 {
            padding: 1.93050vw;
        }


        .leftq li {
            display: inline-block;
            margin-left: 2.31660vw;
        }

        .active {
            border-bottom: 2px solid #f1c40f;
        }

        .tit {
            position: relative;
            border-bottom: 1px solid #fff;
        }

        .tit button {
            width: 11.58301vw;
            height: 4.63320vw;
        }

        .tit .query, .tit .addshop {
            float: left;
            margin: 0 1.54440vw;
        }

        .contentrightadd .addlisttitle {
            font-size: 1.54440vw;
            margin: 1.54440vw;
        }

        fieldset {
            font-size: 1.54440vw;
            margin: 1.54440vw;
        }

        fieldset li{
            font-size: 1.40vw;
            margin: 1.0vw;
        }

        fieldset li span {
            margin-right: 1.54440vw;
        }

        fieldset button {
            width: 4.63320vw;
            height: 2.31660vw;
            margin: 0 1.54440vw;
        }

        
        .isactivetitle {
            border: 1px solid orange !important;
        }

        .nodatadiv h2 {
            font-size: 2.02780vw;
            padding: 1.15874vw;
        }

        /* 添加商铺样式 */
        .additem h4 {
            font-size: 1.73812vw;
            margin: 1.15874vw;
        }

        .additem .buttonbootn {
            width: 5.79374vw;
            height: 2.89687vw;
            margin: 0 2.31749vw;
        }

        .additem .item_shoptype .addtype {
            width: 8.69061vw;
            /* height: 60px; */
        }
    }
    @media screen and (max-width: 430px) {
        .pc {
            display: none;
        }
        #shoplist {
            margin-top: 13vw;
        }

        .leftq li {
            font-size: 4.6875vw;
            /* width: 25%; */
            height: 15.625vw;
            line-height: 15.625vw;
            border: 1px solid #bdc3c7;
            text-align: center;
            margin-top: 2px;
        }

        h3 {
            padding:  3.125vw;
        }

        .basemess {
            padding: 3.125vw;
        }

        .basemess span {
            font-weight: 700;
        }

        .h3 {
            padding: 1.5625vw 3.125vw;
            border-bottom: 1px solid #fff;
        }

        .content .leftq {
            float: left;
            width: 25%;
            background-color: #f0f0f0;
        }

        .content .rightq {
            float: right;
            width: 74%;
            background-color: #f0f0f0;
        }

        .tit {
            position: relative;
        }

        .tit button {
            float: right;
            font-size: 3.75vw;
            width: 26.5625vw;
            height: 6.25vw;
        }
        .query {
            position: absolute;
            bottom: 4.6875vw;
            right: 0;
        }

        .addshop {
            position: absolute;
            bottom: 4.6875vw;
            right: 29.375vw;
        }

        .contentrightadd {
            float: right;
            width: 75%;
        }

        .contentrightadd li {
            margin: 3.125vw 0;
        }

        .contentrightadd input {
            width: 64.0625vw;
        }

        .contentrightadd button {
            width: 18.75vw;
            height: 9.375vw;
        }

        .contentrightadd .addlisttitle {
            display: inline-block;
            margin: 1.5625vw 3.125vw ;
            border: 1px solid #6b6b6b;
        }

        .isactivetitle {
            border: 1px solid orange !important;
        }

        .leftq {
            position: relative;
        }

        .addshopstore {
            position: absolute;
            right: 0;
            bottom: 15.625vw;
        }

        .nodatadiv h2 {
            /* font-size: 2.02780vw; */
            padding: 3.125vw;
        }

        /* 添加新商铺样式 */
        .additem fieldset {
            width: 100%;
            padding: 0 0 0 4.0625vw;
        }

        .tel_scroll {
            position: absolute;
        
            top: 50vw;
            left: 0;
            right: 0;
            bottom: 15vw;
            overflow: hidden;
        }

        .additem li {
            /* margin: 10px 0x; */
            padding: 1.5625vw 0;
        }

        .additem h4 {
            margin: 3.125vw;
        }
        
        .additem li span {
            margin-right: 1.5625vw;
            font-weight: 700;
        }

        .additem .itemtyep label {
            display: inline-block;
            width:31.25vw;
        }

        .additem .itemtyep span, .additem .item_desc span {
            display: block;
        }

        .additem .item_desc label {
            display: block;
        }

        .additem .item_desc label input {
            margin:  0 3.125vw;
        }

        .additem .item_methods label {
            display: block;
            margin-left:9.375vw;
        }

        .additem .item_shoptype .spantitle {
            display: block;
        }

        .additem .item_shoptype input {
            display: block;
        }

        .additem .item_shoptype .typelist {
            display: inline-block;
            text-align: center;
            /* padding: 5px; */
            margin: 2px;
            min-width: 15.625vw;
            border: 1px solid yellowgreen;
        }

        .additem .item_shoptype button {
            margin: 1.5625vw 0;
        }
        
        .additem .finalshopstore {
            width: 18.75vw;
            height: 9.375vw;
            margin: 3.125vw 20px;
        }


    }
</style>