import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import login from "../views/login";

import UserList from "../views/UserList";
import UserEdit from "../views/UserEdit";

import HouseList from "../views/HouseList";
import HouseQuery from "../views/HouseQuery";
import HouseDetailed from "../views/HouseDetailed";

import CommentsList from "../views/CommentsList";
import CommentsEdit from "../views/CommentsEdit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/Users",
    name: "Home",
    component: Home,
    children: [
      {
        path: "List",
        component: UserList,
      },
      {
        path: "Edit",
        component: UserEdit,
      },
      {
        path: "Edit/:id",
        component: UserEdit,
        props: true,
      },
      {
        path: "HouseList",
        component: HouseList,
      },
      {
        path: "HouseQuery/:type",
        component: HouseQuery,
        props: true,
      },
      {
        path: "HouseDetailed/:id",
        component: HouseDetailed,
        props: true,
      },
      {
        path: "CommentsList",
        component: CommentsList,
      },
      {
        path: "CommentsEdit/:id",
        component: CommentsEdit,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
