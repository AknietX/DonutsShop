<script setup>

import { ref, onMounted } from 'vue'
import supabase from '@/supabase'

const user = ref(null)
const products = ref([])
const loading = ref(true)

// Поля формы
const title = ref('')
const description = ref('')
const price = ref('')

onMounted(async () => {
  const { data: authData } = await supabase.auth.getUser()
  user.value = authData.user

  if (user.value) {
    await fetchProducts()
  }

  loading.value = false
})

const fetchProducts = async () => {
  const { data, error } = await supabase
    .from('donuts')
    .select('*')

  if (!error) {
    products.value = data
  } else {
    console.error('Ошибка при загрузке товаров:', error)
  }
}

const addProduct = async () => {
  if (!title.value || !price.value) return alert('Заполни хотя бы название и цену')

  const { error } = await supabase.from('donuts').insert([
    {
      title: title.value,
      description: description.value,
      price: +price.value,
      user_id: user.value.id,
    }
  ])

  if (error) {
    console.error('Ошибка при добавлении товара:', error)
    alert('Не удалось добавить товар')
  } else {
    // Очищаем форму и обновляем список
    title.value = ''
    description.value = ''
    price.value = ''
    await fetchProducts()
  }
}

</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Панель управления товарами</h1>

    <div v-if="loading">Загрузка...</div>

    <div v-else>
      <form @submit.prevent="addProduct" class="mb-6 space-y-4">
        <input
          v-model="title"
          type="text"
          placeholder="Название товара"
          class="w-full p-2 border rounded"
        />
        <textarea
          v-model="description"
          placeholder="Описание товара"
          class="w-full p-2 border rounded"
        ></textarea>
        <input
          v-model="price"
          type="number"
          placeholder="Цена"
          class="w-full p-2 border rounded"
        />
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Добавить товар
        </button>
      </form>

      <div v-if="products.length === 0">Товаров пока нет</div>

      <ul v-else class="space-y-2">
        <li v-for="product in products" :key="product.id" class="p-4 border rounded shadow">
          <h2 class="text-lg font-semibold">{{ product.title }}</h2>
          <p class="text-sm text-gray-600">{{ product.description }}</p>
          <p class="text-base font-bold mt-1">{{ product.price }}₸</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>

</style>
