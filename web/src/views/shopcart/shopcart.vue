<template>
    <div id="shopcart">
        <h2>购物车</h2>
        <div class="pc">
            <goodlist/>
        </div>
        <div class="phone">
            <scroll class="content">
                <goodlist/>
            </scroll>
        </div>
        <botprice />

    </div>
</template>

<script>
    import goodlist from './children/goodlist'
    import botprice from './children/botprice'

    import scroll from 'components/common/scroll/scroll'
    export default {
        components: {
            goodlist,
            botprice,
            scroll
        },
        methods: {
        }
    }

</script>

<style  scoped>
    @media screen and (min-width: 430px){
        .phone {
            display: none;
        }
        h2 {
            font-size: 25px;
            margin: 30px 40px;
        }
    }

    @media screen and (max-width: 430px){
        .pc {
            display: none;
        }

        .content {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 26vw;
            top: 25vw;
            overflow: hidden;
        }
        h2 {
            margin-top: 13vw;
            font-size: 5.7vw;
            text-align: center;
            padding: 2.85vw;
        }
    }
</style>