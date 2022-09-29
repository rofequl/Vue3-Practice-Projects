import {createRouter, createWebHistory} from "vue-router";
import store from "../store/index.js";

const isAdminLoggedIn = (to, from, next) => store.getters.isAuthenticated ? next() : next({name: "Login"});
const isAdminLoggedOut = (to, from, next) => store.getters.isAuthenticated ? next({name: "Dashboard"}) : next();

const routes = [
    {
        path: '/',
        name: 'Home',
        beforeEnter: isAdminLoggedIn,
        component: () => import("../layouts/default.vue"),
        children: [
            {
                path: "/",
                name: "Dashboard",
                component: () => import('../pages/Dashboard.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        beforeEnter: isAdminLoggedOut,
        component: () => import('../pages/user/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    store.getters.isLoadProfile ? next() : store.dispatch('VERIFY_AUTH').finally(next)
})

export default router