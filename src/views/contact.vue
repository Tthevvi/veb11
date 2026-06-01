<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">📩 Обратная связь</h1>
    <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Имя</label>
        <input v-model="form.name" type="text" required class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input v-model="form.email" type="email" required class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
        <textarea v-model="form.message" rows="4" required class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"></textarea>
      </div>
      <button type="submit" :disabled="isLoading" class="w-full py-3 bg-primary text-white rounded-lg hover:bg-primaryDark transition disabled:opacity-60">
        {{ isLoading ? 'Отправка...' : 'Отправить' }}
      </button>
      <p v-if="success" class="text-green-600 text-sm text-center mt-2 font-medium">✅ Успешно отправлено!</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({ name: '', email: '', message: '' })
const isLoading = ref(false)
const success = ref(false)

function onSubmit() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    success.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => success.value = false, 3000)
  }, 600)
}
</script>