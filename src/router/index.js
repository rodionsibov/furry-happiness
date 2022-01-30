import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/animation',
        name: 'Animation',
        component: () => import('../views/Animation.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
