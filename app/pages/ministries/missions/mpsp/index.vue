<template>
	<section>
		<Banner title="May Pag-asa sa Pagbasa (MPSP)" background-image="/images/missions/mpsp.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10">
			<h2 class="text-2xl md:text-3xl font-bold mb-4">May Pag-asa sa Pagbasa (MPSP)</h2>

			<div class="flex gap-4 flex-wrap mb-4">
				<UModal fullscreen v-for="(image, key) in images" :key="key">
					<NuxtImg :src="image.src" :alt="image.alt" sizes="100vw md:300px" :custom="true"
						v-slot="{ src, isLoaded, imgAttrs }" @click="select(key)">
						<!-- Show the actual image when loaded -->
						<img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="rounded object-cover" />
						<!-- Show a placeholder while loading -->
						<USkeleton v-else class="w-full md:w-50 aspect-200/200" />
					</NuxtImg>

					<template #body>
						<div class="w-full p-1 md:py-0 md:px-20">
							<UCarousel v-slot="{ item }" arrows :items="images.map(img => img.src)" :autoplay="false"
								initial-index="1" class="w-full" :prev="{ onClick: onClickPrev }" :next="{ onClick: onClickNext }"
								:loop="true">
								<img :src="images[activeIndex]?.src" class="w-full border rounded-lg" />
							</UCarousel>
						</div>
					</template>
				</UModal>
			</div>

			<p>Driven by a deep compassion for the next generation, our disciples actively partner with local schools to
				combat illiteracy. This initiative goes beyond simple tutoring; we mentor children in literacy and reading
				comprehension using specialized resources rooted in the Word of God. By sharpening their minds and nourishing
				their spirits, we aim to build a foundation for both academic success and spiritual growth.</p>
		</section>
	</section>
</template>

<script setup lang="ts">
const activeIndex = ref(0);

function onClickPrev() {
	activeIndex.value = activeIndex.value <= 0 ? images.length - 1 : activeIndex.value - 1;
}

function onClickNext() {
	activeIndex.value = activeIndex.value >= images.length - 1 ? 0 : activeIndex.value + 1;
}

function select(index: number) {
	activeIndex.value = index;
}

const images = [
	{
		src: '/images/missions/mpsp/children_reading.jpg',
		alt: 'Children Reading'
	},
	{
		src: '/images/missions/mpsp/teaching_children.jpg',
		alt: 'Teaching Children'
	},
	{
		src: '/images/missions/mpsp/teaching_with_passion.jpg',
		alt: 'Teaching with Passion'
	}
];
</script>