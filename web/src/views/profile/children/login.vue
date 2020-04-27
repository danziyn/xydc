<template>
    <div id="login">
        <div class="box">
            <h2>请输入信息</h2>
            <div class="boxx">
                <div class="tel">
                    <span>电话:</span><input ref="text" type="text" v-model="tel" name="" id="">
                </div>
                <div class="pass">
                    <span>密码:</span><input ref="pass" type="password" v-model="pass" name="" id="">
                </div>
                <div class="btn">
                    <button @click="login">登录</button>
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
                pass: ''
            }
        },
        methods: {
            reset() {
                this.tel = ''
                this.pass = ''
            },
            login() {
                var data = {'tel': this.$refs.text.value, 'pass' : this.$refs.pass.value}
                console.log(data)
                if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.tel))){
                    this.$toast.show('请输入正确的手机号码', 2000)
                }else {this.$ajax.post('/users/login', data).then((res) => {
                    console.log('111',res)
                    if(res.data.length == 0) {
                        this.$toast.show('账户或密码出错,请重新输入!', 2000)
                    }else {
                        // 获取用户的信息
                        this.$store.state.user.tel = res.data[0].tel
                        this.$store.state.user.pass = res.data[0].pass
                        this.$store.state.user.sex = res.data[0].sex
                        this.$store.state.user.age = res.data[0].age
                        this.$store.state.user.address = res.data[0].address
                        this.$store.state.user.shoporder = [...res.data[0].shoporder]
                        this.$store.state.user.nickname = res.data[0].nickname
                        console.log(this.$store.state.user)
                        this.$toast.show('登录成功', 2000)
                        setTimeout(() => {
                            this.$router.push('/home')
                        }, 2000)
                    }
                })
                }
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        #login {
            border-top: 1px solid #f6e58d;
            width: 90%;
            height: 85%;
            margin: 0 auto;
        /* border: 1px solid #eaeaea; */
        }

        #login .box {
            margin-top: 7.8vw;
        }

        h2 {
            /* margin: 5.2vw 0 1.3vw 4.5vw; */
            text-align: center;
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
    }

    @media screen and (max-width: 430px){
        /* #login {
            margin-top: 100px;
        } */
        h2 {
            font-size: 6.2vw;
        }

        .box span {
            font-size: 16px;
            margin-right: 6.2vw;
        }

        .box input {
            outline: none;
            width: 62.5vw;
            height: 9.3vw;
        }

        .box .btn button {
            font-size: 4.3vw;
            width: 18.7vw;
            height: 9.3vw;
            margin: 6.2vw;
        }
    }
</style>