import {createRouter, createWebHistory} from "vue-router";

const routes = [{
    path: "/",
    component: () => import('../layouts/Layout.vue'),
    children: [
        {
            path: "/",
            name: "Home",
            component: () => import('../views/Home.vue')
        },
        {
            path: "/chat",
            name: "Chat",
            component: () => import('../views/Chat.vue')
        }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router