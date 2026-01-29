<template>
  <button
    :class="`flex gap-3 w-full md:w-auto items-center min-h-auto md:min-h-7 justify-center p-2 px-7 font-semibold border-none dark:border dark:text-slate-900 select-none rounded-lg bg-primary text-white hover:bg-secondary-dark/50 dark:hover:bg-primary/70 transition shadow-lg dark:shadow-none hover:cursor-pointer ${props.class}`">
    <slot name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>
