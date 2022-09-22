import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../pages/Dashboard.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/user/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router