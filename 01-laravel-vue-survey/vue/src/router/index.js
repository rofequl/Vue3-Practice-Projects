import {createRouter, createWebHistory} from "vue-router";
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import("../components/DefaultLayout.vue"),
        meta: {requiresAuth: true},
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import("../views/Dashboard.vue")
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: () => import("../views/Surveys.vue")
            },
            {
                path: '/surveys/create',
                name: 'SurveyCreate',
                component: () => import("../views/SurveyView.vue")
            },
            {
                path: '/surveys/:id',
                name: 'SurveyView',
                component: () => import("../views/SurveyView.vue")
            }
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        meta: {isGuest: true},
        component: () => import("../components/AuthLayout.vue"),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import("../views/Login.vue")
            },
            {
                path: '/register',
                name: 'Register',
                component: () => import("../views/Register.vue")
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) next({name: 'Login'})
    else if (store.state.user.token && (to.meta.isGuest)) next({name: 'Dashboard'})
    else next()
})

export default router;
