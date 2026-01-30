<template>
    <div class="flex px-32 bg-secondary-light dark:bg-slate-800 text-center justify-center items-center"
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

@media (max-width: 768px) {
    div {
        padding-top: 64px;
        padding-bottom: 64px;
    }
}
</style>