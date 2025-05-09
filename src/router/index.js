import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/muscle/:id',
    name: 'MuscleDetail',
    component: () => import('../views/MuscleDetail.vue')
  },
  {
    path: '/exercise/:id',
    name: 'ExerciseDetail',
    component: () => import('../views/ExerciseDetail.vue')
  },
  {
    path: '/workout-plans',
    name: 'WorkoutPlans',
    component: () => import('../views/WorkoutPlans.vue')
  },
  {
    path: '/workout-plan/:id',
    name: 'WorkoutPlanDetail',
    component: () => import('../views/WorkoutPlanDetail.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/Tools.vue')
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import('../views/Knowledge.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 