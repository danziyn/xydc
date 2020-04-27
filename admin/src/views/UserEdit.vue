<template>
  <div>
    <el-form @submit.native.prevent="save">
      <el-form-item>
        <h1>{{id ? '修改用户' : '新增用户'}}</h1>
      </el-form-item>
      <el-form-item label="手机号码" label-width="120px">
        <el-input v-model="model.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="120px" v-show="!this.id">
        <el-input v-model="model.pass"></el-input>
      </el-form-item>
      <el-form-item label="年龄" label-width="120px">
        <el-input v-model="model.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" label-width="120px">
        <el-radio v-model="model.sex" label="男">男</el-radio>
        <el-radio v-model="model.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="地址" label-width="120px">
        <el-input v-model="model.address"></el-input>
      </el-form-item>
      <el-form-item label="权限" label-width="120px">
        <el-radio v-model="model.nickname" label="1">用户</el-radio>
        <el-radio v-model="model.nickname" label="2">商家</el-radio>
      </el-form-item>
      <el-form-item label-width="120px">
        <el-button type="primary" native-type="submit">保存</el-button>
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
    this.id && this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/users/" + this.id);
      console.log(res);
      this.model = res.data;
    },
    async save() {
      if (!this.id) {
        const res = await this.$http.post("/users", this.model);
        console.log(res);
      } else {
        const res = await this.$http.put("/users/" + this.id, this.model);
        console.log(res);
      }
      this.$message({
        message: "添加成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
</style>