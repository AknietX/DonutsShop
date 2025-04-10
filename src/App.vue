<script setup></script>





<template>
  <div class="w-full h-full bg-[#FFDAE8] pb-50">
    <header class="p-3 w-full h-full">
      <div class="xl:px-96 lg:px-40 md:px-20 sm:px-10 p-0]">

        <div class="flex justify-between items-center w-full">
          <img class="xl:h-10 xl:w-10 h-7 w-7 " src="../src/assets/images/logo.png" alt="">

          <nav class="flex w-[70%]">
            <ul class="flex w-[100%] justify-between xl:text-[21px] lg:text-[16px] md:text-[12px] text-[10px]">
              <li class="text-[#960101] font-bold">Главная</li>
              <li class="text-[#960101] font-bold">История</li>
              <li class="text-[#960101] font-bold">О нас </li>
              <li class="text-[#960101] font-bold">Каталог продукции</li>
              <li class="text-[#960101] font-bold">Доставка и оплата</li>
            </ul>
          </nav>

          <div class="flex justify-center items-center">
            <span class="text-[#960101] xl:text-[21px] lg:text-[18px] md:text-[14px] text-[10px]">+999 999-22-22</span>
            <img class="xl:h-9 xl:w-9 h-5 w-5  ml-3" src="../src/assets/images/drawer.png" alt="">
            <span class="text-[#960101] xl:text-[20px] lg:text-[15px] text-[10px] ml-1">0</span>
          </div>
        </div>

        <div class="relative w-4/5 flex flex-col items-center pb-0">
          <span id="Below_header" class="xl:text-[118px] lg:text-[90px] md:text-[50px] sm:text-[40px] text-[30px] absolute text-[#501800] mr-10 mt-3">Koreana</span>
          <h1 class="mb-0 xl:text-[200px] lg:text-[150px] md:text-[110px] sm:text-[80px] text-[70px] font-black text-[#FF637C] mx-auto">Donuts</h1>
        </div>
        <div>
          <div class="flex justify-between items-center">
            <div class="xl:grid flex-col grid-cols-1 gap-y-10 w-[45%]">
              <p class="w-[80%] text-[#450000] font-semibold xl:text-[22px] lg:text-[20] md:text-[15] text-[12px]">
                Это не просто превосходный десерт, но и достойное угощение которое можно использовать в качестве подарка
              </p>
              <button class="mt-5 mb-10 2xl:text-[25px] md:text-[15] text-[12px] 2xl:py-5 py-2 xl:py-3 px-4 bg-[#FF637C] rounded-[40px] w-[70%] text-white">Перейти в каталог</button>
              <div class="flex justify-between w-[100%]">
                <div class="flex items-center text-[#450000]"><img class="w-[30%]" src="../src/assets/images/Vector.png" alt="Натуральные ингредиенты"> <p class="xl:text-[18px] xl:ml-3 ml-1 lg:text-[20] md:text-[15] text-[10px]">Из натуральных ингридиентов</p></div>
                <div class="flex items-center text-[#450000]"><img class="w-[30%]" src="../src/assets/images/home.png" alt="дом"> <p class="xl:ml-3 xl:text-[18px] lg:text-[20] md:text-[15] text-[10px]">Доставим до самого дома</p></div>
              </div>
            </div>
            <img class="w-[60%] h-[60%]" src="../src/assets/images/ponchiki.png" alt="">
          </div>

        </div>

      </div>
    </header>
  </div>

</template>


<style>
body{
  background-color: white;
}
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
