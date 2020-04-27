<template>
  <div>
    <!-- {{model[0][this.type]}} -->
    <el-table :data="model" style="width:100%">
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="type" label="类型">
        <template slot-scope="scope">
          <div>{{scope.row[scope.row.type].head_title}}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/Users/HouseDetailed/` + scope.row._id)"
          >查看</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    type: {}
  },
  data() {
    return {
      model: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/homes");
      console.log(this.type);
      this.model = res.data.filter(item => {
        return item.type == this.type;
      });
    },
    async remove(row) {
      this.$confirm("此操作将永久删除该房屋, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/homes/" + row._id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  watch: {
    type: function() {
      this.fetch();
    }
  }
};
</script>

<style>
</style>