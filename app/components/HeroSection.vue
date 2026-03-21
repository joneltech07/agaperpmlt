<template>
  <div class="h-70 md:h-167.5 p-0 w-full relative bg-slate-800 overlow-hidden">
    <UCarousel
      v-slot="{ item }"
      loop
      dots
      :autoplay="{ delay: 5000 }"
      wheel-gestures
      :prev="{ variant: 'solid' }"
      :next="{ variant: 'solid' }"
      :items="images"
      :ui="{
        item: 'basis-full ps-0',
        prev: 'sm:start-8',
        next: 'sm:end-8',
        container: 'ms-0'
      }"
    >
      <img
        :src="item.src"
        width="320"
        height="320"
        :alt="item.alt"
        class="object-cover w-full h-70 md:h-167.5 opacity-50 select-none pointer-events-none"
        draggable="false"
        ondragstart="return false;"
      />
    </UCarousel>

    <div
      class="flex flex-col absolute w-full top-30 left-1/2 md:top-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 text-white text-center text-shadow-lg"
    >
      <h1 class="font-poppins text-2xl md:text-5xl font-bold">
        AGAPE REACHING PEOPLE MINISTRIES INC.
      </h1>
      <p class="text-md md:text-xl font-semibold">
        Loving God • Loving People • Reach the World
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: '/images/hero1.jpg',
    alt: 'Hero Image 1'
  },
  {
    src: '/images/hero2.jpg',
    alt: 'Hero Image 2'
  },
  {
    src: '/images/hero3.jpg',
    alt: 'Hero Image 3'
  },
  {
    src: '/images/hero4.jpg',
    alt: 'Hero Image 4'
  },
  {
    src: '/images/hero5.jpg',
    alt: 'Hero Image 5'
  }
]
</script>
