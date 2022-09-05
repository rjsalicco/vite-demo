import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Contact from '/src/components/Contact.vue'
import Dashboard from '/src/components/Dashboard.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/About', name: 'About', component: About },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Dashboard', name: 'Dashboard', component: Dashboard }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router