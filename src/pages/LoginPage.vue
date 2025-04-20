<!-- src/pages/LoginPage.vue -->
<script setup>
import { ref } from 'vue'
import supabase from '@/supabase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert('Ошибка входа: ' + error.message)
  } else {
    router.push('/admin')
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Вход</h2>
    <input v-model="email" type="email" placeholder="Email" class="w-full border p-2 mb-2 rounded" />
    <input v-model="password" type="password" placeholder="Пароль" class="w-full border p-2 mb-4 rounded" />
    <button @click="login" class="bg-blue-600 text-white px-4 py-2 rounded">Войти</button>
  </div>
</template>
