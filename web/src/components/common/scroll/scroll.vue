<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                scroll: null
            }
        },
        props: {
            // 调用的时候传入是否需要惯性检测值
            probeType: {
                type: Number,
                default() {
                    return 0
                }  
            },
            // 调用的时候传入是否需要下来加载更多
            pullUpLoad: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        mounted() {
            // 通过this.refs.wrapper 可以准确的取出对应的元素,而通过qs不一定准确
            // 1.如果refs在组件上面,取到的则是该组件
            this.scroll = new BScroll(this.$refs.wrapper, {
                // 设置为true时,该组件内则可以监听js点击事件(好些现在默认为true)
                click: true,
                // 0 / 1: 不监听   2:滑动监听,惯性不监听  3:滑动惯性都监听
                probeType: this.probeType,
                // 上拉加载更多
                pullUpLoad: this.pullUpLoad
            })

            // 2.on方法监听滚动位置
            this.scroll.on('scroll', position => {
                // console.log(position)
                this.$emit('scrollposi', position)
                this.$emit('fiex', position)
            })

            // 3.检测上拉加载更多事件
            this.scroll.on('pullingUp', () => {
                // 需要解决只能访问一次的问题
                // 解决方法:下面methods中的pullupload()
                this.$emit('pullUpload')
            })
        },
        methods: {
            scrollTo(x, y, time=500) {
                this.scroll.scrollTo(x, y, time)
            },
            pullupload() {
                this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>

</style>