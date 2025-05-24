<script setup>
import DonutSlider from './Donuts-slider.vue';
import DrinkSlider from './Drinks-slider.vue';
import MakaronSlider from './Makarons-slider.vue';
import { inject } from 'vue';

const {  openDrawer } = inject('cart')

</script>


<template>
  <div class="p-4 sm:p-10 md:px-20 md:pt-8 sm:pt-25 pt-10 lg:pt-15 xl:px-80">
    <h1 class="text-[#450000] max-[472px]:text-[12px] text-[14px] sm:text-[20px] md:text-[22px] md:text-[23px] xl:text-[30px] font-[900]">Ассортимент</h1>
    <div id="content" class="flex justify-between w-full xl:h-[760px] lg:h-[500px] md:h-[500px] sm:h-[400px] h-[300px] mb-5 md:mb-10 max-[472px]:text-[10px] text-[14px] sm:text-[20px] md:text-[22px] md:text-[23px] xl:text-[20px] ">
      <div class="w-[60%]">
        <DrinkSlider />
        <DonutSlider />
      </div>
      <MakaronSlider />
    </div>
    <div class="w-full flex justify-center">
      <button @click="openDrawer" class="w-[80%] p-4 bg-[#EB1437] rounded-xl text-white text-[18px] sm:text-[21px] md:text-[23px] lg:text-[26px] xl:text-[29px] hover:bg-[#A0000F] font-[600] mt-[7%] md:mt-[5%]">Сделать заказ</button>
    </div>
  </div>
</template>


<style>

</style>
