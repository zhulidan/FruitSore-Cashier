// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Echars from  'echarts';

import './assets/css/base.css';
import './assets/css/style.css';

import Utils from './tool/utils.js';
Vue.use(ElementUI);
// Vue.use(Echars);
Vue.prototype.Echars = Echars;
Vue.prototype.Utils = Utils;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
