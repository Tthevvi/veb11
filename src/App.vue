<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <nav class="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold text-primary hover:opacity-80 transition">🚀 VueLab</RouterLink>
      <div class="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
        <RouterLink to="/" class="nav-link">Главная</RouterLink>
        <RouterLink to="/about" class="nav-link">О нас</RouterLink>
        <RouterLink to="/contact" class="nav-link">Контакты</RouterLink>
        <RouterLink to="/portfolio" class="nav-link">Портфолио</RouterLink>
      </div>
    </nav>
  </header>

  <main class="max-w-5xl mx-auto px-4 py-8 min-h-[calc(100vh-120px)]">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>

</template>

<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition font-medium;
}
.nav-link.router-link-active {
  @apply text-primary bg-primary/10 font-semibold;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>