<template>
    <div id="commed">
        <div class="pc">
            <div class="">
                <h2>分类</h2>
                <div class="bar">
                    <span @click="dataclick(index)" v-for="(item, index) in tit" :key="index">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="phone">
            <div  @click="dataclick(index)" v-for="(item, index) in tit" :key="index" class="bar">
                <img :src="item.img" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tit: [
                    {
                        name: '周边美食',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/a4bfcb3c21941589.png'
                    },
                    {
                        name: '梦华苑',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/7bd353599b0b068e.png'
                    },
                    {
                        name: '学致苑',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/9f355bb3386dd5ab.png'
                    },
                    {
                        name: '学聚苑',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/07fe2f992f296749.png'
                    },
                    {
                        name: '甜点奶茶',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/6feb1248698afd99.png'
                    },
                    {
                        name: '快餐炒饭',
                        img: 'https://u2.0xiao.cn/3cfood/food/detail/image/218dffb521a910ba.png'
                    }
                ]
            }
        },
        methods: {
            dataclick(index) {
                this.$router.push({ path: 'cateorgy', query: { dataID: index }})
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        .phone {
            display: none;
        }

        h2 {
            margin: 1.5vw;
        }

        .bar {
            /* height: 40px; */
            /* line-height: 40px; */
            font-size: 1.3vw;
            /* text-align: center;  */
            border-bottom: 0.2vw solid #eaeaea;
        }

        .bar span {
            display: inline-block;
            width: 6.5vw;
            margin: 1.3vw;
            text-align: center;
        }

        .bar span:hover {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 430px){
        .pc {
            display: none;
        }

        .phone {
            text-align: center;
            font-size: 3.7vw;
            display: flex;
        }


        .bar {
            flex: 1;
        }

        .bar span {
            display: block;
        }

        .bar img {
            width: 14vw;
            height: 14vw;
            margin: 3.1vw 0 1.6vw 0;
        }
    }
</style>