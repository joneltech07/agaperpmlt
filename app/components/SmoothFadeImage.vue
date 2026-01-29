<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 4000,
  },
  duration: {
    type: Number,
    default: 1500,
  },
})

const index = ref(0)
const fading = ref(false)

const nextIndex = computed(
  () => (index.value + 1) % props.images.length
)

let timer

onMounted(() => {
  timer = setInterval(() => {
    fading.value = true

    setTimeout(() => {
      index.value = nextIndex.value
      fading.value = false
    }, props.duration)
  }, props.interval)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="relative overflow-hidden w-full h-full">
    <!-- Current image -->
    <img
      :src="props.images[index]"
      class="absolute inset-0 w-full h-full object-cover transition-opacity"
      :style="`transition-duration:${duration}ms`"
      :class="fading ? 'opacity-0' : 'opacity-100'"
      draggable="false"
    />
  </div>
</template>
