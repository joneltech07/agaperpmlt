<template>
  <div
    :class="`flex flex-col justify-end p-2 rounded-2xl overflow-hidden relative w-full md:w-50 min-h-90 bg-slate-800 shadow-lg dark:shadow-none border-slate-700 ${props.class}`"
  >
    <div
      class="w-full h-full absolute bottom-0 left-0 right-0 bg-cover bg-center z-10 opacity-60 hover:scale-110 transition"
      :style="{ backgroundImage: `url(${props.imageBackground})` }"
    ></div>

    <div
      class="p-2 relative flex flex-col gap-4 justify-end z-20 backdrop-blur-[1px] border bg-white/20 border-white dark:bg-slate-700/30 dark:border-slate-400 rounded-2xl"
    >
      <div>
        <h3
          class="text-2xl font-bold text-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] text-ellipsis h-10 overflow-hidden whitespace-nowrap text-white"
        >
          <slot name="title"> Components </slot>
        </h3>

        <p
          class="text-shadow-[1px_1px_2px_rgba(0,0,0,1)] text-sm/4 overflow-hidden h-8 line-clamp-2 text-ellipsis text-white/95"
        >
          <slot name="description"> Call to Action </slot>
        </p>
      </div>

      <div>
        <div
          class="rounded-xl w-auto shadow-lg inline-block bg-white/20 hover:bg-white/30 transition text-white border-white text-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
        >
          <slot name="button-text"> Get Started </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageBackground: {
    type: String,
    default: '/logo.png'
  },
  class: {
    type: String,
    default: ''
  }
})
</script>
