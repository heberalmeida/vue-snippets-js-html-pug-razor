<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="text-xl font-bold text-blue-600">Vue 3 Demo</a>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-500">About</a>
            <a href="#" class="text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4">Card Title 1</h3>
          <p class="text-gray-600 mb-4">This is a demo card using Tailwind CSS classes.</p>
          <button 
            @click="handleClick(1)"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Click Me
          </button>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4">Card Title 2</h3>
          <p class="text-gray-600 mb-4">Counter: {{ count }}</p>
          <button 
            @click="increment"
            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Increment
          </button>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4">Card Title 3</h3>
          <p class="text-gray-600 mb-4">Computed value: {{ doubledCount }}</p>
          <input 
            v-model.number="count"
            type="number"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a number"
          />
        </div>
      </div>

      <!-- Alert -->
      <div v-if="showAlert" class="mt-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Alert message: {{ message }}</span>
        <button 
          @click="showAlert = false"
          class="absolute top-0 right-0 px-4 py-3"
        >
          ×
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive state
const count = ref<number>(0)
const message = ref<string>('Hello from Vue 3!')
const showAlert = ref<boolean>(true)

// Computed property
const doubledCount = computed(() => count.value * 2)

// Methods
const increment = () => {
  count.value++
}

const handleClick = (cardNumber: number) => {
  message.value = `Card ${cardNumber} clicked!`
  showAlert.value = true
}
</script>

<style scoped>
/* Component-specific styles can go here */
</style>

