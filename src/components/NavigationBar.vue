<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToAdmin() {
  router.push('/admin');
}
function goToApp() {
  router.push("/")
}
</script>

<template>
  <div style=" background: linear-gradient(to bottom, #ffdddd, #fff5ed);" class="left-0 top-0 fixed z-4 w-full xl:px-[320px] lg:px-40 md:px-20 sm:px-10 px-3">
    <div class="flex justify-between mx-auto items-center w-full py-3 px-3 rounded-3xl">
      <img class="sm:w-10 hidden min-[640px]:block" src="../assets/images/header/header_logo.png" alt="Logo">

      <nav class="flex w-[100%] min-[640px]:w-[70%]">
        <ul class="flex w-full justify-between xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[10px]">
          <li @click="goToApp" class="text-[#960101] font-bold">Главная</li>
          <li class="text-[#960101] font-bold">О нас</li>
          <li class="text-[#960101] font-bold">Каталог</li>
          <li class="text-[#960101] font-bold">Доставка и оплата</li>
        </ul>
      </nav>

      <div class="flex items-center">
        <div class="hidden sm:flex items-center">

          <img class="xl:h-9 xl:w-9 lg:w-7 lg:h-7 h-5 w-5 ml-3" src="../assets/images/header/drawer.png" alt="Cart">
          <span
            @click="goToAdmin"
            class="text-[#960101] mt-1 xl:text-[20px] lg:text-[16px] text-[10px] ml-1 cursor-pointer">0
          </span>

        </div>
      </div>


    </div>
  </div>
</template>



<style>
li, span {
  font-family: 'Square721', sans-serif;
}

</style>
