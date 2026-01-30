<template>
    <div class="flex h-80 bg-secondary-light dark:bg-slate-800 text-center justify-center items-center"
        :style="{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <h1 class="text-center text-white font-bold text-5xl font-poppins">{{ props.title.toUpperCase() }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Header'
    },
    backgroundImage: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
div {
    padding-top: 128px;
    padding-bottom: 128px;
}
</style>