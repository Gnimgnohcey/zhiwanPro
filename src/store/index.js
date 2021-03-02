import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import user from './module/user'
export default new Vuex.Store({
    modules:{
        user
    }
 })