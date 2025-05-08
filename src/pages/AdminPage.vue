<script setup>
import { ref, onMounted, computed } from 'vue'
import supabase from '../supabase.js'

const user = ref(null)
const allProducts = ref([])
const loading = ref(true)
const activeCategory = ref('products') // Текущая активная категория

// Форма
const form = ref({
  title: '',
  description: '',
  price: '',
  imageFile: null,
  imagePreviewUrl: ''
})

// Удаление товара
const deleteProduct = async (donuts) => {
  if (!donuts?.id) {
    alert('Ошибка: некорректные данные товара')
    return
  }

  try {
    if (donuts.image_url) {
      const filePath = donuts.image_url.split('/').slice(-2).join('/')
      await supabase.storage.from('product-images').remove([filePath])
    }

    await supabase.from('donuts').delete().eq('id', donuts.id)
    await fetchProducts()
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
    allProducts.value = data
    console.log(allProducts.value)
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }
}

// Обработчик выбора файла
const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    form.value.imageFile = file
    form.value.imagePreviewUrl = URL.createObjectURL(file)
  }
}

// Добавление товара
const addProduct = async () => {
  if (!form.value.title || !form.value.price) {
    alert('Укажите название и цену')
    return
  }

  try {
    let imageUrl = null

    if (form.value.imageFile) {
      const fileExt = form.value.imageFile.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `${activeCategory.value}/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, form.value.imageFile)

      if (uploadError) throw uploadError

      const { data: publicUrlData } = await supabase
        .storage
        .from('product-images')
        .getPublicUrl(filePath)

      imageUrl = publicUrlData.publicUrl
    }

    await supabase.from('donuts').insert([{
      title: form.value.title,
      description: form.value.description,
      price: +form.value.price,
      user_id: user.value.id,
      image_url: imageUrl,
      category: activeCategory.value
    }])

    // Очистка формы
    form.value = {
      title: '',
      description: '',
      price: '',
      imageFile: null,
      imagePreviewUrl: ''
    }
    await fetchProducts()

  } catch (error) {
    console.error('Ошибка:', error)
    alert('Не удалось добавить товар')
  }
}

// Фильтрация продуктов по категории
const filteredProducts = computed(() => {
  return allProducts.value.filter(product => product.category === activeCategory.value)
})

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
      <!-- Переключатель категорий -->
      <div class="flex space-x-4 mb-6">
        <button
          @click="activeCategory = 'products'"
          :class="{'bg-blue-600 text-white': activeCategory === 'products'}"
          class="px-4 py-2 rounded border"
        >
          Пончики
        </button>
        <button
          @click="activeCategory = 'drinks'"
          :class="{'bg-blue-600 text-white': activeCategory === 'drinks'}"
          class="px-4 py-2 rounded border"
        >
          Напитки
        </button>
        <button
          @click="activeCategory = 'makarons'"
          :class="{'bg-blue-600 text-white': activeCategory === 'makarons'}"
          class="px-4 py-2 rounded border"
        >
          Макаронс
        </button>
      </div>

      <!-- Форма добавления -->
      <form @submit.prevent="addProduct" class="mb-10 space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold capitalize">{{ activeCategory }}</h2>
        <input
          v-model="form.title"
          type="text"
          placeholder="Название"
          class="w-full p-2 border rounded"
          required
        />
        <textarea
          v-model="form.description"
          placeholder="Описание"
          class="w-full p-2 border rounded"
        ></textarea>
        <input
          v-model="form.price"
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
        <div v-if="form.imagePreviewUrl" class="mt-2">
          <img
            :src="form.imagePreviewUrl"
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
      <div v-if="!filteredProducts.length" class="text-center text-gray-500">Нет товаров в этой категории</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in filteredProducts"
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
