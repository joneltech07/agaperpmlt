<template>
	<UModal fullscreen v-for="(image, key) in props.images" :key="key">
		<NuxtImg :src="image.src" :alt="image.alt" sizes="100vw md:300px" :custom="true"
			v-slot="{ src, isLoaded, imgAttrs }" @click="select(key)">
			<!-- Show the actual image when loaded -->
			<img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="rounded object-cover" />
			<!-- Show a placeholder while loading -->
			<USkeleton v-else class="w-full md:w-50 aspect-200/200" />
		</NuxtImg>

		<template #body>
			<div class="w-full p-1 md:py-0 md:px-20">
				<UCarousel v-slot="{ item }" @select="onSelect" arrows :items="images.map(img => img.src)" :autoplay="false" initial-index="1"
					class="w-full" :prev="{ onClick: onClickPrev }" :next="{ onClick: onClickNext }" :loop="true">
					<img :src="images[activeIndex]?.src" class="w-full border rounded-lg" />
				</UCarousel>
			</div>
		</template>
	</UModal>
</template>

<script setup lang="ts">

const props = defineProps({
	images: {
		type: Array as () => { src: string; alt: string }[],
		default: () => []
	}
})

const activeIndex = ref(0);

function onClickPrev() {
	activeIndex.value = activeIndex.value <= 0 ? props.images.length - 1 : activeIndex.value - 1;
}

function onClickNext() {
	activeIndex.value = activeIndex.value >= props.images.length - 1 ? 0 : activeIndex.value + 1;
}

function select(index: number) {
	activeIndex.value = index;
}

function onSelect(index: number) {
	activeIndex.value = index;
}

</script>