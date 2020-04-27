<template>
    <div id="price" class="clear-fix">
        <span class="jxsr" @click="btnfrom">提交订单</span>
        <display  v-show="act" :typenumber='typenumber()' :price='price()' @backup='backup' @backuout='backuout'/>
    </div>
</template>

<script>
    import shopbutton from './shopbotton'
    import display from './display'

    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                act: false
            }
        },
        components: {
            shopbutton,
            display
        },
        computed: {
            ...mapState(['goodlist']),
        },
        methods: {
            btnfrom() {
                // console.log('弹出结算单')
                this.act = true
            },
            backup() {
                // console.log('退出')
                this.act = false
            },
            typenumber() {
                return this.$store.state.goodlist.filter(item => {
                    return item.check
                }).length
            },
            price() {
                // console.log(this.$store.state.goodlist)
                return  this.$store.state.goodlist.filter(item => {
                    // console.log(item)
                    return item.check
                }).reduce((pric1e, item) => {
                    if(item.discount == undefined) {
                        return pric1e + item.item_price * item.count
                    }else {
                        return pric1e + (item.item_price * Number('0.' + item.discount)) * item.count
                    }
                }, 0)
            },
            backuout() {
                if(this.$store.state.user.tel == null) {
                    this.$toast.show('请先登录在进行购买', 2000)
                    setTimeout(() => {
                        this.$router.push('/profile/login')
                    }, 2200)
                }else {
                    if(this.typenumber() == 0) {
                        this.$toast.show('请先添加或者选择食品', 2000)
                        setTimeout(() => {
                            this.act = false
                        }, 2300)
                    }else {
                        this.$toast.show('结算成功', 2000)
                        setTimeout(() => {
                            this.act = false
                        }, 2300)

                        let userolder = {}
                        userolder.tel = this.$store.state.user.tel 
                        userolder.listcopy = []
                        userolder.listcopy = [...this.goodlist]
                        let time1 = new Date()
                        userolder.time = time1.getMonth() + 1 + '/' + time1.getDate() + ' ' + time1.getHours() + '.' +  time1.getMinutes()
                        // userolder.name = this.$store.state.user.name
                        // console.log(userolder)
                        // userolder.shop_id = 
                        // let listcopy = [...this.goodlist]
                        // console.log(userolder)
                        // 用户模块添加相应自己的订单

                        // 调试
                        // console.log('测试', userolder)


                        this.$ajax.post('/users/addolder', userolder).then(res => {
                            this.$toast.show(res.data, 2000)
                        })
                        setTimeout(() => {
                            this.$store.state.goodlist = []
                        }, 2200)
                    }
                }
            }
        }
         
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        #price {
            position: relative;
        }

        .jxsr {
            position: absolute;
            top: 0;
            right: 15%;
            width: 9.26vw;
            height: 4.63vw;
            line-height: 4.63vw;
            text-align: center;
            border-radius: 1.54vw;
            color: #fff;
            background-color: #f00;
            /* bottom: 7.72vw;
            right: 20%; */
        }

        
}

    @media screen and (max-width: 430px){   
        #price {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 15vw;
            height: 11.428vw;
            line-height: 11.428vw;
            background-color: #eaeaea;
        }

        .jxsr {
            position: absolute;
            right: 0;
            display: inline-block;
            width: 22.85vw;
            height: 100%;
            border-radius: 2.85vw;
            color: #fff;
            text-align: center;
            background: #f00;
        }

        
    }  
</style>