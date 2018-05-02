import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import People from "../pages/People.vue";
import Workshops from "../pages/Workshops.vue";
import Labs from "../pages/Labs.vue";
import Connect from "../pages/Connect.vue";
import App from "../App.vue";


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect:'/' },
  { path: '/projects', component: Projects },
  { path: '/people', component: People },
  { path: '/workshops', component: Workshops },
  { path: '/labs', component: Labs },
  { path: '/connect', component: Connect },
  //Redirects for singular/plural confusion
  { path: '/lab', redirect: '/labs', },
  { path: '/project', redirect: '/projects' },
  { path: '/workshop', redirect: '/workshops' }
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  
})
const app = new Vue({
  router,
  template: `<App :theme="theme"/>`,
  components: { App },
  data: function () {
    let path = this.$route.path
    return {theme: path=='/labs'?'blue':'white'}
  },
})
router.afterEach((to, from) => {
  if (to.path === '/labs') app.theme=('blue')
  else app.theme=('white')
})
app.$mount('#app');