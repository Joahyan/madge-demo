import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/index.vue'
import Home from '../views/home.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path : '/index',
//     component : indexPage
//   }
// ]

// export default new VueRouter({
//   // mode: 'history', // 将路由模式切换为history（去除#），需要设置默认路径页面
//   routes // (缩写) 相当于 routes: routes
// })

const ROOT_ROUTE = [

  {
    path: '/index',
    // redirect: '/index',
    component : IndexPage
  },
  {
    path: '/home',
    // redirect: '/index',
    component : Home
  },
  // {
  //   // 会匹配所有路径
  //   path: '*',
  //   redirect: '/index',
  // },
];

// 业务路由配置

// 注释
// const ROUTE_CONFIG = {
//   path: '/',
//   component: require('../views/index.vue').default,

//   // component: indexPage,
//   children: [
   
//   ],
// };

// // 创建路由实例
let router = new VueRouter({
  routes: ROOT_ROUTE,
});

export default router
