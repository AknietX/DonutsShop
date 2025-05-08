<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';


function goToAdmin() {
  router.push('/admin');
}
const activeItem = ref('Главная')
const router = useRouter();
const route = useRoute();

const menuItems = [
  { name: 'Главная', route: '/' },
  { name: 'О нас', route: '/about' },
  { name: 'Каталог', route: '/catalog' },
  { name: 'Доставка и оплата', route: '/delivery' },
  { name: 'Контакты', route: '/contacts' }
]
watch(() => route.path, (newPath) => {
  const currentItem = menuItems.find(item => item.route === newPath);
  if (currentItem) {
    activeItem.value = currentItem.name;
  }
}, { immediate: true });

const navigateTo = (route) => {
  router.push(route)
}

</script>

<template>
  <div style=" background: linear-gradient(to bottom, #ffdddd, #fff5ed);" class="left-0 top-0 fixed z-4 w-full xl:px-[320px] lg:px-40 md:px-20 sm:px-10 px-0">
    <div class="flex justify-between mx-auto items-center w-full py-3 px-3 rounded-3xl">
      <img class="sm:w-10 hidden min-[640px]:block" src="../assets/images/header/header_logo.png" alt="Logo">

      <nav class="flex w-[100%] min-[640px]:w-[70%] min-[1700px]:w-[78%]">
        <ul class="flex w-full justify-between xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[13px] text-[10px] cursor-pointer">
          <li
            v-for="item in menuItems"
            :key="item.route"
            @click="() => {
              activeItem = item.name;
              navigateTo(item.route);
            }"
            class="font-bold transition-transform duration-300"
            :class="{
              'text-[#640000]': activeItem === item.name,
              'text-[#960101]': activeItem !== item.name
            }"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <div class="flex items-center">
        <div class="hidden sm:flex items-center">

          <img class="xl:h-9 xl:w-9 lg:w-7 lg:h-7 h-5 w-5 ml-3 cursor-pointer" src="../assets/images/header/drawer.png" alt="Cart">
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

@media (max-width: 640px) {
  li {

  }
}
@media (min-width: 640px) {
  li {
    font-family: 'Square721', sans-serif;
  }
}
span{
  font-family: 'Square721', sans-serif;
}

</style>
