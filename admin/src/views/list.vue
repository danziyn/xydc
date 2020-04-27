<template>
  <!-- <div>{{list}}</div> -->
  <div>
    <li v-for="(item, index) in list" :key="index">
      <listitem :listitem="item" />
    </li>
  </div>
</template>

<script>
import listitem from "./listitem";
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    listitem
  }
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>