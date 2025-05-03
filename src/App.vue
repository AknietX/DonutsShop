<script setup>

import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';


</script>

<template>


  <MainHeader />
  <div class="xl:py-10 py-5">
    <router-view />
    <router-link to="/"></router-link>
    <router-link to="/admin"></router-link>

  </div>
  <MainFooter />

</template>


<style>
body{
  background-color: white;
}
p{
  font-family: 'nunito', 'sans-serif';
}
</style>
