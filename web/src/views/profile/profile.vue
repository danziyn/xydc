<template>
    <div id="profile">
        <div class="pc">
            <div class="box">
                <div class="btn">
                    <span class="login" @click="login">登录</span>
                    <span>|</span>
                    <span class="regis"   @click="registered">注册</span>
                </div>
                <router-view/>
            </div>
        </div>
        <div class="phone">
            <div class="box">
                <div class="box1">
                    <span class="login" @click="login">登录</span>
                    <span>|</span>
                    <span class="regis" @click="registered">注册</span>
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                console.log('111111111')
                this.$router.push('/profile/login')
            },
            registered() {
                console.log('........')
                this.$router.push('/profile/registered')
            }
        }
    }
</script>

<style scoped>

    .login:hover, .regis:hover {
        font-weight: 700;
    }
    @media screen and (min-width: 430px){
        #profile {
            height: 724px;
            background-color: #f0f0f0;
        }

        .phone {
            display: none;
        }

        .pc .box {
            position: relative;
            margin: 9.7vw auto;
            width: 32.5vw;
            /* height: 35vw; */
            background-color: #f6e58d;
            border-radius: 1.3vw;
            /* border: 1px solid red; */
        }

        .btn {
            position: absolute;
            right: 2.2vw;
            top: 2.2vw;
            font-size: 1.6vw;
            font-weight: 400;
        }

        .btn span {
            padding: 0 0.3vw;
        }
    }

    @media screen and (max-width: 430px){
        #profile {
            height: 480px;
            background: #f0f0f0;
        }

        .pc {
            display: none;
        }
        
        .phone .box{
            color: #636e72;
            margin-top: 12.8vw;
            height: 22.1vw;
            line-height: 22.1vw;
            font-size: 6.1vw;
            right: 8.3vw;
            text-align: center;
            background-color: #ffeaa7;
        }

        .phone .box1 {
            position: relative;
            left: -8.3vw;
        }

        .phone span {
            margin-right: 2.7vw;
        }
    }
</style>