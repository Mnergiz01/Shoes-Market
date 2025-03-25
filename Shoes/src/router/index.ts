import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import AddCart from '@/views/AddCart.vue'
import MyBag from '@/views/MyBag.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/add/:id',
      name: 'AddCart',
      component: AddCart,
    },
    {
      path: '/mybag',
      name: 'MyBag',
      component: MyBag,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },

    
  ],
})

export default router
