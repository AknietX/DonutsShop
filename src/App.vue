<script setup>
import NavigationBar from './components/NavigationBar.vue';
import MainFooter from './components/MainFooter.vue';



</script>

<template>
  <NavigationBar />

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
