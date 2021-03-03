import Vuex from 'vuex';
import Vue from 'vue';
import demo from './modules/demo';
import user from './modules/user';
import home from './modules/home';
import shopCard from './modules/shop-cart';
import common from './modules/common';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    demo,
    user,
    home,
    shopCard,
    common,
  },
});
