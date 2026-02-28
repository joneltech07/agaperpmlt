<template>
	<div class="p-7 md:py-10">
		<h2 class="text-2xl font-bold mb-3 text-center">{{ title }}</h2>
		<div class="flex flex-wrap gap-5 md:gap-10 justify-center">
			<Image v-for="image in images" :key="image.name" :src="image.imgSrc" :alt="image.name" :name="image.name"
				:position="image.position" />
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: ''
	},
	images: {
		type: Array as () => Array<{ name: string; position: string; imgSrc: string }>,
		default: () => []
	}
})
</script>