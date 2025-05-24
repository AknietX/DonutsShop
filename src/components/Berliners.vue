<script setup>
import { onMounted, ref } from 'vue';
import supabase from '../supabase';
import DrawerMain from './bodyDrawer.vue';

const items = ref([]);
const cart = ref([]);

const fetchProducts = async () => {
  try {
    const { data } = await supabase
      .from('berliner')
      .select('*')
      .eq('category', 'products')
      .order('created_at', { ascending: false });
    items.value = data;
  } catch (err) {
    console.log(err);
  }
};

const addToCart = (product) => {
  const existingItem = cart.value.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({
      ...product,
      quantity: 1
    });
  }
};

const decreaseQuantity = (productId) => {
  const item = cart.value.find(item => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    removeFromCart(productId);
  }
};

const removeFromCart = (productId) => {
  cart.value = cart.value.filter(item => item.id !== productId);
};

const clearCart = () => {
  cart.value = [];
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="p-4 sm:p-10 md:px-20 md:pt-8 sm:pt-25 pt-10 lg:pt-15 xl:px-80">
    <div class="flex justify-between">
      <div class="grid grid-cols-2 min-[500px]:grid-cols-3 gap-4 w-[100%] min-[780px]:w-[60%]">
        <div class="flex flex-col" v-for="item in items" :key="item.id">
          <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
            <img class="w-full object-cover" :src="item.image_url" :alt="item.title">
            <div class="p-0 max-[400px]:py-4 max-[400px]:px-1 min-[400px]:p-4 flex flex-col flex-grow">
              <h2 class="font-bold text-lg mb-2 line-clamp-2">{{ item.title }}</h2>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow overflow-y-auto">{{ item.description }}</p>
              <div class="flex items-center justify-between mt-auto">
                <span class="font-bold text-[14px] text-red-500">{{ item.price }} с</span>
                <div class="flex items-center w-[60%]">
                  <button
                    v-if="cart.find(cartItem => cartItem.id === item.id)?.quantity > 0"
                    @click.stop="decreaseQuantity(item.id)"
                    class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-l-lg hover:bg-red-600 transition"
                  >
                    <span class="text-lg font-bold">−</span>
                  </button>
                  <button
                    @click.stop="addToCart(item)"
                    :class="{
                      'bg-red-500 text-white h-8 px-4 py-1 hover:bg-red-600 transition': true,
                      'rounded-l-none': cart.find(cartItem => cartItem.id === item.id)?.quantity > 0,
                      'rounded-l-lg': !cart.find(cartItem => cartItem.id === item.id)?.quantity > 0,
                      'px-6': cart.find(cartItem => cartItem.id === item.id)?.quantity > 1
                    }"
                  >
                    {{ cart.find(cartItem => cartItem.id === item.id)?.quantity > 0
                      ? `×${cart.find(cartItem => cartItem.id === item.id).quantity}`
                      : `В корзину`
                    }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DrawerMain
        :cart="cart"
        :removeFromCart="removeFromCart"
        :clearCart="clearCart"
        :decreaseQuantity="decreaseQuantity"
        :addToCart="addToCart"
      />
    </div>
  </div>
</template>

<style>
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
