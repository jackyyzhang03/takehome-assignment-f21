import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import StandaloneCounter from "@/components/StandaloneCounter";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/counter",
      name: "Counter",
      component: StandaloneCounter
    }
  ] // Add a new route here in Part 2
});
