<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">ℹ️ О проекте</h1>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
      <p class="text-gray-700">Приложение демонстрирует ключевые технологии из лекции:</p>
      <ul class="space-y-3">
        <li class="flex items-start gap-2">
          <span class="text-primary">✅</span>
          <span>Однофайловые компоненты (SFC)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-primary">✅</span>
          <span>Клиентский роутинг без перезагрузки страницы</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-primary">✅</span>
          <span>Composition API &lt;script setup&gt;</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-primary">✅</span>
          <span>Динамическая верстка и переходы</span>
        </li>
      </ul>
      <div class="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-500">
        💡 В реальных проектах Tailwind подключается через PostCSS для tree-shaking и оптимизации CSS.
      </div>
    </div>
  </div>
</template>