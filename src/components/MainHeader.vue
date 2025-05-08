<script setup>
import { useRouter } from 'vue-router';
import NavigationBar from '@/components/NavigationBar.vue';

const router = useRouter();

function goToCatalog() {
  router.push('/login');
}
</script>

<template>
  <div class="bg-[url('../assets/images/header/header_bg.png')] z-10 bg-no-repeat bg-bottom bg-cover w-full h-full xl:pb-30 pb-10 relative">
    <NavigationBar />

    <img
      class="absolute top-[20%] left-[1%] md:top-[18%] sm:top-[50%] lg:top-[25%] xl:top-[25%] xl:left-[5%] w-[15%] sm:w-[11%]"
      src="../assets/images/header/left_donut.png"
      alt="Decoration"
    >

    <header class="py-3 w-full h-full">
      <div class="xl:px-80 lg:px-40 md:px-20 sm:px-10 p-0">
        <!-- Заголовок и подзаголовок -->
        <div class="relative w-4/5 flex items-center mt-10 md:mt-10 pb-0 max-[640px]:mx-auto">
          <span id="Below_header" class="xl:text-[98px] lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] absolute text-[#501800] top-0 left-[20%] min-[612px]:left-[28%] sm:left-18 md:left-25 xl:left-36 font-[400] mr-14 mt-0" style="color: rgba(215, 112, 112, 1);">
            koreana
          </span>
          <h1 class="mb-0 xl:text-[150px] lg:text-[130px] md:text-[110px] sm:text-[80px] min-[426px]:text-[50px] text-[40px] font-[400] left-0 max-[640px]:mx-auto" style="color: rgba(113, 45, 45, 1);">
            Berliners
          </h1>
        </div>

        <!-- Основной контент -->
        <div class="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div class="xl:grid flex-col min-[480px]:w-[60%] min-[510px]:w-[60%] grid-cols-1 gap-y-10 w-[80%] min-[508px]:w-[45%] mx-auto xl:text-left lg:text-left md:text-left text-center">
            <p id="desc" class="w-[100%] max-[500px]:w-[80%] mx-0 max-[640px]:mx-auto md:w-[84%] font-[600] xl:text-[20px] lg:text-[16px] md:text-[13px] sm:text-[11px] min-[410px]:text-[12px] text-[11px]" style="color: rgba(69, 0, 0, 1);">
              Это не просто превосходный десерт, но и достойное угощение которое можно использовать в качестве подарка
            </p>

            <button
              @click="goToCatalog"
              class="font-unbounded transition active:bg-[#7a0101] hover:bg-[#960101] mt-5 mb-10 2xl:text-[25px] md:text-[15px] text-[12px] 2xl:py-5 py-3 xl:py-3 px-4 bg-[#FF637C] rounded-[40px] max-[426px]:w-[70%] font-bold w-[68%] text-white"
            >
              Перейти в каталог
            </button>

            <!-- Преимущества (десктоп) -->
            <div class="hidden sm:flex justify-between w-full">
              <div class="flex items-center" style="color: rgba(69, 0, 0, 1);">
                <img class="w-[30%]" src="../assets/images/header/natural.png" alt="Натуральные ингредиенты">
                <p class="ml-0 xl:text-[18px] xl:ml-3 lg:text-[14px] md:text-[13px] text-[10px]">
                  Из натуральных ингридиентов
                </p>
              </div>
              <div class="flex items-center" style="color: rgba(69, 0, 0, 1);">
                <img class="w-[30%]" src="../assets/images/header/home.png" alt="Доставка">
                <p class="ml-0 xl:ml-3 xl:text-[18px] lg:text-[16px] md:text-[13px] text-[10px]">
                  Доставим до самого дома
                </p>
              </div>
            </div>
          </div>

          <!-- Изображения пончиков -->
          <img class="xl:hidden w-[70%] min-[482px]:w-[60%] h-auto mx-auto" src="../assets/images/header/donut.png" alt="Пончики">
          <img class="hidden xl:block w-[60%] h-[60%]" src="../assets/images/header/donut.png" alt="Пончики">
        </div>

        <!-- Преимущества (мобильные) -->
        <div class="flex sm:hidden justify-between w-[60%] mt-5 mx-auto sm:px-10 text-[#450000]">
          <div class="flex items-center w-[48%]">
            <img class="w-[20%]" src="../assets/images/header/natural.png" alt="Натуральные ингредиенты">
            <p class="text-[10px] ml-1">Из натуральных ингридиентов</p>
          </div>
          <div class="flex items-center w-[48%]">
            <img class="w-[20%]" src="../assets/images/header/home.png" alt="Доставка">
            <p class="text-[10px] ml-1">Доставим до самого дома</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Корзина (мобильные) -->
    <div class="fixed sm:hidden bottom-5 right-5">
      <div class="flex justify-center">
        <img class="h-10 w-10 ml-3" src="../assets/images/header/drawer.png" alt="Корзина">
        <span class="text-[#960101] mt-1 text-[24px] ml-1 cursor-pointer">0</span>
      </div>
    </div>
  </div>
</template>

<style>
/* Шрифты */
h1 {
  font-family: 'Square721', sans-serif;
}

#Below_header {
  font-family: 'Pacifico', cursive;
}

#desc {
  font-family: 'Unbounded', sans-serif;
}
</style>
