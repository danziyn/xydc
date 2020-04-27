import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios/index";
import toast from "components/common/toast";

Vue.config.productionTip = false;

// 一调用会执行toast的install函数
Vue.use(toast);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 解决统一路由跳转出现的错误
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
