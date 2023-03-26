import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import YesNo from '/src/views/YesNo.vue'
import Connect from '/src/views/Connect.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/yesno', name: 'YesNo', component: YesNo },
    { path: '/connect', name: 'Connect', component: Connect }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router