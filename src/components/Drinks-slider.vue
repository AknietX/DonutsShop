<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import supabase from '../supabase.js';

const sliderImages = ref([]);
const products = ref([]);
const currentIndex = ref(0);
let intervalId = null;

const isImageFile = (fileName) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];
  return imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
};

const fetchProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('donuts')
      .select('title, price, image_url, category')
      .eq('category', 'drinks') // Фильтруем сразу на сервере
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Ошибка загрузки продуктов:', error);
    return [];
  }
};

const fetchSliderImages = async () => {
  try {
    const productsData = await fetchProducts();

    if (!productsData.length) {
      console.log('Нет продуктов в категории "drinks"');
      return;
    }

    const validImages = [];
    const validProducts = [];

    for (const product of productsData) {
      if (product.image_url) {
        const img = new Image();
        img.src = product.image_url;
        const loaded = await new Promise((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });

        if (loaded) {
          validImages.push(product.image_url);
          validProducts.push({
            title: product.title,
            price: product.price,
          });
        }
      }
    }

    sliderImages.value = validImages;
    products.value = validProducts;
    console.log('Loaded products:', validProducts);
  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  }
};

const nextImage = () => {
  if (sliderImages.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % sliderImages.value.length;
  }
};

onMounted(async () => {
  await fetchSliderImages();

  if (sliderImages.value.length > 1) {
    intervalId = setInterval(nextImage, 3000);
  }
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>


<template>
  <div class="image-slider relative">
    <template v-if="sliderImages.length > 0">
      <img
        :src="sliderImages[currentIndex]"
        :alt="products[currentIndex]?.title || 'Изображение продукта'"
        class="slider-image"
        @error="nextImage()"
      />
      <!-- <div class="flex justify-between px-3 h-[10%] w-full items-center rounded-b-lg absolute bottom-0 opacity-80" style="background: #FFFBFB">
        <div class="w-[50%]">{{ products[currentIndex]?.title || 'Название продукта' }}</div>
        <div class="w-[22%] h-[100%] flex justify-between items-center ">
          <div>цена:</div>
          <div>{{ products[currentIndex]?.price || '0' }}с</div>
        </div>
      </div> -->
    </template>
    <div v-else class="placeholder">
      Изображения не найдены
    </div>
  </div>
</template>

<style scoped>
/* Ваши существующие стили остаются без изменений */
.image-slider {
  position: relative;
  height: 39%;
  width: 100%;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  border-radius: 18px 18px 18px 18px;
}
</style>

