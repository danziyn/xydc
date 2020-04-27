<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    #tabbar {
      display: flex;
      background-color: #f6f6f6;
      height: 15vw;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      box-shadow: 0px -1px 2px rgb(158, 156, 156)
    }
  
    @media screen and (min-width: 420px){
    #tabbar {
      display:none;
      }
    }
</style>