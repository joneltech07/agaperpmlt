<template>
	<!-- Leader Profile Card -->
	<div
		class="card flex flex-col md:flex-row w-full md:w-160 h-auto md:min-h-70 dark:border dark:border-primary overflow-hidden self-center my-25 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-none">
		<div class="w-full md:w-[30%]">
			<img :src="props.imageSrc" :alt="props.name" class="w-full md:w-70 min-h-70 h-full object-cover object-center" />
		</div>

		<div class="w-full md:w-[70%] p-7">
			<h3 class="text-2xl font-bold">{{ props.name }}</h3>
			<p class="text-sm italic text-gray-500 dark:text-primary">{{ props.role }}</p>
			<p class="text-sm text-gray-500 mb-4">{{ props.area }}</p>
			<p>{{ props.bio }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
	role: string;
	area: string;
	imageSrc: string;
	bio: string;
}>();
</script>