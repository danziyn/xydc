<template>
    <div id="navbarhome">
        <navhome> 
            <div class="navbar" slot="left">订餐系统</div>
            <div class="barright" slot="right">
                <span @click="btnclick1">主页</span>
                <span @click="btnclick2">分类</span>
                <span @click="btnclick3">购物车</span>
                <span @click="btnclick4">我的</span>
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
            btnclick1() {
                this.$router.push('/home')
            },
            btnclick2() {
                this.$router.push('/cateorgy')
            },
            btnclick3() {
                this.$router.push('/shopcart')
            },
            btnclick4() {
                this.$router.push('/profile')
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
</style>