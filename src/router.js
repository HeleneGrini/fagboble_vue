import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Users from "./views/Users";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/brukere",
      name: "users",
      component: Users,
      // code splitting
      //   component: ()=> import('./views/Users.vue')
    },
  ],
});