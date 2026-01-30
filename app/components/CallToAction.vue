<template>
  <div
    class="flex flex-col justify-end p-2 rounded-2xl overflow-hidden relative dark:border dark:border-primary w-full md:w-80 min-h-90 bg-primary dark:bg-slate-800 shadow-lg dark:shadow-none">
    <div class="w-full h-full absolute bottom-0 left-0 right-0 bg-cover bg-center z-10 opacity-60 hover:scale-110 transition"
      :style="{ backgroundImage: `url(${props.imageBackground})` }"></div>

    <div class="p-2 relative flex flex-col gap-4 justify-end text-white z-20">
      <div>
        <h3 class="text-2xl font-bold text-shadow-md">
          <slot name="title">
            Components
          </slot>
        </h3>
        <p class="text-shadow-lg">
          <slot name="description">
            Call to Action
          </slot>
        </p>
      </div>

      <div>
        <div
          class="p-2 px-5 rounded-xl border-2 w-auto inline-block bg-white/20 hover:bg-white/30 transition">
          <a href="https://example.com" target="_blank">
            <slot name="button-text"> Get Started </slot>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageBackground: {
    type: String,
    default: "/logo.png",
  }
})
</script>
