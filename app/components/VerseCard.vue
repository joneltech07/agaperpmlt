<template>
  <div>
    <h2 class="text-2xl font-bold mb-10 text-center">{{ props.header }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="(verse, index) in props.scriptures"
        :key="index"
        class="rounded-2xl shadow-lg dark:shadow-none dark:border dark:border-primary p-5 flex flex-col items-center justify-center gap-3"
      >
        <p class="font-bold text-center">{{ verse.title }}</p>
        <p class="italic text-center">{{ verse.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string
  scriptures: { title: string; text: string }[]
}>()
</script>
