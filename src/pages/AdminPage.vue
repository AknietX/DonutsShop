<script setup>
import { ref, onMounted, computed } from 'vue'
import supabase from '../supabase.js'

const user = ref(null)
const allProducts = ref([])
const allDonuts = ref([])
const loading = ref(true)
const activeCategory = ref('products')
const activeTable = ref('berliner') // Добавляем переключатель таблиц

// Форма
const form = ref({
  title: '',
  description: '',
  price: '',
  imageFile: null,
  imagePreviewUrl: '',
  items: '',
  count: ''
})

// Загрузка товаров
const fetchProducts = async () => {
  try {
    const { data } = await supabase
      .from('berliner')
      .select('*')
      .order('created_at', { ascending: false })
    allProducts.value = data || []

    const { data: donutsData } = await supabase
      .from('donuts')
      .select('*')
      .order('created_at', { ascending: false })
    allDonuts.value = donutsData || []
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }
}

// Удаление
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

    await supabase.from(activeTable.value).delete().eq('id', product.id)
    await fetchProducts()
  } catch (error) {
    console.error('Ошибка при удалении:', error)
    alert('Не удалось удалить товар')
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

    const payload = {
      title: form.value.title,
      description: form.value.description,
      price: +form.value.price,
      user_id: user.value.id,
      image_url: imageUrl,
      category: activeCategory.value
    }

    if (activeCategory.value === 'sets') {
      payload.items = form.value.items
      payload.count = form.value.count
    }

    await supabase.from(activeTable.value).insert([payload])

    // Очистка формы
    form.value = {
      title: '',
      description: '',
      price: '',
      imageFile: null,
      imagePreviewUrl: '',
      items: '',
      count: ''
    }

    await fetchProducts()

  } catch (error) {
    console.error('Ошибка при добавлении:', error)
    alert('Не удалось добавить товар')
  }
}

// Фильтрация
const filteredProducts = computed(() => {
  const source = activeTable.value === 'berliner' ? allProducts.value : allDonuts.value
  return source.filter(p => p.category === activeCategory.value)
})

// Авторизация и старт
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
      <!-- Переключатель таблиц -->
      <div class="flex space-x-4 mb-4">
        <button
          @click="activeTable = 'berliner'"
          :class="{'bg-blue-600 text-white': activeTable === 'berliner'}"
          class="px-4 py-2 rounded border"
        >
          Berliner
        </button>
        <button
          @click="activeTable = 'donuts'"
          :class="{'bg-blue-600 text-white': activeTable === 'donuts'}"
          class="px-4 py-2 rounded border"
        >
          Donuts
        </button>
      </div>

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
        <h2 class="text-xl font-semibold capitalize">
          {{ activeTable === 'berliner' ? 'Berliner' : 'Donuts' }} - {{ activeCategory === 'sets' ? 'Набор' : activeCategory }}
        </h2>

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

        <!-- Только для наборов -->
        <textarea
          v-if="activeCategory === 'sets'"
          v-model="form.items"
          placeholder='Состав набора (напр. клубничный, банановый, шоколадный)'
          class="w-full p-2 border rounded"
          rows="4"
        ></textarea>

        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                 file:rounded file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <textarea
          v-if="activeCategory === 'sets'"
          v-model="form.count"
          placeholder='Кол-во (напр. х2, х4, х6)'
          class="w-full p-2 border rounded"
          rows="4"
        ></textarea>

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
      <div v-if="!filteredProducts.length" class="text-center text-gray-500">
        Нет товаров в этой категории
      </div>

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

          <!-- Если это набор, показываем состав -->
          <div v-if="activeCategory === 'sets' && product.items" class="mt-2">
            <p class="text-sm font-semibold">Состав:</p>
            <ul class="list-disc list-inside text-sm text-gray-700">
              <li>
                {{ product.items }}
              </li>
            </ul>
          </div>

          <button
            @click="deleteProduct(product)"
            class="text-red-500 hover:underline mt-2 inline-block"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
