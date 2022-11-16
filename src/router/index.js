import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Contact from '/src/views/Contact.vue'
import Dashboard from '/src/views/Dashboard.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router