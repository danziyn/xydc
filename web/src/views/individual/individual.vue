<template>
    <div id="individual">
        <div class="pc">
            <div class="w">
                <h2 v-if="user.nickname == 1">个人信息</h2>
                <h2 v-else>商家信息</h2>
                <div class="con" v-if="this.mess">
                    <li class="first"> <span class="first1">手机号:</span> <span>{{user.tel}}</span></li>
                    <li> <span class="first1">密码:</span> <span>{{user.pass}}</span> </li>
                    <li> <span class="first1">年龄:</span> <span>{{user.age}}</span> </li>
                    <li> <span class="first1">性别:</span> <span>{{user.sex}}</span> </li>
                    <li> <span class="first1">地址:</span> <span>{{user.address}}</span> </li>
                </div>
                <div class="con" v-else>
                    <h3>请输入需要更新的信息</h3>
                    <li class="first"> <span class="first1">手机号:</span>  <span>{{user.tel}}</span> </li>
                    <li> <span class="first1">密码:</span> <input ref="pass" type="pass">  </li>
                    <li> <span class="first1">年龄:</span> <input ref="age" type="number">  </li>
                    <li> 
                        <span class="first1">性别:</span>
                        <label for="age1">
                            <input type="radio" ref="sex" v-model="sex" name="" id="age1" value="男">男
                        </label>
                        <label for="age2">
                            <input type="radio" ref="sex" v-model="sex" name="" id="age2" value="女">女
                        </label>
                    </li>
                    <li> <span class="first1">地址:</span> <input ref="address" type="text">  </li>
                </div>
                <button v-if="this.mess" @click="btnmess">更新信息</button>
                <button v-else @click="messok">确认</button>
                <button @click="backup">退出账户</button>
                <button class="del" @click="deletebtn">注销账户</button>
                <button @click="oldermess">历史订单</button>
                <button v-show="this.$store.state.user.nickname == '2'" @click="shopbtn">商品列表</button>
            </div>
        </div>
        <div class="phone">
            <scroll class="scroll">
                <h2 v-if="user.nickname == 1">个人信息</h2>
                <h2 v-else>商家信息</h2>
                <div class="con" v-if="this.mess">
                    <li class="first"> <span class="first1">手机号:</span> <span>{{user.tel}}</span></li>
                    <li> <span class="first1">密码:</span> <span>{{user.pass}}</span> </li>
                    <li> <span class="first1">年龄:</span> <span>{{user.age}}</span> </li>
                    <li> <span class="first1">性别:</span> <span>{{user.sex}}</span> </li>
                    <li> <span class="first1">地址:</span> <span>{{user.address}}</span> </li>
                </div>
                <div class="con" v-else>
                    <h3>请输入需要更新的信息</h3>
                    <li class="first"> <span class="first1">手机号:</span>  <span>{{user.tel}}</span> </li>
                    <li> <span class="first1">密码:</span> <input ref="pass" type="pass">  </li>
                    <li> <span class="first1">年龄:</span> <input ref="age" type="number">  </li>
                    <li> 
                        <span class="first1">性别:</span>
                        <label for="age1">
                            <input type="radio" ref="sex" v-model="sex" name="" id="age1" value="男">男
                        </label>
                        <label for="age2">
                            <input type="radio" ref="sex" v-model="sex" name="" id="age2" value="女">女
                        </label>
                    </li>
                    <li> <span class="first1">地址:</span> <input ref="address" type="text">  </li>
                </div>
                <button v-if="this.mess" @click="btnmess">更新信息</button>
                <button v-else @click="messok">确认</button>
                <button @click="backup">退出账户</button>
                <button class="del" @click="deletebtn">注销账户</button>
                <button @click="oldermess">历史订单</button>
                <button v-show="this.$store.state.user.nickname == '2'" @click="shopbtn">商品列表</button>
            </scroll>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import scroll from 'components/common/scroll/scroll'
    export default {
        components: {
            scroll
        },
        data() {
            return {
                mess: true,
                sex: ''
            }
        },
        methods: {
            btnmess() {
                this.mess = !this.mess
            },
            messok() {
                const data = {
                    tel: this.$store.state.user.tel,
                    pass: this.$refs.pass.value,
                    age: this.$refs.age.value,
                    sex: this.sex,
                    address: this.$refs.address.value
                }
                // console.log(data)
                this.$ajax.post('/users/up', data).then(res => {
                    
                    // 预防空值时候的情况
                    if(this.$refs.pass.value != '') {
                        this.$store.state.user.pass = this.$refs.pass.value
                    }
                    if(this.$refs.age.value != '') {
                        this.$store.state.user.age = this.$refs.age.value
                    }
                    if(this.sex != '') {
                        this.$store.state.user.sex = this.sex
                    }
                    if(this.$refs.address.value != '') {
                        this.$store.state.user.address = this.$refs.address.value
                    }

                    // 返回展示的页面
                    this.mess = true
                    
                    this.$toast.show(res.data, 2000)
                })
                // this.mess = !this.mess

            },
            backup() {
                this.$store.state.user.tel = null
                this.$router.push('/home')
            },
            deletebtn() {
                const data = {tel: this.$store.state.user.tel}
                this.$ajax.post('/users/delete', data).then(res => {
                    this.$toast.show(res.data, 2000)
                    this.$store.state.user.tel = null
                    this.$router.push({path: '/home'})
                })
            },
            oldermess() {
                this.$router.push('/oldermessages')
            },
            shopbtn() {
                this.$router.push('/shoplist')
            }
        },
        computed: {
            ...mapState(['user']),
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h3 {
        font-size: 1.3vw;
        margin: 1.9vw;
    }
    @media screen and (min-width: 430px){
        #individual {
            height: 840px;
            background-color: #f0f0f0;
        }

        .phone {
            display: none;
        }
        h2 {
            padding: 2.6vw 0 1.3vw 2.6vw;
            font-size: 1.6vw;
            border-bottom: 0.2vw solid #636e72;
        }

        .con li {
            padding: 1.3vw;
            font-size: 1.3vw;
            border-bottom: 1px solid #636e72;
        }

        .con .first {
            border-top: 1px solid  #636e72;
        }

        .con li .first1 {
            display: inline-block;
            width: 6.5vw;

            height: 2.6vw;
            line-height: 2.6vw;
        }

        .con li label {
            margin: 0 0.9vw;
        }

        .con li label input {
            margin-right: 0.5vw;
        }

        button {
            width: 6vw;
            height: 3.2vw;
            margin: 1.9vw;
        }

        .del {
            color: #fff;
            outline: none;
            background: #d63031;
        }
    }

    @media screen and (max-width: 430px){
        #individual {
            /* height: 149.3vw; */
            height: 100%;
            margin: 0 4.6vw;
        }

        h3 {
            font-size: 4.6vw;
            padding: 3.1vw;
        }

        .pc {
            display: none;
        }

        .phone {
            margin-top: 12.5vw;
        }

        .scroll {
            position: absolute;
            left: 0;
            right: 0;
            top: 13vw;
            bottom: 15vw;
            overflow: hidden;
        }

        h2 {
            padding: 5.6vw ;
            font-size: 6.2vw;
            border-bottom: 0.2vw solid #636e72;
        }

        .con li {
            padding: 5.6vw;
            font-size: 4.6vw;
            border-bottom: 1px solid #636e72;
        }
        .con .first1 {
            display: inline-block;
            width: 18.7vw;
            height: 9.3vw;
            line-height: 9.3vw;
        }
        .con .first {
            border-top: 1px solid  #636e72;
        }

        .con li label {
            margin: 0 0.9vw;
        }

        .con li label input {
            margin-right: 0.5vw;
        }

        button {
            width: 18.7vw;
            height: 12.5vw;
            font-size: 3.7vw;
            margin: 5.2vw;
        }

        .del {
            color: #fff;
            outline: none;
            background: #d63031;
        }
    }
        
</style>