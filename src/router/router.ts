import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue'

Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login.vue')
    },{
        path:'/auth_router',
        component:Layout,
        meta:{},

    }]
})

export default router