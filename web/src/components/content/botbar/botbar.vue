<template>
    <div id="botbar">
        <div class="box">
            <table>
                <tr>
                    <td  v-for="(item, index) in list1" :key="index">{{item}}</td>
                </tr>
                <tr>
                    <td  v-for="(item, index) in list2" :key="index">{{item}}</td>
                </tr>
                <tr >
                    <td v-for="(item, index) in list3" :key="index">{{item}}</td>
                </tr>
                <tr >
                    <td v-for="(item, index) in list4" :key="index">{{item}}</td>
                </tr>
                <!-- <tr >
                    <td v-for="(item) in list5" :key="item">{{item}}</td>
                </tr> -->
            </table>
        </div>
        <div class="con">
            <li>
                <span>京公网安备110105xxxxxxxxxxxx号</span>
            </li>
            <li><span>食品经营许可证</span><span>互联网信息服务许可证</span></li>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list1: ['消费者服务热线', '商家服务热线', '投诉举报热线', '公司信息', '廉政举报'],
                list2: ['外面消费者: 10109777', '外卖&餐饮商家：10105557', '违法和不良信息举报电话：4006018900', '关于我们', '廉政举报平台'],
                list3: ['猫眼消费者: 10105335', '', '举报邮箱：11111111@qq.com', '投资者关系', ''],
                list4: ['其他消费者: 10107888', '', '', '加入我们', ''],
            }
        }
    }   
</script>

<style scoped>
    @media screen and (min-width: 430px){
        #botbar {
            background: #000;
            color: rgb(212, 209, 209);
            padding: 4.44vw 0;
        }

        .box {
            width: 1400px;
            margin: 3.008vw auto;
        }

        tr {
            text-align: center;
            height: 2.316vw;
            line-height: 3.316vw;
            border-bottom: 1px solid #eaeaea;
        }

        td {
            width: 350px;
        }

        td:hover {
            font-weight: 700;
        }

        .box {
            border-bottom: 3px solid #eaeaea;
        }

        li {
            list-style: none;
            text-align: center;
            margin: 1.554vw 0;
        }
    }

    @media screen and (max-width: 430px){
        #botbar {
            display: none;
        }
    }
</style>