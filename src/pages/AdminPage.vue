<script setup>
import { ref, onMounted } from 'vue'
import supabase from '../supabase.js'

const user = ref(null)
const products = ref([])
const loading = ref(true)

const title = ref('')
const description = ref('')
const price = ref('')
const imageFile = ref(null)
const imagePreviewUrl = ref('') // Добавляем отдельную ref для превью

// Удаление товара
const deleteProduct = async (product) => {
  if (!product?.id) {
    alert('Ошибка: некорректные данные товара')
    return
  }

  try {
    if (product.image_url) {
      const filePath = product.image_url.split('/').slice(-2).join('/')
      await supabase.storage.from('product-images').remove([filePath])
    }

    await supabase.from('donuts').delete().eq('id', product.id)
    await fetchProducts()
    alert('Товар удалён!')
  } catch (error) {
    console.error('Ошибка при удалении:', error)
    alert('Не удалось удалить товар')
  }
}

// Загрузка товаров
const fetchProducts = async () => {
  try {
    const { data } = await supabase
      .from('donuts')
      .select('*')
      .order('created_at', { ascending: false })
    products.value = data
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }
}

// Обработчик выбора файла
const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    imageFile.value = file
    imagePreviewUrl.value = URL.createObjectURL(file) // Создаем URL сразу
  }
}

// Добавление товара
const addProduct = async () => {
  if (!title.value || !price.value) {
    alert('Укажите название и цену')
    return
  }

  try {
    let imageUrl = null

    if (imageFile.value) {
      const fileExt = imageFile.value.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `products/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, imageFile.value)

      if (uploadError) throw uploadError

      const { data: publicUrlData } = await supabase
        .storage
        .from('product-images')
        .getPublicUrl(filePath)

      imageUrl = publicUrlData.publicUrl
    }

    await supabase.from('donuts').insert([{
      title: title.value,
      description: description.value,
      price: +price.value,
      user_id: user.value.id,
      image_url: imageUrl,
    }])

    // Очистка формы
    title.value = ''
    description.value = ''
    price.value = ''
    imageFile.value = null
    imagePreviewUrl.value = ''
    await fetchProducts()

  } catch (error) {
    console.error('Ошибка:', error)
    alert('Не удалось добавить товар')
  }
}

// Загрузка данных
onMounted(async () => {
  const { data: authData } = await supabase.auth.getUser()
  user.value = authData.user
  if (user.value) await fetchProducts()
  loading.value = false
})
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">Панель управления товарами</h1>

    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <!-- Форма добавления -->
      <form @submit.prevent="addProduct" class="mb-10 space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <input
          v-model="title"
          type="text"
          placeholder="Название"
          class="w-full p-2 border rounded"
          required
        />
        <textarea
          v-model="description"
          placeholder="Описание"
          class="w-full p-2 border rounded"
        ></textarea>
        <input
          v-model="price"
          type="number"
          placeholder="Цена"
          class="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                 file:rounded file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <!-- Превью изображения -->
        <div v-if="imagePreviewUrl" class="mt-2">
          <img
            :src="imagePreviewUrl"
            alt="Превью"
            class="max-h-40 object-contain border rounded"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить товар
        </button>
      </form>

      <!-- Список товаров -->
      <div v-if="!products.length" class="text-center text-gray-500">Нет товаров</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white p-4 rounded shadow hover:shadow-md transition"
        >
          <img
            v-if="product.image_url"
            :src="product.image_url"
            alt="Фото товара"
            class="w-full h-48 object-cover rounded mb-4 border"
          />
          <h2 class="text-xl font-semibold mb-1">{{ product.title }}</h2>
          <p class="text-gray-600 text-sm mb-2">{{ product.description }}</p>
          <p class="text-lg font-bold">{{ product.price }} сом</p>
          <button
            @click="deleteProduct(product)"
            class="text-red-500 hover:underline"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Стиль можно добавить, если нужно */
</style>
