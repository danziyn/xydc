<template>
  <div>
    <el-table :data="model.data" style="width:100%">
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="data.item_title" label="商品"></el-table-column>
      <el-table-column prop="data.user_id" label="用户手机"></el-table-column>
      <el-table-column prop="data.shop_id" label="商家id"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/Users/CommentsEdit/`  + scope.row._id)"
          >查看详细信息</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
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
      const res = await this.$http.get("/comments");
      this.model = res;
    },
    async remove(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/comments/" + row._id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>