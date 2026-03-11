<template>
    <div class="flex flex-col gap-4 w-full md:px-32 bg-secondary-light dark:bg-slate-700 text-center justify-center items-center bg-blend-overlay"
        :style="{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <h1 class="text-center w-full text-white font-bold text-5xl font-poppins">{{ props.title.toUpperCase() }}</h1>
				<slot></slot>
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
    padding-top: 100px;
    padding-bottom: 100px;
}

@media (max-width: 768px) {
    div {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    h1 {
        font-size: 2rem;
    }
}
</style>