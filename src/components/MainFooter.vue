<script setup>


</script>

<template>
  <div class="relative w-full bg-cover bg-[url('../assets/images/footer/footer_bg.png')] p-4 sm:p-10 md:px-20 md:pt-18 sm:pt-25 pt-10 lg:pt-40 xl:px-90">
    <!-- Фоновые изображения -->
    <img
      class="absolute top-[2%] left-0 w-[10%] sm:top-[3%] sm:w-[12%] md:top-[5%] md:w-[10%] lg:top-[5%] lg:w-[13%] xl:top-[8%] xl:w-[10%]"
      src="../assets/images/footer/left_donut.png"
      alt=""
    />
    <img
      class="absolute top-0 right-[10%] w-[25%]"
      src="../assets/images/footer/font-rdonut.png"
      alt=""
    />
    <img
      class="absolute bottom-0 left-0 w-[10%]"
      src="../assets/images/footer/font-ldonut.png"
      alt=""
    />

    <!-- Заголовки -->
    <div class="relative flex mb-3 md:mb-7 xl:mb-10 h-[100px]">
      <h2 class="absolute bottom-0 left-0 w-[50%] font-[900] text-[#FF637C] text-[18px] min-[390px]:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
        Начни день с вкусного завтрака
      </h2>
      <h2 class="absolute bottom-0 right-0 font-[900] text-[#FF637C] text-[18px] min-[390px]:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px]">
        Контакты
      </h2>
    </div>

    <!-- Подписка на рассылку -->
    <label
      for="Eas"
      class="block mx-auto text-[#545454] text-[10px] md:text-[15px] xl:text-[18px]"
    >
      Подписаться на рассылку
    </label>

    <!-- Форма и контакты -->
    <div class="flex justify-between w-full mt-2 lg:mt-4">
      <!-- Поле ввода и кнопка -->
      <div class="relative h-[50%] w-[58%] min-[406px]:w-[55%] sm:w-[50%] md:w-[50%] lg:w-[70%]">
        <input
          id="Eas"
          type="text"
          placeholder="Введите свой EMail"
          class="block bg-white rounded-l-lg w-[85%] sm:w-[91%] focus:outline-none p-2 min-[400px]:p-4 sm:p-5 md:p-5 lg:p-7 xl:p-10 placeholder:font-[400] placeholder:text-[10px] placeholder:sm:text-[15px] placeholder:md:text-[16px] placeholder:lg:text-[18px] placeholder:xl:text-[26px]"
        />
        <button
          class="absolute top-0 right-0 h-full w-[15%] sm:w-[9%] bg-[url('../assets/images/sent-rename.png')] rounded-r-lg p-2 font-[400] text-white text-[12px] max-[472px]:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
          style="box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3);"
        >
          <img class="block w-full" src="../assets/images/footer/send.png" alt="">
        </button>
      </div>

      <!-- Контактная информация -->
      <div class="flex flex-col gap-y-3 w-[30%] lg:w-[20%] xl:w-[15%] text-[#990000] font-[300] text-[11px] sm:text-[16px]">
        <p>amirakniet@gmail.com</p>
        <p>+996 555 555 555</p>
        <div class="flex justify-between">
          <img class="block w-[20%]" src="../assets/images/footer/whatsapp.png" alt="WhatsApp" />
          <img class="block w-[20%]" src="../assets/images/footer/instagram.png" alt="Instagram" />
          <img class="block w-[20%]" src="../assets/images/footer/telegram.png" alt="Telegram" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Nunito', 'sans-serif';
}
</style>
