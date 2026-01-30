<template>
	<a :href="visitLink"
		class="flex flex-col rounded-2xl overflow-hidden dark:border dark:border-primary w-full md:w-95 min-h-50 shadow-lg dark:shadow-none hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 hover:cursor-pointer dark:hover:border-primary">

		<div class="h-45 w-full overflow-hidden">
			<div class="h-full w-full bg-cover bg-center hover:scale-110 transition"
				:style="{ backgroundImage: `url(${props.imageBackground})` }"></div>
		</div>

		<div class="p-4 flex-1 flex flex-col gap-4 justify-end text-white">
			<div>
				<h3 class="text-xl font-bold text-slate-900 dark:text-white">
					<slot name="title">
						Components
					</slot>
				</h3>
				<p class="text-slate-400">
					<slot name="description">
						Call to Action
					</slot>
				</p>
			</div>
		</div>
	</a>
</template>

<script setup lang="ts">
const props = defineProps({
	imageBackground: {
		type: String,
		default: "/logo.png",
	},

	visitLink: {
		type: String,
		default: "/#",
	},
});
</script>
