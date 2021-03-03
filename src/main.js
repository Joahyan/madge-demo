import Vue from 'vue'
import './assets/styles/main.css'
import App from './app.vue'
import router from './router/router.js'
import madge from './utils/madge.js'


new Vue({
    router,
    madge,
    render: (h) => h(App),
  }).$mount('#app');