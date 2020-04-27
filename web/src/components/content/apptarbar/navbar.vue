<template>
    <div id="navbarhome">
        <navhome> 
            <div class="navbar" @click="homeclick" slot="left">订餐系统</div>
            <div class="barright" slot="right">
                <span @click="btnclick1">主页</span>
                <span @click="btnclick2">详情</span>
                <span @click="btnclick3">购物车</span>
                
                <span v-if="this.$store.state.user.tel == null" @click="btnclick4">我的</span>
                <span v-else @click="btnclick5">{{String(this.$store.state.user.tel).substring(0, 3)}}用户</span>
            </div>
        </navhome>
    </div>
</template>

<script>
    import navhome from 'components/common/navbar/navhome'
    export default {
        data() {
            return {

            }
        },
        components: {
            navhome
        },
        methods: {
            homeclick() {
                console.log('home')
                this.$router.push('/home')
            },
            btnclick1() {
                console.log('home')
                this.$router.push('/home')
            },
            btnclick2() {
                console.log('cateorgy')
                this.$router.push('/cateorgy')
            },
            btnclick3() {
                console.log('shopcart')
                this.$router.push('/shopcart')
            },
            btnclick4() {
                console.log('profile')
                this.$router.push('/profile')
            },
            btnclick5() {
                console.log('individual')
                this.$router.push('/individual')
            }
        }
    }   
</script>

<style scoped>
    .navbar {
        font-weight: 700;
        color: #636e72;
    }

    .barright {
        display: flex;
        font-size: 1.3vw;
    }

    .barright span {
        flex: 1;
    }

    .barright span:hover {
        font-weight: 700;
    }

    /* @media screen and (min-width: 430px) {
        #navbarhome {
            display: none;
        }
    } */
</style>