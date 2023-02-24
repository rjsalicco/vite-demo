import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import YesNo from '/src/views/YesNo.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/yesno', name: 'YesNo', component: YesNo }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router