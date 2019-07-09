import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import store from './store.js';


export default new vuex.Store({
    modules: {
        store
    }
    // strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})