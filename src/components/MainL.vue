<template>
  <section class="py-16 px-6 sm:px-12">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-yellow-500 animate-fade-in">Доставка и оплата</h2>
      <p class="text-lg text-pink-700 mt-4 animate-fade-in delay-200">
        Мы заботимся о вашем удобстве — закажите берлинеры быстро, безопасно и вкусно!
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Доставка -->
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up">
        <img
          src="../assets/courier-delivery.jpg"
          alt="Курьерская доставка"
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-bold text-pink-600 mb-3">Быстрая доставка</h3>
          <p class="text-gray-700 mb-3">
            Курьер доставит ваш заказ всего за <span class="text-yellow-500 font-semibold">60 минут</span> по городу. Мы работаем без выходных с 10:00 до 22:00.
          </p>
          <ul class="text-left list-disc list-inside text-gray-600">
            <li>Бесплатно от 2000 сом</li>
            <li>Курьеры в перчатках и масках</li>
            <li>Отслеживание заказа онлайн</li>
          </ul>
        </div>
      </div>

      <!-- Оплата -->
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up delay-300">
        <img
          src="../assets/online-payment.jpg"
          alt="Онлайн оплата"
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h3 class="text-2xl font-bold text-pink-600 mb-3">Удобная оплата</h3>
          <p class="text-gray-700 mb-3">
            Выберите удобный способ — оплата наличными, онлайн или через Kaspi.
          </p>
          <ul class="text-left list-disc list-inside text-gray-600">
            <li>visa / mastercard</li>
            <li>Наличные при получении</li>
            <li>Безопасная онлайн-оплата картой</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Гарантии -->
    <div class="mt-16 bg-yellow-100 rounded-2xl p-8 shadow-lg text-center animate-fade-in delay-500">
      <h3 class="text-2xl font-bold text-pink-700 mb-2">Гарантия качества</h3>
      <p class="text-gray-700 max-w-2xl mx-auto">
        Все пончики готовятся в день заказа, из свежих ингредиентов.
      </p>
    </div>
  </section>
</template>

<script setup>
// Можно подключить анимации из Motion One или GSAP для расширения
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
}
.animate-slide-up {
  animation: slide-up 1s ease forwards;
}
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }
</style>
