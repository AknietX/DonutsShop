<script setup>
import { ref,onMounted } from 'vue';
import supabase from '../supabase'

const donuts = ref([])
const title = ref('')
const price = ref(null)
const user = ref(null)

const fetchDonuts = async () => {

  const { data, error } = await supabase.from('donuts').select('*')
  if (!error) donuts.value = data

}

onMounted(async ()=>{
  const { data: authData } = await supabase.auth.getUser();
  user.value = authData?.user; // Убедитесь, что authData есть и user существует.

  fetchDonuts()
})

const addDonut = async () => {
  if (!title.value || !price.value) return

  const { error } = await supabase.from('donuts').insert([
    { title: title.value, price: price.value, user_id: user.value.id }
  ])

  if (error) {
    console.error('Ошибка при добавлении:', error.message)
  } else {
    title.value = ''
    price.value = null

    await fetchDonuts()
  }
}
</script>

<template>
   <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Мои Пончики</h1>

    <div class="mb-6">
      <input v-model="title" placeholder="Название пончика" class="border p-2 mr-2" />
      <input v-model="price" type="number" placeholder="Цена" class="border p-2 mr-2" />
      <button @click="addDonut" class="bg-pink-500 text-white px-4 py-2 rounded">Добавить</button>
    </div>

    <ul class="space-y-2">
      <li v-for="donut in donuts" :key="donut.id" class="border p-2 rounded">
        🍩 {{ donut.title }} — {{ donut.price }} ₸
      </li>
    </ul>
  </div>
</template>

<style>

</style>
