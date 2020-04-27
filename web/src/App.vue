<template>
    <div id="app">
      <navbar class="navbar" />
      <!-- <keep-alive> -->
        <router-view/>
      <!-- </keep-alive> -->
      <!-- {{list}} -->
      <maintarbar></maintarbar>

      <!--  -->
      <!--  -->
    </div>
</template>

<script>
  import maintarbar from 'components/content/mainTar/mainTarbar'
  import navbar from 'components/content/apptarbar/navbar'

  export default {
    data() {
      return {
        // list: []
      }
    },
    components: {
      maintarbar,
      navbar
    },
    created() {
      // this.getData()
    },
    methods: {
      // getData() {
      //   this.$ajax.get('/data/redata', '请求数据').then((res) => {
      //     this.list = res
      //   })
      // }
    }
  }
</script>

<style scoped>
  @import 'assets/css/base.css';
  #app {
    background-color: #f0f0f0;
  }

  
  @media screen and (max-width: 430px){
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }
  }
</style>
