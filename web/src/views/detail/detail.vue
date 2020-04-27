<template>
    <div id="detail">
        <bar :fu='fu' />
        <contentw :fu='fu' />
    </div>
</template>

<script>
    import bar from './children/bar'
    import contentw from './children/contentw'
    export default {
        components: {
            bar,
            contentw
        },
        data() {
            return {
                fu: ''
            }
        },
        created() {
            this.fu = this.$route.query.fu
            this.$store.state.type = this.$route.query.fu
        }
    }
</script>

<style scoped>

</style>