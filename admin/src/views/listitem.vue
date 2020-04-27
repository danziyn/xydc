<template>
  <div>
    <!-- {{listitem}} -->
    <el-form>
      <!-- {{model.data.type}} -->
      <!-- {{model.data[model.data.type]}} -->
      <el-form-item label="商品标题" label-width="120px">
        <el-input v-model="listitem.item_title"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" label-width="120px">
        <el-image style="width: 100px; height: 100px" :src="listitem.item_img"></el-image>
      </el-form-item>
      <el-form-item label="商品价格" label-width="120px">
        <el-input v-model="listitem.item_price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" label-width="120px">
        <el-input v-model="listitem.item_number"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    listitem: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style scoped>
el-form-item {
  margin: 5px;
}
</style>