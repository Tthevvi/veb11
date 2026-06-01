<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-6">🎨 Портфолио</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="p in projects" :key="p.id" class="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <div class="h-44 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-5xl">
          {{ p.icon }}
        </div>
        <div class="p-5">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ p.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ p.desc }}</p>
          <button class="text-primary font-medium hover:underline">Подробнее →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { id: 1, title: 'E-Commerce Dashboard', desc: 'Аналитика продаж и управления товарами', icon: '📊' },
  { id: 2, title: 'Task Manager', desc: 'Канбан-доска с drag & drop', icon: '✅' },
  { id: 3, title: 'Weather App', desc: 'Прогноз погоды с геолокацией', icon: '🌤️' },
  { id: 4, title: 'Blog CMS', desc: 'Платформа для авторов с markdown', icon: '📝' },
  { id: 5, title: 'Realtime Chat', desc: 'Мессенджер на WebSocket', icon: '💬' },
  { id: 6, title: 'Portfolio Builder', desc: 'Конструктор личных сайтов', icon: '🎨' }
]
</script>