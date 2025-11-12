# Vue 3 + Tailwind + Bootstrap Snippets

> **The most complete and modern snippet pack for Vue 3, Tailwind CSS 3/4, Bootstrap 5/6, HTML5, Pug, and Razor**

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=heberalmeida.vue-snippets-js-html-pug-razor)
[![VSCode](https://img.shields.io/badge/VSCode-1.60%2B-blue.svg)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A comprehensive Visual Studio Code extension providing productivity-focused snippets for modern web development. Optimized for Vue 3 with Composition API, TypeScript, Tailwind CSS, Bootstrap, and more.

## Features

- **Vue 3 Composition API** - Complete snippets with TypeScript support
- **Tailwind CSS 3 & 4** - Utility classes, components, and responsive breakpoints
- **Bootstrap 5 & 6** - Modern components and grid system
- **Modern HTML5** - Semantic and accessible templates
- **Pug Templates** - Clean, indentation-based syntax
- **ASP.NET Razor** - Server-side rendering snippets
- **TypeScript Ready** - Full TypeScript support with auto-imports
- **Vite & Nuxt 3** - Optimized for modern build tools

## Installation

1. Open Visual Studio Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "Vue 3 + Tailwind + Bootstrap Snippets"
4. Click **Install**

Or install via command line:
```bash
code --install-extension heberalmeida.vue-snippets-js-html-pug-razor
```

## Quick Start

### Vue 3 Composition API

Type `vbase` in a `.vue` file to create a Vue 3 component:

```vue
<template>
  <div>
    <!-- Your template here -->
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Your styles here */
</style>
```

### Tailwind CSS

Type `twbtn` to create a styled button:

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Button Text
</button>
```

### Bootstrap 5/6

Type `bsbtn` to create a Bootstrap button:

```html
<button type="button" class="btn btn-primary">Button Text</button>
```

## Complete Usage Examples

### Vue 3 Examples

#### Example 1: Basic Component with Reactive State

**Snippet:** `vbase` + `vref` + `vclick`

```vue
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
    <p class="mb-4">Counter: {{ count }}</p>
    <button 
      @click="increment"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('My Vue 3 Component')
const count = ref<number>(0)

const increment = () => {
  count.value++
}
</script>
```

#### Example 2: Component with Props and Emits

**Snippets:** `vbase` + `vprops` + `vemits`

```vue
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  message?: string
}>()

const emit = defineEmits<{
  clicked: [value: string]
}>()

const handleClick = () => {
  emit('clicked', 'Button was clicked!')
}
</script>
```

#### Example 3: Component with Computed Properties

**Snippets:** `vbase` + `vref` + `vcomputedts`

```vue
<template>
  <div>
    <input 
      v-model.number="price" 
      type="number" 
      placeholder="Enter price"
      class="border p-2 rounded"
    />
    <p>Price: ${{ price }}</p>
    <p>Price with Tax (10%): ${{ priceWithTax }}</p>
    <p>Price with Discount (20%): ${{ priceWithDiscount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref<number>(0)

const priceWithTax = computed<number>(() => {
  return price.value * 1.1
})

const priceWithDiscount = computed<number>(() => {
  return price.value * 0.8
})
</script>
```

#### Example 4: Component with Watchers

**Snippets:** `vbase` + `vref` + `vwatch`

```vue
<template>
  <div>
    <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="Search..."
      class="border p-2 rounded w-full"
    />
    <p v-if="isSearching">Searching for: {{ searchQuery }}</p>
    <ul v-if="results.length > 0">
      <li v-for="result in results" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const searchQuery = ref<string>('')
const isSearching = ref<boolean>(false)
const results = ref<Array<{ id: number; name: string }>>([])

watch(searchQuery, async (newQuery) => {
  if (newQuery.length > 2) {
    isSearching.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    results.value = [
      { id: 1, name: `Result for ${newQuery}` },
      { id: 2, name: `Another result for ${newQuery}` }
    ]
    isSearching.value = false
  } else {
    results.value = []
  }
})
</script>
```

#### Example 5: Component with Lifecycle Hooks

**Snippets:** `vbase` + `vonmounted` + `vonunmounted`

```vue
<template>
  <div>
    <p>Component is mounted: {{ isMounted }}</p>
    <p>Timer: {{ timer }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMounted = ref<boolean>(false)
const timer = ref<number>(0)
let intervalId: number | null = null

onMounted(() => {
  isMounted.value = true
  intervalId = window.setInterval(() => {
    timer.value++
  }, 1000)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>
```

#### Example 6: Component with Vue Router

**Snippets:** `vbase` + `vrouterlink` + `vuseroute`

```vue
<template>
  <nav>
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link">About</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
  </nav>
  <div>
    <h1>Current Route: {{ route.path }}</h1>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
```

#### Example 7: Component with Pinia Store

**Snippets:** `vbase` + `vpinia-comp` (in store file)

**Store file (stores/user.ts):**
```typescript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<{ name: string; email: string } | null>(null)
  const isLoggedIn = computed(() => user.value !== null)
  
  function login(name: string, email: string) {
    user.value = { name, email }
  }
  
  function logout() {
    user.value = null
  }
  
  return { user, isLoggedIn, login, logout }
})
```

**Component:**
```vue
<template>
  <div>
    <div v-if="userStore.isLoggedIn">
      <p>Welcome, {{ userStore.user?.name }}!</p>
      <button @click="userStore.logout()">Logout</button>
    </div>
    <div v-else>
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleLogin = () => {
  userStore.login('John Doe', 'john@example.com')
}
</script>
```

#### Example 8: Component with Transitions

**Snippets:** `vbase` + `vtransition` + `vif`

```vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <div v-if="show" class="box">
        This content fades in and out
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref<boolean>(true)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.box {
  padding: 20px;
  background: #f0f0f0;
  margin-top: 10px;
}
</style>
```

### Tailwind CSS Examples

#### Example 1: Responsive Card Grid

**Snippet:** `twgrid-responsive` + `twcard`

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-4">Card Title 1</h3>
    <p class="text-gray-600 mb-4">Card content goes here</p>
    <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Action
    </button>
  </div>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-4">Card Title 2</h3>
    <p class="text-gray-600 mb-4">Card content goes here</p>
    <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      Action
    </button>
  </div>
</div>
```

#### Example 2: Complete Form with Validation Styles

**Snippet:** `twform` + `twinput`

```html
<form class="space-y-4 max-w-md mx-auto">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input 
      type="text" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter your name"
    />
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input 
      type="email" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter your email"
    />
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      rows="4"
      placeholder="Enter your message"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    Submit
  </button>
</form>
```

#### Example 3: Navigation Bar with Responsive Design

**Snippet:** `twnavbar`

```html
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="#" class="text-xl font-bold text-blue-600">My App</a>
      </div>
      <div class="hidden md:flex space-x-4">
        <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors">Home</a>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors">About</a>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors">Services</a>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition-colors">Contact</a>
      </div>
      <button class="md:hidden px-4 py-2 text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

#### Example 4: Modal with Dark Mode Support

**Snippet:** `twmodal` + `twdark`

```html
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Modal Title</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      This is a modal with dark mode support. The background and text colors adapt based on the theme.
    </p>
    <div class="flex justify-end space-x-2">
      <button class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
        Cancel
      </button>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Confirm
      </button>
    </div>
  </div>
</div>
```

#### Example 5: Dashboard Layout with Grid

**Snippet:** `twgrid` + `twcard` + `twflex`

```html
<div class="container mx-auto px-4 py-8">
  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
    <p class="text-gray-600 mt-2">Welcome back! Here's your overview.</p>
  </div>
  
  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-600">Total Users</p>
          <p class="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        <div class="bg-blue-100 rounded-full p-3">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-600">Revenue</p>
          <p class="text-2xl font-bold text-gray-900">$12,345</p>
        </div>
        <div class="bg-green-100 rounded-full p-3">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold mb-4">Recent Activity</h2>
      <!-- Activity list here -->
    </div>
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
      <!-- Quick actions here -->
    </div>
  </div>
</div>
```

### Bootstrap 5/6 Examples

#### Example 1: Complete Form with Validation

**Snippet:** `bsform` + `bsinput` + `bsselect`

```html
<form class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2 class="mb-4">Registration Form</h2>
      
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter first name" required>
      </div>
      
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter last name" required>
      </div>
      
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
      </div>
      
      <div class="mb-3">
        <label for="country" class="form-label">Country</label>
        <select class="form-select" id="country" required>
          <option selected>Choose...</option>
          <option value="1">United States</option>
          <option value="2">Canada</option>
          <option value="3">United Kingdom</option>
        </select>
      </div>
      
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="terms" required>
        <label class="form-check-label" for="terms">
          I agree to the terms and conditions
        </label>
      </div>
      
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </div>
  </div>
</form>
```

#### Example 2: Navigation Bar with Dropdown

**Snippet:** `bsnavbar` + `bsdropdown`

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web Development</a></li>
            <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Consulting</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

#### Example 3: Card Grid Layout

**Snippet:** `bsgrid` + `bscard`

```html
<div class="container mt-5">
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header bg-primary text-white">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Card Title 1</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4">
      <div class="card">
        <div class="card-header bg-success text-white">
          Success
        </div>
        <div class="card-body">
          <h5 class="card-title">Card Title 2</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-success">Go somewhere</a>
        </div>
      </div>
    </div>
    
    <div class="col-md-4">
      <div class="card">
        <div class="card-header bg-warning text-dark">
          Warning
        </div>
        <div class="card-body">
          <h5 class="card-title">Card Title 3</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-warning">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Example 4: Modal with Form

**Snippet:** `bsmodal` + `bsform`

```html
<!-- Button to trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="userName" class="form-label">Name</label>
            <input type="text" class="form-control" id="userName" value="John Doe">
          </div>
          <div class="mb-3">
            <label for="userEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="userEmail" value="john@example.com">
          </div>
          <div class="mb-3">
            <label for="userRole" class="form-label">Role</label>
            <select class="form-select" id="userRole">
              <option selected>Admin</option>
              <option>User</option>
              <option>Guest</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

#### Example 5: Accordion FAQ Section

**Snippet:** `bsaccordion`

```html
<div class="container mt-5">
  <h2 class="mb-4">Frequently Asked Questions</h2>
  
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          What is this service about?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          This service provides comprehensive solutions for your business needs. We offer a wide range of services including web development, consulting, and support.
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          How do I get started?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Getting started is easy! Simply sign up for an account, choose a plan that fits your needs, and you'll be up and running in minutes.
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          What payment methods do you accept?
        </button>
      </h2>
      <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.
        </div>
      </div>
    </div>
  </div>
</div>
```

### HTML5 Examples

#### Example 1: Complete HTML5 Page Structure

**Snippet:** `html5` + `htmlheader` + `htmlmain` + `htmlfooter`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A complete HTML5 page example">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <header>
        <h1>Article Title</h1>
        <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>Article content goes here...</p>
      </section>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
  
  <script src="script.js"></script>
</body>
</html>
```

#### Example 2: Accessible Form

**Snippet:** `htmlform`

```html
<form action="/submit" method="post" novalidate>
  <fieldset>
    <legend>Contact Information</legend>
    
    <div>
      <label for="name">Full Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        aria-describedby="name-error"
        aria-required="true"
      >
      <span id="name-error" class="error" role="alert"></span>
    </div>
    
    <div>
      <label for="email">Email Address</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        aria-describedby="email-error"
        aria-required="true"
      >
      <span id="email-error" class="error" role="alert"></span>
    </div>
    
    <div>
      <label for="message">Message</label>
      <textarea 
        id="message" 
        name="message" 
        rows="5" 
        required
        aria-describedby="message-error"
        aria-required="true"
      ></textarea>
      <span id="message-error" class="error" role="alert"></span>
    </div>
    
    <button type="submit">Send Message</button>
  </fieldset>
</form>
```

### Pug Examples

#### Example 1: Complete Pug Page

**Snippet:** `pughtml5` + `pugheader` + `pugmain`

```pug
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    title My Pug Page
    link(rel="stylesheet" href="styles.css")
  body
    header
      nav
        ul
          li
            a(href="#home") Home
          li
            a(href="#about") About
          li
            a(href="#contact") Contact
    
    main
      article
        header
          h1 Article Title
        section
          h2 Introduction
          p Article content goes here...
    
    footer
      p &copy; 2024 My Website
```

#### Example 2: Pug Component with Mixin

**Snippet:** `pugmixin` + `pugcard`

```pug
mixin card(title, content, buttonText)
  .card
    .card-header
      h3= title
    .card-body
      p= content
      button.btn= buttonText

.container
  +card("Card 1", "This is the first card", "Click Me")
  +card("Card 2", "This is the second card", "Learn More")
  +card("Card 3", "This is the third card", "Get Started")
```

### Razor Examples

#### Example 1: Razor Page with Model

**Snippet:** `razorpage`

```razor
@page
@model IndexModel

@{
    ViewData["Title"] = "Home Page";
}

<div class="text-center">
    <h1 class="display-4">Welcome</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
    
    @if (Model.IsLoggedIn)
    {
        <p>Welcome back, @Model.UserName!</p>
    }
    else
    {
        <a href="/Login" class="btn btn-primary">Login</a>
    }
</div>
```

#### Example 2: Razor View with List

**Snippet:** `razorview` + `razorforeach`

```razor
@model List<Product>

@{
    ViewData["Title"] = "Products";
}

<h1>Products</h1>

<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        @foreach (var product in Model)
        {
            <tr>
                <td>@product.Name</td>
                <td>@product.Price.ToString("C")</td>
                <td>@product.Category</td>
            </tr>
        }
    </tbody>
</table>
```

### TypeScript Examples

#### Example 1: Interface and Type Definitions

**Snippets:** `tsinterface` + `tstype` + `tsenum`

```typescript
// User interface
interface User {
  id: number
  name: string
  email: string
  role: UserRole
  createdAt: Date
  updatedAt?: Date
}

// User role enum
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

// Type alias
type UserId = number
type UserEmail = string

// Union type
type Status = 'pending' | 'approved' | 'rejected'

// Function with typed parameters
function createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User {
  return {
    id: Date.now(),
    ...userData,
    createdAt: new Date()
  }
}
```

#### Example 2: Generic Functions and Classes

**Snippets:** `tsgeneric-function` + `tsclass` + `tsgeneric`

```typescript
// Generic function
function getValue<T>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : defaultValue
}

// Generic class
class Repository<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate)
  }

  getAll(): T[] {
    return [...this.items]
  }
}

// Usage
const userRepo = new Repository<User>()
userRepo.add({ id: 1, name: 'John', email: 'john@example.com' })
```

#### Example 3: Type Guards and Assertions

**Snippets:** `tstypeguard` + `tsassertion-fn` + `tsassert`

```typescript
// Type guard
interface ApiResponse {
  success: boolean
  data?: unknown
  error?: string
}

function isApiResponse(value: unknown): value is ApiResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    typeof (value as ApiResponse).success === 'boolean'
  )
}

// Assertion function
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value must be a string')
  }
}

// Usage
function processResponse(response: unknown) {
  if (isApiResponse(response)) {
    if (response.success && response.data) {
      assertIsString(response.data)
      console.log(response.data.toUpperCase())
    }
  }
}
```

#### Example 4: Utility Types

**Snippets:** `tspartial` + `tspick` + `tsomit` + `tsrecord`

```typescript
interface User {
  id: number
  name: string
  email: string
  age: number
  role: string
}

// Partial - all properties optional
type PartialUser = Partial<User>

// Pick - select specific properties
type UserPreview = Pick<User, 'id' | 'name' | 'email'>

// Omit - exclude specific properties
type UserWithoutId = Omit<User, 'id'>

// Record - object with specific key-value types
type UserMap = Record<string, User>

// Usage
const updateData: PartialUser = {
  name: 'John Doe',
  email: 'john@example.com'
}

const preview: UserPreview = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
}
```

#### Example 5: Async Functions and Promises

**Snippets:** `tsasync` + `tspromise` + `tstry`

```typescript
// Async function with error handling
async function fetchUser(id: number): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data: User = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to fetch user:', error.message)
      throw error
    }
    throw new Error('Unknown error occurred')
  }
}

// Promise type
type UserPromise = Promise<User | null>

// Multiple async operations
async function fetchUsers(ids: number[]): Promise<User[]> {
  const promises: Promise<User>[] = ids.map(id => fetchUser(id))
  return Promise.all(promises)
}
```

#### Example 6: Advanced TypeScript Features

**Snippets:** `tsconditional` + `tsmapped` + `tstemplate-literal`

```typescript
// Conditional type
type NonNullable<T> = T extends null | undefined ? never : T

// Mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// Template literal type
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<'click'> // 'onClick'
type SubmitEvent = EventName<'submit'> // 'onSubmit'

// Utility type composition
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// Usage
interface Config {
  api: {
    baseUrl: string
    timeout: number
  }
  features: {
    darkMode: boolean
    notifications: boolean
  }
}

type ReadonlyConfig = DeepReadonly<Config>
```

#### Example 7: Class with Accessors and Decorators

**Snippets:** `tsclass` + `tsgetter` + `tssetter` + `tsdecorator`

```typescript
// Class with getters and setters
class User {
  private _name: string = ''
  private _email: string = ''

  constructor(name: string, email: string) {
    this._name = name
    this._email = email
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('Name must be at least 2 characters')
    }
    this._name = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    if (!value.includes('@')) {
      throw new Error('Invalid email address')
    }
    this._email = value
  }
}

// Abstract class
abstract class BaseService {
  abstract process(data: unknown): Promise<void>
  
  protected log(message: string): void {
    console.log(`[${this.constructor.name}] ${message}`)
  }
}
```

## Snippet Reference

### Vue 3 Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `vbase` | Vue 3 SFC with Composition API (TypeScript) | Complete component structure |
| `vbasejs` | Vue 3 SFC with Composition API (JavaScript) | Complete component structure |
| `vbasep` | Vue 3 SFC with Pug template | Component with Pug syntax |
| `vref` | Reactive reference (TypeScript) | `const name = ref<string>('')` |
| `vrefjs` | Reactive reference (JavaScript) | `const name = ref('')` |
| `vcomputed` | Computed property | `const computed = computed(() => ...)` |
| `vcomputedts` | Computed property (TypeScript) | `const computed = computed<string>(() => ...)` |
| `vwatch` | Watch statement | `watch(source, (newVal, oldVal) => ...)` |
| `vwatchopt` | Watch with options | `watch(source, callback, { immediate, deep })` |
| `vwatcheffect` | WatchEffect | `watchEffect(() => ...)` |
| `vprops` | Define props (TypeScript) | `const props = defineProps<{...}>()` |
| `vpropsdef` | Props with defaults | `const props = withDefaults(defineProps<{...}>(), {...})` |
| `vemits` | Define emits (TypeScript) | `const emit = defineEmits<{...}>()` |
| `vemitsjs` | Define emits (JavaScript) | `const emit = defineEmits(['event'])` |
| `vonmounted` | onMounted lifecycle | `onMounted(() => ...)` |
| `vonunmounted` | onUnmounted lifecycle | `onUnmounted(() => ...)` |
| `vonupdated` | onUpdated lifecycle | `onUpdated(() => ...)` |
| `vreactive` | Reactive object | `const state = reactive<{...}>({...})` |
| `vprovide` | Provide | `provide('key', value)` |
| `vinject` | Inject | `const injected = inject<string>('key')` |
| `vnexttick` | NextTick | `await nextTick()` |
| `vtemplateref` | Template ref | `const refName = ref<HTMLElement \| null>(null)` |
| `vfor` | v-for directive | `<div v-for="item in items" :key="item.id">` |
| `vforidx` | v-for with index | `<div v-for="(item, index) in items" :key="index">` |
| `vmodel` | v-model | `<input v-model="modelValue" />` |
| `vmodelnum` | v-model.number | `<input v-model.number="numData" />` |
| `vif` | v-if | `<div v-if="condition">` |
| `vshow` | v-show | `<div v-show="condition">` |
| `vclick` | @click handler | `@click="handler(arg)"` |
| `vsubmit` | @submit.prevent | `@submit.prevent="handler"` |
| `vrouterlink` | RouterLink | `<RouterLink to="/path">` |
| `vrouterview` | RouterView | `<RouterView />` |
| `vuserouter` | useRouter | `const router = useRouter()` |
| `vuseroute` | useRoute | `const route = useRoute()` |
| `vtransition` | Transition component | `<Transition name="fade">` |
| `vteleport` | Teleport component | `<Teleport to="body">` |
| `vsuspense` | Suspense component | `<Suspense>` with fallback |
| `vasynccomp` | Async component | `defineAsyncComponent(() => import(...))` |
| `vpinia` | Pinia store (Options) | `defineStore('id', { state, getters, actions })` |
| `vpinia-comp` | Pinia store (Composition) | `defineStore('id', () => {...})` |
| `vnuxfetch` | Nuxt useFetch | `const { data } = await useFetch('/api')` |
| `vnuxasync` | Nuxt useAsyncData | `const { data } = await useAsyncData(...)` |
| `vnuxhead` | Nuxt useHead | `useHead({ title: '...' })` |

### Tailwind CSS Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `twbtn` | Button with hover | Styled button with transition |
| `twbtn-primary` | Primary button | Blue primary button |
| `twbtn-secondary` | Secondary button | Gray secondary button |
| `twcard` | Card component | Card with shadow and padding |
| `twflex` | Flex container | Flex with customizable options |
| `twflex-col` | Flex column | Vertical flex container |
| `twgrid` | Grid layout | CSS Grid with columns |
| `twgrid-responsive` | Responsive grid | Grid with breakpoints |
| `twdark` | Dark mode support | Dark mode classes |
| `twcontainer` | Container | Centered container with padding |
| `twtext-responsive` | Responsive text | Text with breakpoint sizes |
| `twinput` | Input field | Styled input with focus states |
| `twform` | Form | Complete form structure |
| `twnavbar` | Navbar | Navigation bar component |
| `twmodal` | Modal | Modal overlay component |
| `twbadge` | Badge | Colored badge component |
| `twalert` | Alert | Alert message component |
| `twspinner` | Loading spinner | Animated spinner |
| `twsm` | Small breakpoint | `sm:class` |
| `twmd` | Medium breakpoint | `md:class` |
| `twlg` | Large breakpoint | `lg:class` |
| `twxl` | XL breakpoint | `xl:class` |
| `tw2xl` | 2XL breakpoint | `2xl:class` |
| `twdark-class` | Dark mode variant | `dark:class` |
| `twhover` | Hover variant | `hover:class` |
| `twfocus` | Focus variant | `focus:class` |
| `twactive` | Active variant | `active:class` |
| `twtransition` | Transition | `transition-all duration-300` |
| `twshadow` | Shadow | `shadow-md` |
| `twrounded` | Rounded corners | `rounded-lg` |

### Bootstrap 5/6 Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `bsgrid` | Grid container | Responsive grid system |
| `bsbtn` | Button | Bootstrap button |
| `bsbtn-primary` | Primary button | Blue primary button |
| `bsbtn-secondary` | Secondary button | Gray secondary button |
| `bsbtn-success` | Success button | Green success button |
| `bsbtn-danger` | Danger button | Red danger button |
| `bsbtn-warning` | Warning button | Yellow warning button |
| `bsbtn-info` | Info button | Cyan info button |
| `bsbtn-outline` | Outline button | Outlined button variant |
| `bsform` | Form | Complete form structure |
| `bsinput` | Form input | Input with label |
| `bsselect` | Form select | Select dropdown |
| `bscheckbox` | Checkbox | Form checkbox |
| `bsradio` | Radio button | Form radio |
| `bsnavbar` | Navbar | Navigation bar |
| `bsmodal` | Modal | Modal dialog |
| `bscard` | Card | Card component |
| `bsalert` | Alert | Alert message |
| `bsbadge` | Badge | Badge component |
| `bsspinner` | Spinner | Loading spinner |
| `bsprogress` | Progress bar | Progress indicator |
| `bsdropdown` | Dropdown | Dropdown menu |
| `bstable` | Table | Data table |
| `bscontainer` | Container | Fixed container |
| `bscontainer-fluid` | Fluid container | Full-width container |
| `bsrow` | Row | Grid row |
| `bscol` | Column | Grid column |
| `bsaccordion` | Accordion | Collapsible accordion |
| `bstoast` | Toast | Toast notification |
| `bstooltip` | Tooltip | Tooltip component |
| `bspopover` | Popover | Popover component |

### HTML5 Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `html5` | HTML5 document | Complete HTML5 structure |
| `htmlheader` | Semantic header | Header with nav |
| `htmlmain` | Semantic main | Main content area |
| `htmlfooter` | Semantic footer | Footer element |
| `htmlarticle` | Article | Article with header |
| `htmlsection` | Section | Section element |
| `htmlform` | Accessible form | Form with ARIA labels |
| `htmlbutton` | Accessible button | Button with aria-label |
| `htmllink` | Accessible link | Link with aria-label |
| `htmlimg` | Accessible image | Image with alt and loading |
| `htmltable` | Accessible table | Table with caption and scope |
| `htmlmeta` | Meta tag | Meta element |
| `htmlog` | Open Graph | OG meta tags |
| `htmllink-css` | Stylesheet link | Link to CSS |
| `htmlscript` | Script tag | External script |
| `htmlscript-inline` | Inline script | Script block |
| `htmlstyle` | Style tag | Style block |
| `htmldetails` | Details/Summary | Collapsible details |
| `htmldialog` | Dialog | Modal dialog element |
| `htmlpicture` | Picture element | Responsive images |
| `htmlvideo` | Video | Video with captions |
| `htmlaudio` | Audio | Audio element |

### Pug Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `pughtml5` | HTML5 document | Pug HTML5 structure |
| `pugheader` | Semantic header | Header with nav |
| `pugmain` | Semantic main | Main content |
| `pugfooter` | Semantic footer | Footer element |
| `pugarticle` | Article | Article structure |
| `pugsection` | Section | Section element |
| `pugform` | Accessible form | Form with labels |
| `pugbutton` | Accessible button | Button element |
| `puglink` | Accessible link | Link element |
| `pugimg` | Accessible image | Image element |
| `pugtable` | Accessible table | Table structure |
| `pugcard` | Card component | Card layout |
| `pugnav` | Navigation | Nav menu |
| `puglist` | Unordered list | UL element |
| `pugol` | Ordered list | OL element |
| `pugdiv` | Div with class | `.className` |
| `pugdiv-id` | Div with ID | `#idName` |
| `puginput` | Input field | Input element |
| `pugtextarea` | Textarea | Textarea element |
| `pugselect` | Select dropdown | Select element |
| `pugmixin` | Mixin definition | `mixin name()` |
| `pugmixin-call` | Mixin call | `+mixinName()` |
| `puginclude` | Include | `include path` |
| `pugextends` | Extends layout | `extends layout` |
| `pugblock` | Block | `block name` |
| `pugif` | Conditional | `if condition` |
| `pugeach` | Each loop | `each item in items` |
| `pugwhile` | While loop | `while condition` |
| `pugcase` | Case statement | `case value` |

### Razor Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `razorpage` | Razor page | `@page` directive |
| `razorview` | Razor view | `@model` directive |
| `razorlayout` | Razor layout | Layout template |
| `razorsection` | Section | `@section` block |
| `razorif` | If statement | `@if (condition)` |
| `razorforeach` | Foreach loop | `@foreach (var item in collection)` |
| `razorfor` | For loop | `@for (int i = 0; i < count; i++)` |

### TypeScript Snippets

| Prefix | Description | Output |
|--------|-------------|--------|
| `tsinterface` | Interface definition | `interface Name { }` |
| `tsinterface-extends` | Interface extending | `interface Name extends Base { }` |
| `tstype` | Type alias | `type Name = string` |
| `tsunion` | Union type | `type Name = string \| number` |
| `tsintersection` | Intersection type | `type Name = TypeA & TypeB` |
| `tsgeneric` | Generic type | `type Name<T> = Array<T>` |
| `tsenum` | Enum | `enum Name { KEY = 'value' }` |
| `tsenum-numeric` | Numeric enum | `enum Name { KEY = 0 }` |
| `tsconst-enum` | Const enum | `const enum Name { KEY = 'value' }` |
| `tsclass` | Class | `class Name { }` |
| `tsclass-extends` | Class extending | `class Name extends Base { }` |
| `tsclass-implements` | Class implementing | `class Name implements Interface { }` |
| `tsfunction` | Function | `function name(): void { }` |
| `tsarrow` | Arrow function | `const name = (): void => { }` |
| `tsasync` | Async function | `async function name(): Promise<void> { }` |
| `tsasync-arrow` | Async arrow | `const name = async (): Promise<void> => { }` |
| `tsgeneric-function` | Generic function | `function name<T>(): T { }` |
| `tstypeguard` | Type guard | `function isType(): value is Type { }` |
| `tspartial` | Partial utility | `Partial<Type>` |
| `tsrequired` | Required utility | `Required<Type>` |
| `tspick` | Pick utility | `Pick<Type, 'key'>` |
| `tsomit` | Omit utility | `Omit<Type, 'key'>` |
| `tsrecord` | Record utility | `Record<string, number>` |
| `tsreadonly` | Readonly utility | `Readonly<Type>` |
| `tsextract` | Extract utility | `Extract<Type, Union>` |
| `tsexclude` | Exclude utility | `Exclude<Type, Union>` |
| `tsnonnullable` | NonNullable utility | `NonNullable<Type>` |
| `tsparameters` | Parameters utility | `Parameters<typeof function>` |
| `tsreturntype` | ReturnType utility | `ReturnType<typeof function>` |
| `tsmapped` | Mapped type | `type Name = { [K in keyof Type]: Type[K] }` |
| `tsconditional` | Conditional type | `type Name = Type extends Condition ? True : False` |
| `tsnamespace` | Namespace | `namespace Name { }` |
| `tsmodule` | Module declaration | `declare module 'name' { }` |
| `tsassert` | Type assertion | `value as Type` |
| `tsassert-angle` | Type assertion (angle) | `<Type>value` |
| `tsoptional` | Optional property | `property?: Type` |
| `tsreadonly-prop` | Readonly property | `readonly property: Type` |
| `tsindex` | Index signature | `[key: string]: Type` |
| `tstuple` | Tuple type | `type Name = [string, number]` |
| `tstuple-readonly` | Readonly tuple | `type Name = readonly [string, number]` |
| `tsarray` | Array type | `Array<Type>` |
| `tsarray-literal` | Array literal | `Type[]` |
| `tspromise` | Promise type | `Promise<Type>` |
| `tstry` | Try-catch | `try { } catch (error) { }` |
| `tstry-finally` | Try-catch-finally | `try { } catch { } finally { }` |
| `tsfor` | For loop | `for (let i = 0; i < length; i++) { }` |
| `tsforof` | For-of loop | `for (const item of array) { }` |
| `tsforin` | For-in loop | `for (const key in object) { }` |
| `tswhile` | While loop | `while (condition) { }` |
| `tsif` | If statement | `if (condition) { }` |
| `tsifelse` | If-else | `if (condition) { } else { }` |
| `tsswitch` | Switch statement | `switch (value) { case: break; }` |
| `tsexport` | Export | `export const|function|class name` |
| `tsexport-default` | Default export | `export default name` |
| `tsimport` | Import | `import { name } from 'module'` |
| `tsimport-default` | Default import | `import name from 'module'` |
| `tsimport-all` | Import all | `import * as alias from 'module'` |
| `tsimport-type` | Type import | `import type { Type } from 'module'` |
| `tsconst` | Const declaration | `const name: Type = value` |
| `tslet` | Let declaration | `let name: Type = value` |
| `tsvar` | Var declaration | `var name: Type = value` |
| `tsnullcheck` | Null check | `if (value !== null && value !== undefined) { }` |
| `tsoptional-chain` | Optional chaining | `object?.property` |
| `tsnullish` | Nullish coalescing | `value ?? defaultValue` |
| `tstemplate-literal` | Template literal type | ``type Name = `prefix-${Union}` `` |
| `tskeyof` | Keyof operator | `keyof Type` |
| `tstypeof` | Typeof operator | `typeof value` |
| `tsinstanceof` | Instanceof operator | `value instanceof Class` |
| `tsin` | In operator | `'key' in object` |
| `tssatisfies` | Satisfies operator | `value satisfies Type` |
| `tsassertion-fn` | Assertion function | `function assertType(): asserts value is Type { }` |
| `tsdecorator` | Decorator | `@decorator(args)` |
| `tsabstract` | Abstract class | `abstract class Name { }` |
| `tsgetter` | Getter | `get property(): Type { }` |
| `tssetter` | Setter | `set property(value: Type) { }` |
| `tsstatic` | Static method | `static method(): Type { }` |
| `tsprivate` | Private method | `private method(): Type { }` |
| `tsprotected` | Protected method | `protected method(): Type { }` |
| `tspublic` | Public method | `public method(): Type { }` |
| `tsreadonly-mod` | Readonly modifier | `readonly property: Type` |
| `tsaccessor` | Accessor modifiers | `public|private|protected property: Type` |

## Test Cases

### Vue 3 Component Test

Create a new `.vue` file and type `vbase`:

```vue
<template>
  <div>
    <!-- Test content -->
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Styles here */
</style>
```

### Tailwind Button Test

In any HTML or Vue file, type `twbtn`:

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Button Text
</button>
```

## Compatibility

- Vue 3.x
- TypeScript 4.x+ (Full support with dedicated snippets)
- Tailwind CSS 3.x & 4.x
- Bootstrap 5.x & 6.x
- Vite 3.x+
- Nuxt 3.x
- Pinia 2.x+
- Vue Router 4.x+
- Visual Studio Code 1.60+
- TypeScript React (.tsx files)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Vue.js team for the amazing framework
- Tailwind Labs for the utility-first CSS framework
- Bootstrap team for the comprehensive component library
- All contributors and users of this extension

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/heberalmeida/vue-snippets-js-html-pug-razor/issues) on GitHub.

---

**Made with love for the Vue.js community**
