<template>
    <div id="love">
        <h2>猜你喜欢</h2>
        <datlist :list='data' spec='tian'/>
    </div>
</template>

<script>
    import datlist from '../../cateorgy/children/datlist'
    export default {
        data() {
            return {
                data: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$ajax.get('/data/redata', '请求数据').then((res) => {
                    // console.log(res)
                    const mess = res.data.filter(item => {
                        // console.log(item)
                        return item.hasOwnProperty('tian')
                    })
                    this.data = mess
                })
            }
        },
        components: {
            datlist
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 430px){
        h2 {
            margin: 3.5vw 1.5vw;
        }

        
    }

    @media screen and (max-width: 430px){
        h2 {
            margin: 3.125vw;
            font-size: 6.25vw;    
        }
    }
</style>