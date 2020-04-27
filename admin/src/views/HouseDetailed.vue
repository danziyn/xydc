<template>
  <div>
    <!-- {{model}} -->
    <el-form v-if="model.data">
      <el-form-item>
        <h1>店铺详情</h1>
      </el-form-item>
      <!-- {{model.data.type}} -->
      <!-- {{model.data[model.data.type]}} -->
      <el-form-item label="店铺名" label-width="120px">
        <el-input v-model="model.data[model.data.type].head_title"></el-input>
      </el-form-item>
      <el-form-item label="店铺图片" label-width="120px">
        <el-image style="width: 100px; height: 100px" :src="model.data[model.data.type].head_logo"></el-image>
      </el-form-item>
      <el-form-item label="地址" label-width="120px">
        <el-input v-model="model.data[model.data.type].meggages.address"></el-input>
      </el-form-item>
      <el-form-item label="营业时间" label-width="120px">
        <el-input v-model="model.data[model.data.type].meggages.time"></el-input>
      </el-form-item>
      <el-form-item label="评分" label-width="120px">
        <el-input v-model="model.data[model.data.type].meggages.score"></el-input>
      </el-form-item>
      <el-form-item label="配送方式" label-width="120px">
        <el-input v-model="model.data[model.data.type].meggages.methods
        "></el-input>
      </el-form-item>
      <el-form-item label="描述" label-width="120px">
        <ul v-for="(item, index) in model.data[model.data.type].head_desc" :key="index">
          <li>{{item}}</li>
        </ul>
      </el-form-item>
      <el-form-item label="商品分类" label-width="120px">
        <div v-for="(item, index) in model.data[model.data.type].goodlist" :key="index">
          <span>{{item.name}}</span>
          <!-- {{item.item1}} -->
          <list :list="item.item1" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import list from "./list";
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      flag: false
    };
  },
  components: {
    list
  },
  created() {
    this.fetch();
    this.flag = true;
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/homes/${this.id}`);
      this.model = res;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  margin: 0 10px;
  border: 1px solid #eaeaea;
}
</style>