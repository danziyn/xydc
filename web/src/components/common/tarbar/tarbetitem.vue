<template>
  <div class="tarbar-item" @click="clickItem()">
    <slot v-if="!isActive" name="tarbar-img"></slot>
    <slot v-else name="tarbar-img-active"></slot>
    <div :style="tarbercolor"><slot name="tarbar-text"></slot></div>
  </div>
</template>

<script>
// import ss from '../../assets/img/tarBar/home.avg'
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    tarbercolor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    clickItem() {
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
  .tarbar-item {
    flex: 1;
    text-align: center
  }
  .tarbar-item img {
    margin-top: 1.5vw;
    width: 7.5vw;
    height: 7.5vw;
  }
</style>