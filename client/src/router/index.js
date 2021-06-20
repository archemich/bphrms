import { createRouter, createWebHistory } from 'vue-router'
import ForDoctor from '../views/ForDoctor.vue'
import Doctor from '../views/Doctor.vue' 

const routes = [
 
  {
    path: '/fordoctor',
    name: 'ForDoctor',
    component: ForDoctor
  },
  {
    path: '/doctor',
    name:'Doctor',
    component: Doctor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
