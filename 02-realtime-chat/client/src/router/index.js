import {createRouter, createWebHistory} from "vue-router";
import store from "../store";

const isAdminLoggedIn = (to, from, next) => store.getters.isAuthenticated ? next() : next({name: "Login"});
const isAdminLoggedOut = (to, from, next) => store.getters.isAuthenticated ? next({name: "Home"}) : next();

const routes = [
    {
        path: "/",
        name: "Home",
        beforeEnter: isAdminLoggedIn,
        component: () => import("../layouts/Layout.vue"),
        children: [
            {
                path: "/",
                name: "HomePage",
                component: () => import("../views/Home.vue"),
            }
        ]
    },

    {
        path: "/sign-in",
        name: "Login",
        beforeEnter: isAdminLoggedOut,
        component: () => import("../views/Auth/Login.vue"),
    },
    {
        path: "/sign-up",
        name: "Register",
        beforeEnter: isAdminLoggedOut,
        component: () => import("../views/Auth/Register.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.getters.isLoadProfile ? next() : store.dispatch('VERIFY_AUTH').finally(next);
});

export default router;
