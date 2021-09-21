<template>
  <main class="min-h-screen flex justify-center bg-gray-100 dark:bg-dark-200">
    <div class="p-4">
      <div class="mt-12 flex space-x-4 items-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Simple UI</h1>
        <a href="https://github.com/zernonia/bank-green-test" target="_blank">
          <IconGithub class="w-8 h-8 text-gray-900 dark:text-white"></IconGithub>
        </a>
        <label for="toggleB" class="flex items-center cursor-pointer">
          <div class="relative w-full">
            <span class="absolute top-1 left-1">🌙</span>
            <span class="absolute top-1 right-1">☀️</span>
            <input v-model="darkMode" type="checkbox" id="toggleB" class="sr-only" />
            <div class="checkbox-bg block bg-warm-gray-200 transition w-14 h-8 rounded-full"></div>
            <div class="checkbox-dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
        </label>
      </div>
      <div class="mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <Card v-for="i in items" :key="i.address" :item="i"></Card>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import Card from "./components/Card.vue"
import { CardType } from "./interface"
import IconGithub from "./components/IconGithub.vue"
import IconUser from "./components/IconUser.vue"

const items = ref<CardType[]>([
  {
    love: true,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80s",
    years_old: 4,
    price: "750,000",
    address: "742 Evergreen Terrace",
    amenities: {
      bedroom: 3,
      bathroom: 2,
    },
    realtor: {
      image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?resize=100",
      name: "Tiffany Heffner",
      phone_number: "(555) 555-4321",
    },
  },
  {
    love: false,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    years_old: 4,
    price: "550,000",
    address: "184 Everglow Terrace",
    amenities: {
      bedroom: 4,
      bathroom: 3,
    },
    realtor: {
      image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?resize=100",
      name: "Tiffany Heffner",
      phone_number: "(55) 555-4321",
    },
  },
])

const darkMode = ref(false)

watch(
  darkMode,
  (n) => {
    if (n) {
      document.documentElement.className = "dark"
    } else {
      document.documentElement.classList.remove("dark")
    }
  },
  {
    immediate: true,
  }
)
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}
input:checked ~ .checkbox-dot {
  transform: translateX(100%);
}
input:checked ~ .checkbox-bg {
  @apply bg-dark-600;
}
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.1s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
</style>
