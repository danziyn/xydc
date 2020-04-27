<template>
    <div id="display">
        <div class="from">
            <div class="h3">结算</div>
            <span class="type">总类数: {{typenumber}}种</span>
            <span class="price">总价格: {{price}}元</span>
            <button @click="backup">退出</button>
            <button @click="backuout">结算</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            typenumber: {
                type: Number,
                default: 0
            },
            price: {
                type: Number,
                default: ''
            }
        },
        methods: {
            backup() {
                // console.log('发送事件')
                this.$emit('backup')
            },
            backuout() {
                // console.log('发送事件')
                this.$emit('backuout')
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
        .from {
            position: fixed;
            left: 0;
            right: 0;
            top: 30%;
            /* top: 0.33vw; */
            width: 61.77vw;
            height: 30.88vw;
            margin: 0 auto;
            background: rgba(255, 255, 255, .8);
        }

        .from .h3 {
            text-align: center;
            font-size: 2.31vw;
            font-weight: 700;
            margin: 1.544vw;
        }

        .from .type, .from .price {
            display: block;
            margin-left: 20%;
            padding: 2.3166vw;
            font-size: 1.93vw;
        }

        .from button {
            width: 6.177vw;
            height: 3.088vw;
            line-height: 3.088vw;
            margin: 3.397vw  12.046vw;
        }
    }

    @media screen and (max-width: 430px) {
        .from {
            position: absolute;
            left: 12.71vw;
            top: -113.57vw;
            width: 71.42vw;
            height: 105vw;
            color: #000;
            border: 2px solid #eaeaea;
            background: rgba(255, 255, 255, .8);
        }

        .from .h3 {
            text-align: center;
            margin: 9.375vw 3.125vw;
            font-size: 6.25vw;
            font-weight: 700;
        }

        .from .type, .from .price {
            display: block;
            margin-left: 20%;
            padding: 3.125vw;
        }

        .from button {
            width: 18.75vw;
            height: 9.375vw;
            line-height: 9.375vw;
            margin: 7.187vw;
        }
    }
</style>