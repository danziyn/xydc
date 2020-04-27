import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("views/home/home");

const profile = () => import("views/profile/profile");
const login = () => import("views/profile/children/login");
const registered = () => import("views/profile/children/registered");

const individual = () => import("views/individual/individual");
const oldermessages = () => import("views/individual/children/oldermessages");
// 商家商品列表
const shoplist = () => import("views/individual/shoplistchildren/shoplist");

const cateorgy = () => import("views/cateorgy/cate");
const shopcart = () => import("views/shopcart/shopcart");

const detail = () => import("views/detail/detail");
const shop = () => import("views/detail/children/shop");
const evaluation = () => import("views/detail/children/evaluation");
const dele = () => import("views/detail/children/dele");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    children: [
      {
        path: "/",
        redirect: "login",
      },
      {
        path: "login",
        component: login,
        name: login,
      },
      {
        path: "registered",
        component: registered,
      },
    ],
  },
  {
    path: "/individual",
    component: individual,
  },
  {
    path: "/shoplist",
    component: shoplist,
  },
  {
    path: "/oldermessages",
    component: oldermessages,
    meta: { keepAlive: false },
  },
  {
    path: "/cateorgy",
    component: cateorgy,
  },
  {
    path: "/detail",
    component: detail,
    children: [
      {
        path: "/",
        redirect: "shop",
      },
      {
        path: "shop",
        component: shop,
      },
      {
        path: "evaluation",
        component: evaluation,
      },
      {
        path: "dele",
        component: dele,
      },
    ],
  },
  {
    path: "/shopcart",
    component: shopcart,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(to);
  //   if ((to.fullPath = "/cateorgy?dataID=0")) {
  //     console.log("11111111111111111111111");
  //   }
  //   // return { x: 0, y: 0 }
  // },
});

router.beforeEach((to, from, next) => {
  // console.log("to", to);
  if (to.fullPath == "/shopcart" && router.app.$store.state.user.tel == null) {
    next("/profile/login");
  } else {
    next();
  }
});

export default router;
