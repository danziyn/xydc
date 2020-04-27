<template>
    <div id="oldermessages">
            <div class="pc">
                <h2>个人信息</h2>
                <li><span class="span1"> 手机号: </span> <span>{{user.tel}}</span> </li>
                <li><span class="span1"> 年龄: </span> <span>{{user.age}}</span> </li>
                <li><span class="span1"> 性别: </span> <span>{{user.sex}}</span> </li>
                <older :older='shoporder'/>
            </div>
        <div class="phone">
            <scroll class="scroll"> 
                <h2>个人信息</h2>
                <li><span class="span1"> 手机号: </span> <span>{{user.tel}}</span> </li>
                <li><span class="span1"> 年龄: </span> <span>{{user.age}}</span> </li>
                <li class="span2"><span class="span1"> 性别: </span> <span>{{user.sex}}</span> </li>

                <!-- 测试：可删除 -->
                <!-- {{shoporder}} -->

                <older :older='shoporder'/>
            </scroll>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import scroll from 'components/common/scroll/scroll'

    import older from './older'
    export default {
        data() {
            return {
                shoporder: []
            }
        },
        mounted() {
            // console.log('我在调用了')
            var data = {'tel': this.$store.state.user.tel, 'pass' : this.$store.state.user.pass}
            this.$ajax.post('/users/login', data).then((res) => {
                this.shoporder = [...res.data[0].shoporder]
                // console.log('shoporder',    res.data[0].shoporder)
            }) 
            
        },
        computed: {
            ...mapState(['user']),
        },
        components: {
            older,
            scroll
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        padding: 0;
    }
    @media screen and (min-width: 430px) {
        .phone {
            display: none;
        }
        h2 {
            margin: 1.54440vw;
        }

        li {
            display: inline-block;

            margin: 1.15830vw;

            font-size: 1.38996vw;
            width: 23.16602vw;
        }

        li .span1 {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 430px) {
        .pc {
            display: none;
        }

        .scroll {
            position: absolute;
            top: 13vw;
            bottom: 15vw;
            left: 0;
            right: 0;
            overflow: hidden;
        }

        .phone h2 {
            padding: 3.125vw;
            background-color: #eaeaea;
            margin-bottom: 1.5625vw;
        }
        .phone li {
            padding: 3.125vw 4.6875vw;
            background-color: #eaeaea;
        }

        .phone .span2 {
            margin-bottom: 1.5625vw;
        }


    }
</style>