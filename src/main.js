// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Vue.config.productionTip = false

import {store} from "./store";
import notify from './plugin/notify.js';

Vue.use(notify);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  store
  /*  template: '<App/>',
    components: { App }*/
})
