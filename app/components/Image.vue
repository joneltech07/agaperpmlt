<template>
    <div class="text-center flex flex-col items-center gap-4">
        <div class="overflow-hidden rounded-2xl shadow-xl">
            <img class="w-80 h-80 w-full object-cover" :src="props.src" :alt="props.alt">
        </div>

        <div>
            <p class="font-bold font-poppins text-2xl">{{ props.name }}</p>
            <p>{{ props.position }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: ''
    },
});
</script>