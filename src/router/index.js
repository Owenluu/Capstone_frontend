import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ListingIndex from "../views/ListingIndex.vue";
import ListingShow from "../views/ListingShow.vue";
import ListingCreate from "../views/ListingCreate.vue";
import ListingEdit from "../views/ListingUpdate.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/listings", name: "ListingIndex", component: ListingIndex },
  { path: "/listings/new", name: "listing-create", component: ListingCreate },
  { path: "/listings/:id", name: "ListingShow", component: ListingShow },
  { path: "/listings/:id/edit", name: "listing-edit", component: ListingEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
