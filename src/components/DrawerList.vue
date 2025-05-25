<script setup>
import { ref, inject, computed, provide } from 'vue';
import drawer from './MainDrawer.vue'

const activePage = ref("Берлинеры")
const page = [
  {name:'Берлинеры', category:'products'},
  {name:'Напитки', category:'drinks'},
  {name:'Выпечка', category:'makarons'},
  {name:'Мороженное', category:'cream'},
  {name:'Новинка', category:'new'}
]

const { filteredProducts, activeCategory, closeDrawer } = inject('cart')

const productStates = ref({})

const totalPrice = computed(() => {
  return Object.values(productStates.value).reduce((sum, item) => {
    return item.quantity > 0 ? sum + (item.quantity * item.price) : sum
  }, 0)
})

function incrementQuantity(product) {
  if (!productStates.value[product.id]) {
    productStates.value[product.id] = {
      quantity: 1,
      price: product.price
    }
  } else {
    productStates.value[product.id].quantity++
  }
}

function decrementQuantity(productId) {
  if (productStates.value[productId] && productStates.value[productId].quantity > 0) {
    productStates.value[productId].quantity--
  }
}

const selectedProducts = computed(() => {
  return filteredProducts.value
    .filter(product => productStates.value[product.id]?.quantity > 0)
    .map(product => ({
      ...product,
      quantity: productStates.value[product.id].quantity
    }))
})

provide('product',{
  productStates,
  decrementQuantity,
  incrementQuantity
})

function removeItem(productId) {
  if (productStates.value[productId]) {
    delete productStates.value[productId]
  }
}

function clearCart() {
  productStates.value = {}
}

function placeOrder() {
  if (selectedProducts.value.length === 0) return;

  const productsList = selectedProducts.value.map(item =>
    `${item.title} (${item.quantity} шт.)`
  ).join(', ');

  const message = `Здравствуйте, хотели заказать: ${productsList}. Общая сумма: ${totalPrice.value.toLocaleString()} сом.`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '996707444938';

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  clearCart();
}
</script>

<template>
  <div class="fixed w-full h-full bg-black opacity-50 z-30"></div>
  <div class="fixed w-full h-full flex items-center justify-center z-40">
    <div class="xl:w-[65%] lg:w-[80%] max-[780px]:mt-[60%] h-full bg-[#E6E8EA] rounded-t-lg relative">
      <ul class="flex w-full">
        <li v-for="item in page" :key="item.name"
        @click="activePage = item.name; activeCategory = item.category"
        class="p-2 rounded-t-lg"
        :class="{
              'bg-white': activePage === item.name,
              'bg-[#E6E8EA]': activePage !== item.name
            }">
          {{ item.name }}
        </li>
      </ul>
      <img @click="closeDrawer" class="absolute right-3 top-3 w-5 cursor-pointer" src="../assets/images/catalog/drawer/close1.png" alt="">
      <div class="w-[100%] h-[98%] bg-white md:px-8 p-0 max-[400px]:py-4 max-[400px]:px-1 py-5">
        <h1 class="text-[#450000] max-[472px]:text-[12px] text-[14px] sm:text-[20px] md:text-[22px] md:text-[23px] xl:text-[30px] font-[900]">Ассортимент</h1>
        <div class="block min-[780px]:flex min-[780px]:justify-between items-center">
          <div class="mt-5 grid grid-cols-2 min-[780px]:grid-cols-3 md:pr-5 w-[100%] min-[780px]:w-[65%] h-full gap-4 gap-y-6 max-h-[520px] lg:max-h-[700px] xl:max-h-[700px] overflow-y-auto scrollbar-hidden">
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow" v-for="item in filteredProducts" :key="item.id">
              <img
                :src="item.image_url"
                :alt="item.title"
                class="w-full object-cover"
              >
              <div class="p-4 flex flex-col flex-grow">
                <h2 class="font-bold text-lg mb-2 line-clamp-2">{{ item.title }}</h2>
                <p class="text-gray-600 text-xs mb-2 flex-grow overflow-hidden text-ellipsis line-clamp-3">{{ item.description }}</p>
                <div class="flex items-center justify-between mt-auto w-[100%]">
                  <span class="font-bold text-red-500">{{ item.category === 'cream' ? ' 1шт ' : ' ' }}{{ item.price }}с</span>
                  <div class="flex items-center">
                    <button
                      @click="decrementQuantity(item.id)"
                      v-if="productStates[item.id]?.quantity > 0"
                      class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-l-lg hover:bg-red-600 transition"
                    >
                      <span class="text-lg font-bold">−</span>
                    </button>
                    <button
                      @click="incrementQuantity(item)"
                      :class="{
                        'bg-red-500 text-white h-8 px-4 py-1 hover:bg-red-600 transition': true,
                        'rounded-l-none': productStates[item.id]?.quantity > 0,
                        'rounded-l-lg': !productStates[item.id]?.quantity > 0,
                        'px-6': productStates[item.id]?.quantity > 1
                      }"
                    >
                      {{ productStates[item.id]?.quantity > 0
                        ? `× ${productStates[item.id]?.quantity}`
                        : `В корзину`
                      }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden max-[780px]:block bg-white left-0 w-[100%] h-40 px-3 pt-5">
            <div class="mt-auto py-4 border-t">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Итого:</span>
                <span class="text-xl font-bold">{{ totalPrice.toLocaleString() }} c</span>
              </div>
              <button
                @click="placeOrder"
                class="w-full bg-red-500 text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition"
                :class="{'opacity-50 cursor-not-allowed': selectedProducts.length === 0}"
                :disabled="selectedProducts.length === 0"
              >
                Оформить заказ
              </button>
            </div>
          </div>

          <drawer
            :total-price="totalPrice"
            :selected-products="selectedProducts"
            @remove-item="removeItem"
            @clear-cart="clearCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
