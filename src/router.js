import { createRouter, createWebHistory } from 'vue-router'
import  supabase  from './supabase'
import AdminPage from './pages/AdminPage.vue'
import LoginPage from './pages/LoginPage.vue'
import App from './App.vue'
// Импорт других компонентов
import HomePage from './pages/Home.vue' // пример

const routes = [

  { path: '/login', name: 'Login', component: LoginPage },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const { data: { user } } = await supabase.auth.getUser()

  if (to.meta.requiresAuth && !user) {
    console.log('Не авторизован, редирект на /')
    next('/') // редирект на главную если не авторизован
  } else {
    next()
  }
})


export default router
