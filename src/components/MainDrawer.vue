<script setup>
defineProps({
  totalPrice: {
    type: Number,
    required: true
  },
  selectedProducts: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['remove-item', 'clear-cart'])

function removeItem(productId) {
  emit('remove-item', productId)
}

function clearCart() {
  emit('clear-cart')
}
</script>

<template>
  <div class=" bg-white shadow-md w-[30%] h-[700px] top-[8%] right-10 p-5 rounded-xl block max-[780px]:hidden relative">
    <div class="flex justify-between items-center mb-4">
      <h1 class="xl:text-[20px] font-bold">Корзина</h1>
      <button
        @click="clearCart"
        class="text-gray-500 hover:text-gray-700 text-sm"
        v-if="totalPrice > 0"
      >
        Очистить
      </button>
    </div>

    <div v-if="totalPrice > 0" class="h-[90%] flex flex-col">
      <!-- Список товаров -->
      <div class="flex-1 overflow-y-auto">
        <div v-for="product in selectedProducts" :key="product.id" class="flex items-start py-3 border-b border-slate-400 group">
          <img
            :src="product.image_url"
            :alt="product.title"
            class="w-16 h-16 object-cover rounded-lg"
          >
          <div class="ml-3 flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-medium text-sm">{{ product.title }}</h3>
                <p class="text-gray-500 text-xs line-clamp-1">{{ product.description }}</p>
              </div>
              <button
                @click="removeItem(product.id)"
                class="text-black hover:text-red-500 transition-colors"
              >

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            <div class="flex justify-between items-center mt-2">
              <span class="text-sm text-gray-500">× {{ product.quantity }}</span>
              <span class="font-semibold">{{ (product.quantity * product.price).toLocaleString() }} c</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Итого и кнопка -->
      <div class="mt-auto py-4 border-t">
        <div class="flex justify-between items-center">
          <span class="font-semibold">Итого:</span>
          <span class="text-xl font-bold">{{ totalPrice.toLocaleString() }} c</span>
        </div>
        <button class="w-full bg-red-500 text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition">
          Оформить заказ
        </button>
      </div>
    </div>

    <div v-else class="h-full flex flex-col items-center justify-center">
      <img class="w-[90%] max-w-[200px] mb-6" src="../assets/images/catalog/drawer/drawer.png" alt="Корзина пуста">
      <p class="text-gray-500 text-lg">Корзина пуста</p>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
