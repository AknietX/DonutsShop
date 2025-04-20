<script setup>


</script>

<template>
    <div  class="bg-[url('../assets/images/easy-way.png')] bg-cover w-[100%] xl:px-90 lg:pt-40 md:px-20 sm:pt-25 pt-10 md:pt-18 p-4 sm:p-10 py-5 sm:py-10 xl: relative">
    <img class="absolute w-[10%] top-[2%] left-0 sm:w-[12%] sm:left-0 sm:top-[3%] md:left-0 md:top-[5%] md:w-[10%] lg:left-0 lg:top-[5%] lg:w-[13%] xl:top-[8%] xl:left-[0%] xl:w-[10%]" src="../assets/images/footer-donut.png" alt="">
    <img class="absolute w-[25%] right-[10%] top-0" src="../assets/images/font-donut.png" alt="">
    <img class="absolute w-[10%] bottom-[0] left-[0]" src="../assets/images/font-donut2.png" alt="">
      <div class="flex mb-3 md:mb-7 xl:mb-10 h-[100px] relative">
        <h2 class="absolute left-0 bottom-0 md:text-[30px] lg:text-[35px] xl:text-[40px] text-[18px] min-[390px]:text-[20px] sm:text-[25px] font-[900] text-[#FF637C] w-[50%]">Начни день с вкусного завтрака</h2>
        <h2 class="absolute right-0 bottom-0 xl:text-[40px] lg:text-[35px] md:text-[30px] text-[18px] min-[390px]:text-[20px] sm:text-[25px] font-[900] text-[#FF637C] ">Контакты</h2>
      </div>
      <label class="block mx-auto text-[10px] md:text-[15px] xl:text-[18px] text-[#545454]" for="Eas">Подписаться на рассылку</label>
      <div class="flex justify-between w-[100%]">
        <div class="flex relative w-[60%] min-[406px]:w-[65%] sm:w-[70%] h-[100%]">
          <input id="Eas" class=" max-[472px]:placeholder:text-[10px] placeholder:text-[12px] sm:placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[18px] xl:placeholder:text-[20px] placeholder:font-[400] bg-white focus:outline-none p-2 min-[400px]:p-4 sm:p-5 md:p-5 lg:p-7 xl:p-10 md:p-7 rounded-l-lg w-[85%] sm:w-[91%]" placeholder="Введите свой EMail" type="text">
          <button class="absolute right-0 w-[15%] sm:w-[9%] top-0 bg-[url('../assets/images/sent-rename.png')] h-[100%] p-2 text-white rounded-r-lg font-[400] max-[472px]:text-[10px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] pb-3" style="box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3)"><img class="w-[100%]" src="../assets/images/material-symbols_send.png" alt=""></button>
        </div>
        <div class="flex flex-col  lg:w-[20%] xl:w-[15%] gap-y-3 text-[11px] sm:text-[16px]">
          <p class="font-[300] text-[#990000]">amirakniet@gmail.com</p>
          <p class="font-[300] text-[#990000] ">+996 555 555 555</p>
          <div class="flex justify-between">
            <img class="w-[20%]" src="../assets/images/whatsapp.png" alt="">
            <img class="w-[20%]" src="../assets/images/inst.png" alt="inst.png">
            <img class="w-[20%]" src="../assets/images/telegram.png" alt="telegram.png">
          </div>
        </div>
      </div>



    </div>
</template>

<style scoped>

h2{
  font-family: 'nunito', 'sans-serif';
}
</style>
