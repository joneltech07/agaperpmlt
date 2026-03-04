<template>
	<div
		:class="`flex flex-col justify-end p-2 rounded-2xl overflow-hidden relative dark:border dark:border-primary w-full md:w-50 min-h-90 bg-primary dark:bg-slate-800 shadow-lg dark:shadow-none ${props.class}`">
		<div
			class="w-full h-full absolute bottom-0 left-0 right-0 bg-cover bg-center z-10 opacity-60 hover:scale-110 transition"
			:style="{ backgroundImage: `url(${props.imageBackground})` }"></div>

		<div class="p-2 relative flex flex-col gap-4 justify-end text-white z-20 bg-primary/70 dark:bg-slate-800/70 rounded-2xl">
			<div>
				<h3 class="text-2xl font-bold text-shadow-2xl">
					<slot name="title">
						Components
					</slot>
				</h3>
				<p class="text-shadow-2xl text-sm/4">
					<slot name="description">
						Call to Action
					</slot>
				</p>
			</div>

			<div>
				<div class="p-2 px-5 rounded-xl border-2 w-auto inline-block bg-white/20 hover:bg-white/30 transition">
					<slot name="button-text"> Get Started </slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	imageBackground: {
		type: String,
		default: "/logo.png",
	},
	class: {
		type: String,
		default: ''
	}
})
</script>
