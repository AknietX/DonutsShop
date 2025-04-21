

<script setup>
import router from '@/router';
function goToAdmin() {
  router.push('/admin')
}

</script>

<template>
  <div class="bg-[url('../assets/images/rec.jpg')] bg-no-repeat bg-bottom bg-cover w-full h-full xl:pb-30 pb-10  relative">
    <img class="absolute top-[10%] left-[1%] md:top-[18%] sm:top-[40%] lg:top-[25%] xl:top-[25%] z-30 xl:left-[5%] w-[15%] sm:w-[11%]" src="../assets/images/left_donut.png" alt="">
  <header class="px-3 w-full h-full">
    <div class="xl:px-80 lg:px-40 md:px-20 sm:px-10 p-0">

      <div class="bg-[url('../assets/images/rec.jpg')] bg-cover  hidden md:block  left-0 top-0 fixed z-50 w-full xl:px-[360px] lg:px-40 md:px-20 sm:px-10 px-3">

        <div id="easy-win" class=" flex justify-between relative items-center w-[100%] py-3 px-3 rounded-3xl">

          <img class="" src="../assets/images/header-logo.png" alt="">
          <nav class="flex w-[70%]">
            <ul class="flex w-[100%] justify-between xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[10px]">
              <li class="text-[#960101] font-bold">Главная</li>
              <li class="text-[#960101] font-bold">О нас </li>
              <li class="text-[#960101] font-bold">Каталог</li>
              <li class="text-[#960101] font-bold">Доставка и оплата</li>
            </ul>
          </nav>

          <div class="flex justify-center items-center">
            <div class="hidden sm:flex justify-center">
              <img class="xl:h-9 xl:w-9 lg:w-7 lg:h-7 h-5 w-5  ml-3" src="../assets/images/drawer.png" alt="">
              <span class="text-[#960101] mt-1 xl:text-[20px] lg:text-[16px] text-[10px] ml-1">0</span>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-4/5 flex items-center mt-0 md:mt-20 pb-0 max-[640px]:mx-auto z-40">
        <span id="Below_header" class="xl:text-[98px] lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] absolute text-[#501800] top-0 left-[20%]  min-[612px]:left-[28%] sm:left-18 md:left-25 xl:left-36 font-[400] mr-14 mt-0" style="color: rgba(215, 112, 112, 1);">koreana</span>
        <h1 class="mb-0 xl:text-[150px] lg:text-[130px] md:text-[110px] sm:text-[80px] min-[426px]:text-[70px] text-[60px] font-[400] left-0 max-[640px]:mx-auto" style="color: rgba(113, 45, 45, 1);">Donuts</h1>
      </div>
      <div>
        <div class="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div class="xl:grid flex-col min-[480px]:w-[60%] min-[510px]:w-[60%] grid-cols-1 gap-y-10 w-[80%] min-[508px]:w-[45%] mx-auto xl:text-left lg:text-left md:text-left text-center">
            <p id="desc" class="w-[100%] max-[500px]:w-[80%] mx-0 max-[640px]:mx-auto md:w-[84%] font-[600] xl:text-[20px] lg:text-[16px] md:text-[13px] sm:text-[11px] min-[410px]:text-[12px] text-[11px]" style="color: rgba(69, 0, 0, 1);">
              Это не просто превосходный десерт, но и достойное угощение которое можно использовать в качестве подарка
            </p>
            <button @click="goToAdmin" class="font-unbounded transition active:bg-[#7a0101] hover:bg-[#960101] mt-5 mb-10 2xl:text-[25px] md:text-[15px] text-[12px] 2xl:py-5 py-3 xl:py-3 px-4 bg-[#FF637C] rounded-[40px] max-[426px]:w-[70%] font-bold w-[68%] text-white">Перейти в каталог</button>
            <div class="flex hidden sm:flex justify-between w-[100%]">
              <div class="flex items-center" style="color: rgba(69, 0, 0, 1);"><img class="w-[30%] " src="../assets/images/Vector.png" alt="Натуральные ингредиенты"> <p class="ml-0 xl:text-[18px] xl:ml-3 lg:text-[14px] md:text-[13px] text-[10px]">Из натуральных ингридиентов</p></div>
              <div class="flex items-center" style="color: rgba(69, 0, 0, 1);"><img class="w-[30%] " src="../assets/images/home.png" alt="дом"> <p class="ml-0 xl:ml-3 xl:text-[18px] lg:text-[16px] md:text-[13px] text-[10px]">Доставим до самого дома</p></div>
            </div>
          </div>
          <img class="xl:hidden w-[70%] min-[482px]:w-[60%] h-auto mx-auto" src="../assets/images/ponchiki.png" alt="Пончики">
          <!-- Картинка пончиков на больших экранах -->
          <img class="hidden xl:block w-[60%] h-[60%]" src="../assets/images/ponchiki.png" alt="Пончики">
        </div>
        <div class="flex sm:hidden justify-between w-[60%] mt-5 mx-auto sm:px-10 text-[#450000]">
          <div class="flex items-center w-[48%]">
            <img class="w-[20%]" src="../assets/images/Vector.png" alt="Натуральные ингредиенты">
            <p class="text-[10px] ml-1">Из натуральных ингридиентов</p>
          </div>
          <div class="flex items-center w-[48%]">
            <img class="w-[20%]" src="../assets/images/home.png" alt="дом">
            <p class="text-[10px] ml-1">Доставим до самого дома</p>
          </div>
        </div>

      </div>
      <div class="fixed sm:hidden bottom-5 right-5 bg">
        <div class="flex justify-center">
          <img class="h-10 w-10  ml-3" src="../assets/images/drawer.png" alt="">
          <span class="text-[#960101] mt-1 text-[24px] ml-1">0</span>
        </div>
      </div>

    </div>
  </header>
</div>
</template>

<style>
h1 {
    font-family: 'Square721', 'sans-serif'
  }
#Below_header{
  font-family: 'Pacifico', 'cursive';
}
#easy-win{
  font-family: 'Square721', 'sans-serif';
  font-weight: 400;

}
#desc{
    font-family: 'Unbounded', 'sans-serif';
}
</style>

