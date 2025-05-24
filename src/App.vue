<script setup>
import MainFooter from './components/MainFooter.vue';
import { provide, ref, computed, onMounted, watch, } from 'vue';
import Drawer from './components/DrawerList.vue';
import supabase from './supabase.js'


const isDrawerOpened = ref(false)
const allProducts = ref([])
const activeCategory = ref('products')


// состояние корзины
const productStates = ref({})

function incrementQuantity(product) {
  if (!productStates.value[product.id]) {
    productStates.value[product.id] = {
      quantity: 1,
      price: product.price,
    }
  } else {
    productStates.value[product.id].quantity++
  }
}

function decrementQuantity(productId) {
  if (productStates.value[productId]?.quantity > 0) {
    productStates.value[productId].quantity--
  }
}

// provide
provide('product', {
  productStates,
  incrementQuantity,
  decrementQuantity
})

const openDrawer = () =>{
  isDrawerOpened.value = true
}
const closeDrawer = ()=>{
  isDrawerOpened.value = false
}

const lockScroll = () => {
  document.body.classList.add('overflow-hidden');
};

const unlockScroll = () => {
  document.body.classList.remove('overflow-hidden');
};

const fetchProducts = async () => {
  try {
    const { data } = await supabase
      .from('berliner')
      .select('*')
      .order('created_at', { ascending: false })
    allProducts.value = data
    localStorage.setItem('products', JSON.stringify(data))
    console.log(allProducts.value)
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }
}

const filteredProducts = computed(() => {
  const StorageData = ref()
  StorageData.value = JSON.parse(localStorage.getItem('products'))
  return StorageData.value.filter(product => product.category === activeCategory.value)
})
onMounted(()=>{
  fetchProducts()
})
provide('cart',{
  openDrawer,
  filteredProducts,
  activeCategory,
  closeDrawer
})
watch(isDrawerOpened, (newValue) => {
  if (newValue) {
    lockScroll(); // Блокируем скролл при открытии
  } else {
    unlockScroll(); // Разблокируем скролл при закрытии
  }
});
</script>

<template>
  <Drawer v-if="isDrawerOpened" />

  <div class="">
    <router-view />
    <router-link to="/"></router-link>
    <router-link to="/admin"></router-link>

  </div>

  <MainFooter />
</template>


<style>
body{
  background-color: white;
}
p{
  font-family: 'nunito', 'sans-serif';
}
</style>
