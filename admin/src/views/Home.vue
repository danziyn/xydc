<template>
  <div>
    <h2>校园订餐管理后台</h2>
    <el-row class="outbtn">
      <el-button type="danger" round @click="outbtn">退出账户</el-button>
    </el-row>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>用户
            </template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="/Users/List">用户列表</el-menu-item>
              <el-menu-item index="/Users/Edit">添加用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>商家
            </template>
            <el-menu-item-group>
              <template slot="title">店铺分类管理</template>
              <el-menu-item index="/Users/HouseQuery/near">周边美食列表</el-menu-item>
              <el-menu-item index="/Users/HouseQuery/meng">梦华苑列表</el-menu-item>
              <el-menu-item index="/Users/HouseQuery/xue">学致苑美食列表</el-menu-item>
              <el-menu-item index="/Users/HouseQuery/ju">学聚苑美食列表</el-menu-item>
              <el-menu-item index="/Users/HouseQuery/tian">甜点奶茶列表</el-menu-item>
              <el-menu-item index="/Users/HouseQuery/conv">快餐炒饭列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>评论
            </template>
            <el-menu-item-group>
              <template slot="title">评论管理</template>
              <el-menu-item index="/Users/CommentsList">查看所有评论</el-menu-item>
              <!-- <el-menu-item index="/Users/CommentsList">查看所有评论</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    outbtn() {
      this.$router.push("/");
      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 20px;
}

.outbtn {
  position: absolute;
  right: 28px;
  top: 18px;
}
</style>
