<template>
  <div
    class="
      flex flex-col
      relative
      rounded-xl
      overflow-hidden
      bg-white
      dark:bg-dark-500
      transition
      duration-300
      shadow-xl
      hover:shadow-2xl
      max-w-350px
      h-min
    "
  >
    <button @click="item.love = !item.love" class="absolute top-4 right-4 rounded-lg focus:outline-none">
      <transition name="zoom" mode="out-in">
        <IconHeartOutline v-if="!item.love" class="text-white filter drop-shadow-md w-8 h-8"></IconHeartOutline>
        <IconHeart v-else class="text-red-500 filter drop-shadow-md w-8 h-8"></IconHeart>
      </transition>
    </button>
    <img class="h-54 w-full object-cover" :src="item.image" :alt="item.address" />
    <a href="" class="">
      <div class="flex flex-col px-4 py-6">
        <h5 class="font-extrabold text-gray-500 dark:text-gray-400 tracking-wider text-sm uppercase">
          Detached House · {{ item.years_old }}Y Old
        </h5>
        <h4 class="font-medium text-gray-700 dark:text-white text-3xl py-2">${{ item.price }}</h4>
        <h6 class="font-medium text-gray-400 text-sm">{{ item.address }}</h6>
      </div>
      <div class="flex items-center w-full p-4 border-y-2 border-gray-100 dark:border-dark-300">
        <div class="flex items-center w-1/2">
          <IconBed class="w-8 h-8 mr-2 text-gray-300"></IconBed>
          <p class="font-medium text-gray-400">
            <span class="font-extrabold text-gray-700 dark:text-white"> {{ item.amenities.bedroom }} </span>
            Bedrooms
          </p>
        </div>
        <div class="flex items-center w-1/2">
          <IconBath class="w-6 h-6 mr-2 text-gray-300"></IconBath>
          <p class="font-medium text-gray-400">
            <span class="font-extrabold text-gray-700 dark:text-white"> {{ item.amenities.bathroom }} </span>
            Bathrooms
          </p>
        </div>
      </div>
      <div class="flex flex-col p-4 transition duration-300 bg-light-200 dark:bg-dark-800 hover:bg-light-400">
        <h6 class="font-extrabold text-gray-400 text-xs uppercase tracking-wider">Realtor</h6>
        <div class="mt-2 flex items-center">
          <img class="rounded-full w-14 h-14 object-cover" :src="item.realtor.image" alt="Realtor name" />
          <div class="flex flex-col ml-4">
            <h4 class="font-extrabold text-gray-700 dark:text-white">{{ item.realtor.name }}</h4>
            <h5 class="font-medium text-gray-500">{{ item.realtor.phone_number }}</h5>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import IconBed from "./IconBed.vue"
import IconBath from "./IconBath.vue"
import IconHeartOutline from "./IconHeartOutline.vue"
import IconHeart from "./IconHeart.vue"
import { CardType } from "../interface"
import { PropType } from "@vue/runtime-core"
defineProps({
  item: {
    type: Object as PropType<CardType>,
    required: true,
  },
})
</script>
