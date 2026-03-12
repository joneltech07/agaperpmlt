<template>
  <div
    :class="`flex flex-col gap-2 p-2 bg-white rounded shadow-lg dark:bg-gray-800 ${customClass}`"
  >
    <NuxtImg
      :src="event.image.src"
      :alt="event.image.alt"
      width="200"
      height="300"
      :custom="true"
      v-slot="{ src, isLoaded, imgAttrs }"
    >
      <!-- Show the actual image when loaded -->
      <img
        v-if="isLoaded"
        v-bind="imgAttrs"
        :src="src"
        class="rounded w-full h-60 object-cover object-center"
      />

      <!-- Show a placeholder while loading -->
      <USkeleton v-else class="w-full h-60 rounded" />
    </NuxtImg>

    <div class="flex flex-col gap-2">
      <h2 class="text-primary font-bold">{{ event.title }}</h2>
      <div class="text-xs flex gap-1 items-center">
        <UIcon name="i-lucide-map-pin" class="inline-block mr-1" />
        {{ event.location }}
      </div>

      <div class="text-xs flex gap-1 items-center">
        <UIcon name="i-lucide-calendar" class="inline-block mr-1" />
        {{ event.date }}
      </div>

      <NuxtLink
        :to="event.link"
				target="_blank"
        class="rounded bg-white shadow px-3 py-2 text-slate-700 flex items-center justify-center gap-1 font-bold text-xs self-stretch md:self-start"
      >
        <UIcon name="i-lucide-external-link" class="inline-block" /> Learn More
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  event: {
    title: string
    location: string
    date: string
    image: {
      src: string
      alt: string
    }
    link: string
  }
  customClass: string
}>()
</script>
