<template>
    <div id="older">
        <h2>全部订单</h2>
        <li class="clear-fix" v-for="(item, index) in older" :key="index">
            <!-- {{older.length}} -->

            <!-- 调试：可删除 -->
            <!-- {{item}} -->

            <olderitem :item='item' :user_comment='user_comment'/>
        <!-- {{item}} -->
        </li>
        <!-- {{older}} -->
        <!-- {{user_comment}} -->
    </div>
</template>

<script>
    import olderitem from './olderitem'
    export default {
        props: {
            older: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                user_comment: []
            }
        },
        components: {
            olderitem
        },
        mounted() { 
            // 发送请求评论数据
            setTimeout(() => {
                this.$ajax.get('/common/all').then(res => {
                    this.user_comment = res.data.filter(item => {
                        return item.data.user_id == this.$store.state.user.tel
                        // return true
                    })
                })
            })
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    @media screen and (min-width: 430px) {
        li {
            /* height: 7.79220vw; */
            background-color: #eaeaea;
            margin-bottom: 0.51948vw;
            position: relative;
        }

        h2 {
            margin: 1.03896vw;
        }
    }

    @media screen and (max-width: 430px) {
        h2 {
            margin: 3.125vw;
        }
        li {
            /* height: 37.5vw; */
            background-color: #eaeaea;
            margin-bottom: 3.125vw;
        }
    }
</style>