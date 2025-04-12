<script setup></script>

<template>
  <div class="w-full h-full bg-[#FFDAE8] pb-10 xl:pb-20 relative">
    <img class="absolute top-[10%] left-[1%] md:top-[18%] sm:top-[40%] lg:top-[25%] xl:top-[25%] xl:left-[5%] w-[20%] sm:w-[11%]" src="../assets/images/left_donut.png" alt="">
  <header class="px-3 w-full h-full">
    <div class="xl:px-96 lg:px-40 md:px-20 sm:px-10 p-0">

      <div class="left-0 top-0 fixed z-50 bg-[#FFDAE8] w-full xl:px-96 lg:px-40 md:px-20 sm:px-10 px-3">

        <div class=" flex justify-between items-center w-[100%] py-3 px-3 rounded-3xl">

          <nav class="flex w-[70%]">
            <ul class="flex w-[100%] justify-between xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[10px]">
              <li class="text-[#960101] font-bold">Главная</li>
              <li class="text-[#960101] font-bold">О нас </li>
              <li class="text-[#960101] font-bold">Каталог</li>
              <li class="text-[#960101] font-bold">Доставка и оплата</li>
            </ul>
          </nav>

          <div class="flex justify-center items-center">
            <span class="text-[#960101] xl:text-[21px] lg:text-[18px] md:text-[14px] text-[10px]">+996 507-00-49-32</span>
            <div class="hidden sm:flex justify-center">
              <img class="xl:h-9 xl:w-9 lg:w-7 lg:h-7 h-5 w-5  ml-3" src="../assets/images/drawer.png" alt="">
              <span class="text-[#960101] mt-1 xl:text-[20px] lg:text-[16px] text-[10px] ml-1">0</span>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-4/5 flex flex-col items-center mt-9 pb-0 mx-auto md:mx-0 ">
        <span id="Below_header" class="xl:text-[118px] lg:text-[90px] md:text-[50px] sm:text-[40px] text-[30px] absolute text-[#501800] mr-10 mt-3">Koreana</span>
        <h1 class="mb-0 xl:text-[200px] lg:text-[150px] md:text-[110px] sm:text-[80px] text-[70px] font-black text-[#FF637C] mx-auto">Donuts</h1>
      </div>
      <div>
        <div class="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div class="xl:grid flex-col grid-cols-1 gap-y-10 w-[45%] mx-auto xl:text-left lg:text-left md:text-left text-center">
            <p class="w-[100%] md:w-[80%] text-[#450000] font-semibold xl:text-[22px] lg:text-[20px] md:text-[15px] text-[12px]">
              Это не просто превосходный десерт, но и достойное угощение которое можно использовать в качестве подарка
            </p>
            <button class="transition active:bg-[#7a0101] hover:bg-[#960101] mt-5 mb-10 2xl:text-[25px] md:text-[15px] text-[12px] 2xl:py-5 py-3 xl:py-3 px-4 bg-[#FF637C] rounded-[40px] max-[426px]:w-[100%] font-bold w-[78%] text-white">Перейти в каталог</button>
            <div class="flex hidden sm:flex justify-between w-[100%]">
              <div class="flex items-center text-[#450000]"><img class="w-[30%] " src="../assets/images/Vector.png" alt="Натуральные ингредиенты"> <p class="ml-0 xl:text-[18px] xl:ml-3 lg:text-[14px] md:text-[13px] text-[10px]">Из натуральных ингридиентов</p></div>
              <div class="flex items-center text-[#450000]"><img class="w-[30%] " src="../assets/images/home.png" alt="дом"> <p class="ml-0 xl:ml-3 xl:text-[18px] lg:text-[16px] md:text-[13px] text-[10px]">Доставим до самого дома</p></div>
            </div>
          </div>
          <img class="xl:hidden w-[60%] h-auto mx-auto" src="../assets/images/ponchiki.png" alt="Пончики">
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
    font-family: 'nunito', sans-serif;
  }
#Below_header{
  font-family: 'Satisfy', 'cursive';
}
p{
  font-family: 'nunito', sans-serif;
}
</style>

