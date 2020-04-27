<template>
    <div id="home">
        <!-- <navbarhome class="bar"/> -->
        <homeswiper />
        <recommed />

        <galesslove />
        <botbar />
    </div>
</template>

<script>   
    import navbarhome from './children/navbarhome'
    import homeswiper from './children/homeswiper'
    import recommed from './children/recommed'

    import galesslove from './children/galesslove'
    import botbar from 'components/content/botbar/botbar'
    export default {
        data() {
            return {

            }
        },
        components: {
            navbarhome,
            homeswiper,
            recommed,
            galesslove,
            botbar
        }
    }
</script>

<style scoped>
    /* @media screen and (max-width: 360) {
        .bar {
            display: none;
        }
    } */
</style>