<script setup>
import MainHeader from './components/MainHeader.vue';
</script>





<template>
  <MainHeader />
  <div class="w-full h-full bg-white">
    <h2 class="text-[#FF637C] xl:text-[50px] lg:text-[40px] md:text-[34px] sm:text-[28px] text-[28px] font-[900] ml-[2%] sm:ml-[5%] md:ml-[5%] lg:ml-[5%] xl:ml-[10%] mt-5 sm:mt-10 xl:mt-20  ">Особенности</h2>
    <div class="w-[100%] xl:px-90 lg:px-40 md:px-20 sm:px-10 p-10 py-5 sm:py-10 xl:py-12">


      <div class="flex justify-between items-center">
        <div class="w-[40%]">
          <h3 class="text-[#450000] text-[14px] sm:text-[20px] md:text-[22px] md:text-[25px] xl:text-[30px] font-[900]">Стильные. Красивые. Оригинальные</h3>
          <p class="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[400]">Именно так говорят наши гости когда видят наши пончики</p>
        </div>
        <img class="w-[54%]" src="../src/assets/images/Rectangle-3.png" alt="">
      </div>

      <div class="flex justify-between items-center mt-10">
        <img class="w-[54%]" src="../src/assets/images/Rectangle-4.png" alt="">
        <div class="w-[40%]">
          <h3 class="text-[#450000] text-[14px] sm:text-[20px] md:text-[22px] md:text-[25px] xl:text-[30px] font-[900]">Большой ассортимент</h3>
          <p class="text-[12px] sm:text-[15px] md:text-[16px]  lg:text-[18px] xl:text-[20px] font-[400]">12 видов щедрой начинки на выбор, яркая глазурь и умопомрочительны на вкус</p>
        </div>
      </div>

      <div class="flex justify-between items-center mt-10">
        <div class="w-[40%]">
          <h3 class="text-[#450000] text-[14px] sm:text-[20px] md:text-[22px] md:text-[25px] xl:text-[30px] font-[900]">Быстрая доставка</h3>
          <p class="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[400]">Наш курьер всегда готов привезти вам вкусных пончиков домой или в офис</p>
        </div>
        <img class="w-[54%]" src="../src/assets/images/Rectangle-5.png" alt="">
      </div>


    </div>

  </div>
</template>


<style>
body{
  background-color: white;
}
h2{
  font-family: 'roboto', 'sans-serif';
}
h3, p{
  font-family: 'nunito', 'sans-serif';
}
</style>
