<script setup>
import MainHeader from './components/MainHeader.vue';




// Пример использования

</script>

<template>
  <MainHeader />

  <router-view />

  <router-link to="/"></router-link>
  <router-link to="/admin"></router-link>

</template>


<style>
body{
  background-color: white;
}
p{
  font-family: 'nunito', 'sans-serif';
}

</style>
