<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <table>
        <tr>
          <td>用户名</td>
          <td>
            <el-input v-model="model.name" placeholder="请输入用户名"></el-input>
          </td>
        </tr>
        <tr>
          <td>密码</td>
          <td>
            <el-input type="password" v-model="model.pass" placeholder="请输入密码"></el-input>
            <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
          </td>
        </tr>
        <tr>
          <td>
            <el-row>
              <el-button type="primary" @click="btnclick">登录按钮</el-button>
            </el-row>
          </td>
        </tr>
      </table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    btnclick() {
      if (this.model.name && this.model.pass) {
        if (this.model.name == "admin" && this.model.pass == 123) {
          this.$message({
            message: "登录成功",
            type: "success"
          });
          this.$router.push("/Users/List");
        }
      } else {
        this.$message.error("请先填写信息");
      }
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 100px auto;
}
</style>