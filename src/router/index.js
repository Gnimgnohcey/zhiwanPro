import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes=[
    {
        path: '/',
        name: 'firstPage',
        component: () => import(/* webpackChunkName: "about" */ '@/views/testingComponent.vue')
    }
]
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL||'/',
    routes
  })