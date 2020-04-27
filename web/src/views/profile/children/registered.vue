<template>
    <div id="registered">
        <div class="box">
            <h2>请填写信息</h2>
            <div class="boxx">
                <div class="tel">
                    <span>电话:</span><input ref="text" type="text" v-model="tel" name="" id="">
                </div>
                <div class="pass">
                    <span>密码:</span><input ref="pass" type="password" v-model="pass" name="" id="">
                </div>
                <div class="type">
                    <label for="one">
                        <input type="radio" v-model="type" name="one" value="1">用户
                    </label>
                    <label for="two">
                        <input type="radio" v-model="type" name="two" value="2">商家
                    </label>
                </div>
                <div class="btn">
                    <button @click="regbtn">注册</button>
                    <button type="reset" @click="reset">重置</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tel: '',
                pass: '',
                type: '1'
            }
        },
        methods: {
            reset() {
                this.tel = ''
                this.pass = ''
            },
            regbtn() {
                const data = {
                    'tel' : this.$refs.text.value,
                    'pass' : this.$refs.pass.value,
                    'nickname' : this.type
                }
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.tel))) {
                    this.$toast.show('请输入正确的手机号码', 2000)
                }else {
                    this.$ajax.post('/users/add', data).then((res) => {
                        if(res.data == 'tel') {
                            this.$toast.show('请输入手机号码', 2000)
                        }else if(res.data == 'pass') {
                            this.$toast.show('请输入密码', 2000)
                        }else {
                            const mess = res.data + ' 随后将跳转到登录页面'
                            this.$toast.show(mess, 2000)
                            this.$router.push('/profile/login')
                        }
                    })
                }
                
            }
        }
    }
</script>

<style scoped>
    /* .login:hover, .regis:hover {
        font-weight: 700;
    } */

    @media screen and (min-width: 430px){
        #registered {
            border-top: 1px solid #f6e58d;
            width: 90%;
            height: 85%;
            margin: 0 auto;
        /* border: 1px solid #eaeaea; */
        }

        #registered .box {
            margin-top: 7.8vw;
        }

        h2 {
            text-align: center;
            /* margin: 5.2vw 0 1.3vw 4.5vw; */
            font-size: 1.6vw;
        }

        .tel, .pass {
            margin: 2.6vw 0 2.6vw 4.5vw;
            font-size: 1.3vw;
        }

        input {
            margin: 0 0 0 0.9vw;
        }

        .btn {
            text-align: center;
        }

        button {
            display: inline-block;
            width: 3.9vw;
            height: 2.6vw;
            margin: 1.3vw;
        }

        .type {
            display: flex;
            text-align: center;
            font-size: 1.15874vw;
        }

        .type label {
            flex: 1;
        }
    }

    @media screen and (max-width: 430px){
        h2 {
            font-size: 6.2vw;
        }

        .box span {
            font-size: 16px;
            margin-right: 6.2vw;
        }

        .box .tel input, .box .pass input {
            outline: none;
            width: 62.5vw;
            height: 9.3vw;
        }

        .box .type input {
            margin: 0 3.125vw;
        }

        .box .btn button {
            font-size: 4.3vw;
            width: 18.7vw;
            height: 9.3vw;
            margin: 6.2vw;
        }
    }

</style>