import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import List from "@/components/List";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: HelloWorld
    },
    {path: '/home', component: Home},
    {path: '/list', component: List}
  ]
})
