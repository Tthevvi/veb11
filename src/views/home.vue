<template>
  <div class="text-center py-12 md:py-20">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Добро пожаловать в <span class="text-primary">Vue Router Lab</span>
    </h1>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
      Демонстрация SPA-архитектуры, клиентской маршрутизации и однофайловых компонентов.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <RouterLink to="/portfolio" class="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primaryDark transition shadow-md">
        Смотреть портфолио
      </RouterLink>
      <RouterLink to="/contact" class="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
        Связаться с нами
      </RouterLink>
    </div>
  </div>
</template>