<template>
    <div id="leftitem">
        <div class="tit">
            {{item[item.type].head_title}}
            <button @click="delshopstore">x</button>
            <!-- {{item}} -->
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            delshopstore() {
                var shop_id = {_id: this.item._id}
                // console.log(shop_id)
                this.$ajax.post('/data/delstore', shop_id).then(res => {
                    this.$toast.show(res.data, 2000)
                })
                
                setTimeout(() => {
                    this.$router.push('/individual')
                }, 2300)
            }
        }
    }
</script>

<style scoped>
    
    @media screen and (min-width: 430px) {
        .tit button {
            width: 2.31749vw;
            height: 2.31749vw;
            border-radius: 50%;
            border: 1px solid yellowgreen;
        }

    }
    @media screen and (max-width: 430px) {
        .tit {
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .tit button {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;

        }
    }
</style>