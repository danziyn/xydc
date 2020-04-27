<template>
  <div id="tarbar" >
    <tarbar>
      <tarbaritem path="/home" activeColor='deeppink'>
        <img slot='tarbar-img' src="~assets/img/tarBar/home.svg" alt="">
        <img slot='tarbar-img-active' src="~assets/img/tarBar/home_active.svg" alt="">
        <div slot="tarbar-text">首页</div>
      </tarbaritem>
      <tarbaritem  :path="datapage"   activeColor='deeppink'>
        <img slot='tarbar-img' src="~assets/img/tarBar/category.svg" alt="">
        <img slot='tarbar-img-active' src="~assets/img/tarBar/category_active.svg" alt="">
        <div slot="tarbar-text">分类</div>
      </tarbaritem>
      <tarbaritem path="/shopcart" activeColor='deeppink'>
        <img slot='tarbar-img' src="~assets/img/tarBar/shopcart.svg" alt="">
        <img slot='tarbar-img-active' src="~assets/img/tarBar/shopcart_active.svg" alt="">
        <div slot="tarbar-text">购物车</div>
      </tarbaritem>
      <tarbaritem v-if="this.$store.state.user.tel == null" path="/profile" activeColor='deeppink'>
        <img slot='tarbar-img' src="~assets/img/tarBar/profile.svg" alt="">
        <img slot='tarbar-img-active' src="~assets/img/tarBar/profile_active.svg" alt="">
        <div slot="tarbar-text">我的</div>
      </tarbaritem>
      <tarbaritem v-else  path='/individual' activeColor='deeppink'>
        <!-- <span>{{String(this.$store.state.user.tel).substring(0, 3)}}</span> -->
        <div slot="tarbar-text">
          <div class="content">
              {{String(this.$store.state.user.tel).substring(0, 3)}}
          </div>
          <span class="span">用户</span>
        </div>
      </tarbaritem>
    </tarbar>
  </div>
</template>

<script>
import tarbar from 'components/common/tarbar/tarbar'
import tarbaritem from 'components/common/tarbar/tarbetitem'
export default {
  components: {
    tarbar,
    tarbaritem
  },
  computed: {
    datapage() {
      return '/cateorgy?dataID=' + this.$store.state.page
    }
  },
  methods: {
    // path="/category"
    btnclick() {
      this.$router.push('')
    }
  }
}
</script>

<style scoped>
  #tarbar {
    font-size: 4.3vw;
  }

  .content {
    margin: 0 auto;
    font-weight: 700;
    margin-top: 1.5vw ;
    height: 7.5vw;
    font-size: 20px;
    line-height: 7.5vw;
    /* width: 7.5vw; */
  }

  .span {
    display: inline-block;
    margin-top: 1.1vw;
  }
</style>