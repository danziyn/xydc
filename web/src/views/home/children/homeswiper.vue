<template>
    <div id="homeswiper">
        <div class="dis">
            <Swiper>
                <SwiperItem v-for="(item, index) in list" :key="index">
                    <img :src="item" alt="">
                </SwiperItem>
            </Swiper>
        </div>
        <div class="">
            <h2>精品展示</h2>
            <div class="pict">
                <img v-for="(item, index) in list1" :key="index" :src="item" alt="">
            </div>  
        </div>
        <!-- {{window.screen.width}} -->
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper/index'

    
    import home1 from 'assets/img/swiper/eat1.jpg'
    import home2 from 'assets/img/swiper/eat2.jpg'
    import home3 from 'assets/img/swiper/eat3.jpg'
    import home4 from 'assets/img/swiper/eat4.jpg'
    import home5 from 'assets/img/swiper/eat5.jpg'
    import home6 from 'assets/img/swiper/eat6.jpg'
    export default {
        data() {
            return {
                list: [home1, home2, home3, home4, home5, home6],
                list1: [home1, home2, home3],
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        mounted() {
            // console.log(window.screen.width)
        }
    }   
</script>

<style scoped>
    .w {
        width: 1200px;
        margin: 0 auto;
    }
    /* 大屏情况 */
    @media screen and (min-width: 430px){
        .dis {
            display: none;
        }

        .pict {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .pict img{
            width: 30%;
            margin-bottom: 0.8vw;
        }

        h2  {
            margin:1.5vw;
            /* padding-top: 4.8vw; */
            color: #57606f;
        }
    }

    /* 小屏情况 */
    @media screen and (max-width: 430px){
        .dis {
            border-bottom: 3.1vw solid #eaeaea;
        }

        .dis img {
            float: left;
        }

        .pict {
            display: none;
        }

        h2 {
            display: none;
        }
    }
</style>