<script setup>
import DonutSlider from './Donuts-slider.vue';
import DrinkSlider from './Drinks-slider.vue';
import MakaronSlider from './Makarons-slider.vue';
</script>


<template>
  <div class="p-4 sm:p-10 md:px-20 md:pt-8 sm:pt-25 pt-10 lg:pt-15 xl:px-80">
    <h1 class="text-[#450000] max-[472px]:text-[12px] text-[14px] sm:text-[20px] md:text-[22px] md:text-[23px] xl:text-[30px] font-[900]">Ассортимент</h1>
    <div id="content" class="flex justify-between w-full xl:h-[700px] lg:h-[500px] md:h-[500px] sm:h-[400px] h-[300px]  mb-20 max-[472px]:text-[10px] text-[14px] sm:text-[20px] md:text-[22px] md:text-[23px] xl:text-[20px] ">
      <div class="w-[60%]">
        <DrinkSlider />
        <DonutSlider />
      </div>
      <MakaronSlider />
    </div>
  </div>
</template>


<style>
#content{

}
</style>
