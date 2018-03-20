import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import People from "../pages/People.vue";
import Workshops from "../pages/Workshops.vue";
import Connect from "../pages/Connect.vue";
import App from "../App.vue";


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/people', component: People },
  { path: '/workshops', component: Workshops },
  { path: '/connect', component: Connect }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
const app = new Vue({
  router,
  template: "<App/>",
  components: { App }
}).$mount('#app');