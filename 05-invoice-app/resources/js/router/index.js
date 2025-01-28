import {createRouter, createWebHistory} from "vue-router";
import invoiceIndex from '../Components/invoices/index.vue'
import NotFound from "../Components/NotFound.vue";

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
