<template>
	<div class="min-h-screen flex items-center justify-center">
		<div class="text-center space-y-4">
			<h1 class="text-4xl font-bold">Nuxt 4 + Tailwind</h1>
			<p class="text-gray-600">Everything is working 🎉</p>
			<UButton color="primary">Nuxt UI Button</UButton>
		</div>
	</div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>