import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Skills from '@/views/skills.vue'
import Parcours from '@/views/parcours.vue'
import Page404 from '@/views/Page404.vue'
import Experiences from '@/views/Experiences.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/#article1',
      name: 'article1',
      component: HomeView
    },
    {
      path: '/#Projects',
      name: 'Projects',
      component: HomeView
    },
    {
      path: '/#Contact',
      name: 'Contact',
      component: HomeView
    },
    {
      path: '/parcours',
      name: 'parcours',
      component: Parcours
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Page404,
    },
    {
      path: '/Experiences',
      name: 'Experiences',
      component: Experiences,
    },
    
  ]
})

export default router
