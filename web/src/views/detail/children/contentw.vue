<template>
    <div id="content">
        <div class="con">
            <span class="item1" @click="typeclick(index)" v-for="(item, index) in list" :key="index">{{item}}</span>
        </div>
        <router-view />
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['item'])
        },
        props: {
            fu: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                list: ['商品', '评价', '详情'],
                lista: ['shop', 'evaluation', 'dele']
            }
        },
        methods: {
            typeclick(index) {
                this.$router.push('/detail/' + this.lista[index])
            }
        }
    }
</script>

<style  scoped>
    .con {
        background: #fff;
        border-bottom: 2px solid #eaeaea;
    }

    @media screen and (min-width: 430px){
        .con {
            height: 40px;
            line-height: 40px;
        }

        .con span {
            display: inline-block;
            margin: 0 100px;
        }

        .con span:hover {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 430px){
        .con {
            height: 40px;
            line-height: 40px;
            display: flex;
            text-align: center;
        }

        .item1 {
            flex: 1;
        }

        .item1:hover {
            font-weight: 700;
        }
    }
</style>