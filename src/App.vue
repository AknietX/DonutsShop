<script setup>


import HeaderEtc from './components/Header-Etc.vue';
import MainHeader from './components/MainHeader.vue';

import { ref,onMounted } from 'vue';
import supabase from './supabase'

const donuts = ref([])
const name = ref('')
const price = ref(null)

const fetchDonuts = async () => {
  const { data, error } = await supabase.from('donuts').select('*')
  if (!error) donuts.value = data
}

onMounted(fetchDonuts)

const addDonut = async () => {
  if (!name.value || !price.value) return

  const { error } = await supabase.from('donuts').insert([
    { name: name.value, price: price.value }
  ])

  if (error) {
    console.error('Ошибка при добавлении:', error.message)
  } else {
    name.value = ''
    price.value = null
    await fetchDonuts()
  }
}

// Пример использования

</script>

<template>
  <MainHeader />
  <HeaderEtc />
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Мои Пончики</h1>

    <div class="mb-6">
      <input v-model="name" placeholder="Название пончика" class="border p-2 mr-2" />
      <input v-model="price" type="number" placeholder="Цена" class="border p-2 mr-2" />
      <button @click="addDonut" class="bg-pink-500 text-white px-4 py-2 rounded">Добавить</button>
    </div>

    <ul class="space-y-2">
      <li v-for="donut in donuts" :key="donut.id" class="border p-2 rounded">
        🍩 {{ donut.name }} — {{ donut.price }} ₸
      </li>
    </ul>
  </div>
</template>


<style>
body{
  background-color: white;
}

</style>
