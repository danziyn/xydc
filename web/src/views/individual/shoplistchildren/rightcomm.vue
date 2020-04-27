<template>
    <div id="rightcomm">
        <div v-for="(item, index) in commmess" :key="index" class="item">
            <rightcommitem :item='item' :length='commmess.length'/>
            <!-- {{commmess}} -->
            <!-- {{item}} -->
        </div>
    </div>
</template>

<script>
    import rightcommitem from './rightcommitem'
    export default {
        data() {
            return {
                commmess: []
            }
        },
        props: {
            shop_id: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.$ajax.get('/common/all').then(res => {
                // console.log(res.data)
                // console.log(res.data)
                this.commmess = res.data.filter(item => {
                    console.log(item.data.shop_id ,this.shop_id,  item.data.shop_id == this.shop_id)
                    return item.data.shop_id == this.shop_id
                })
                // console.log('11111111', this.commmess)
            })
        },
        components: {
            rightcommitem
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px) {
        

    }
    @media screen and (max-width: 430px) {
        #rightcomm {
            position: absolute;
            right: 0;
            /* bottom: 15vw; */
            top: 48vw;
            left: 26vw;
            margin-bottom: 13vw;
            /* overflow: hidden; */
        }

        /* .item {
            margin-bottom: 15vw;
        } */
    }
</style>