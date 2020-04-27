<template>
  <div>
    <el-form>
      <el-form-item>
        <h1>查看详细信息</h1>
      </el-form-item>
      <el-form-item label="手机号码" label-width="120px">
        <el-input v-model="model.data.user_id"></el-input>
      </el-form-item>
      <el-form-item label="商铺id" label-width="120px">
        <el-input v-model="model.data.shop_id"></el-input>
      </el-form-item>
      <el-form-item label="商品" label-width="120px">
        <el-input v-model="model.data.item_title"></el-input>
      </el-form-item>
      <el-form-item label="用户评论" label-width="120px">
        <el-input v-model="model.data.user_content"></el-input>
      </el-form-item>
      <el-form-item label="用户评分" label-width="120px">
        <el-input v-model="model.data.score"></el-input>
      </el-form-item>
      <el-form-item label="用户下单时间" label-width="120px">
        <el-input v-model="model.data.create_time"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" label-width="120px">
        <el-image style="width: 100px; height: 100px" :src="model.data.item_img" :fit="fit"></el-image>
      </el-form-item>
      <el-form-item label="用户评论时间" label-width="120px">
        <el-input v-model="model.data.time"></el-input>
      </el-form-item>
      <el-form-item v-if="model.data.shopcontent" label="商家评论" label-width="120px">
        <el-input v-model="model.data.shopcontent"></el-input>
      </el-form-item>
      <el-form-item v-if="model.data.shopcontenttime" label="商家评论时间" label-width="120px">
        <el-input v-model="model.data.shopcontenttime"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/comments/" + this.id);
      console.log(res);
      this.model = res.data;
    }
  }
};
</script>

<style>
</style>