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

onMounted(async () => {
  const { data: authData } = await supabase.auth.getUser()
  user.value = authData.user

  if (user.value) {
    await fetchProducts()
  }

  loading.value = false
})

const fetchProducts = async () => {
  const { data, error } = await supabase.from('donuts').select('*').order('created_at', { ascending: false })
  if (!error) {
    products.value = data
  } else {
    console.error('Ошибка при загрузке товаров:', error)
  }
}

const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) imageFile.value = file
}

const addProduct = async () => {
  if (!title.value || !price.value) {
    alert('Заполни хотя бы название и цену')
    return
  }

  let imageUrl = null

  if (imageFile.value) {
    const file = imageFile.value
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `products/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(filePath, file)

    if (uploadError) {
      console.error('Ошибка при загрузке фото:', uploadError)
      alert('Не удалось загрузить фото')
      return
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('product-images')
      .getPublicUrl(filePath)

    imageUrl = publicUrlData.publicUrl
  }

  const { error } = await supabase.from('donuts').insert([{
    title: title.value,
    description: description.value,
    price: +price.value,
    user_id: user.value.id,
    image_url: imageUrl,
  }])

  if (error) {
    console.error('Ошибка при добавлении товара:', error)
    alert('Не удалось добавить товар')
  } else {
    title.value = ''
    description.value = ''
    price.value = ''
    imageFile.value = null
    await fetchProducts()
  }
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">Панель управления товарами</h1>

    <div v-if="loading">Загрузка...</div>

    <div v-else>
      <!-- Форма добавления товара -->
      <form @submit.prevent="addProduct" class="mb-10 space-y-4 bg-gray-50 p-6 rounded-lg shadow">
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
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                 file:rounded file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <div v-if="imageFile" class="mt-2">
          <img
            :src="URL.createObjectURL(imageFile)"
            alt="Превью фото"
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
      <div v-if="products.length === 0" class="text-center text-gray-500">Товаров пока нет</div>

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
          <p class="text-lg font-bold">{{ product.price }}₸</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style>

</style>
