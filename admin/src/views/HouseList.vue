<template>
  <div>
    <!-- {{model.data[model.data.type]}} -->
    <el-table :data="model.data " style="width:100%">
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <!-- {{type}} -->
      <!-- <el-table-column prop="[near].head_title" label="标题"></el-table-column> -->
      <!-- <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/Housers/edit/` + scope.row._id)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
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
      const res = await this.$http.get("/homes");
      this.model = res;
    }
  }
};
</script>

<style>
</style>