<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import supabase from '../supabase.js';

const sliderImages = ref([]);
const products = ref([]);
const currentIndex = ref(0);
let intervalId = null;


const fetchProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('donuts')
      .select('title, price, image_url, category')// Фильтруем сразу на сервере
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
      console.log('Нет продуктов в категории "products"');
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
  <div class="image-slider mt-[12%] min-[380px]:mt-[15%] sm:mt-[9%] md:mt-[9%] lg:mt-[5%] xl:mt-[2%] max-h-[600px] h-[57%]">
    <template v-if="sliderImages.length > 0">
      <img
        :src="sliderImages[currentIndex]"
        :alt="products[currentIndex]?.title || 'Изображение продукта'"
        class="slider-image shadow-lg"
        @error="nextImage()"
      />
      <div class="relative px-3 h-[10%] w-full items-center rounded-b-lg ">
        <div class="w-[18%] h-[100%]">
          <div id='price' class="absolute right-3 text-[#960101] text-[15px] md:text-[18px] top-0 min-[380px]:top-2 md:top-3">{{ products[currentIndex]?.price || '0' }} сом</div>
        </div>
      </div>
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
  width: 100%;

}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  border-radius: 18px 18px 18px 18px;
}
@media (min-width: 640px) {
  #price{
  font-family: 'Square721', sans-serif;
}}


</style>
