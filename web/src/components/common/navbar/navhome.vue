<template>
    <div class="home">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .home {
        display: flex;
        height: 13vw;
        line-height: 13vw;
        font-size: 5.9vw;
        text-align: center;
        background: #fdcb6e;
    }

    .left {
        float: right;
        margin-left: 3.1vw;
    }

    .right {
        display: none;
        
    }

    @media screen and (min-width: 430px){
        .home {
            position: relative;
            /* width: 1200px;
            margin: 0 auto; */
            height: 3.8vw;
            line-height: 3.8vw;
            font-size: 2vw;
        }

        .right {
            position: absolute;
            right: 0;
            width: 500px;
            height: 3.8vw;
            font-size: 1.3vw;
            /* background-color: #f00; */
            display: block;
        }
    }

    @media screen and (max-width: 430px){
        
    }
</style>