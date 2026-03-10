<template>
	<div class="text-center flex flex-col items-center gap-4 p-0">
		<NuxtImg :src="props.src" :alt="props.alt" width="200" height="300" :custom="true"
			v-slot="{ src, isLoaded, imgAttrs }">
			<!-- Show the actual image when loaded -->
			<img v-if="isLoaded" v-bind="imgAttrs" width="200" height="300" :src="src" class="rounded-2xl object-cover object-center shadow-md" />

			<!-- Show a placeholder while loading -->
			<USkeleton v-else class="w-full aspect-200/200" />
		</NuxtImg>

		<div>
			<p class="font-bold font-poppins text-sm md:text-lg">{{ props.name }}</p>
			<p class="text-xs md:text-sm">{{ props.position }}</p>
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