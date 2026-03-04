<template>
	<section>
		<Banner title="May Pag-asa sa Pagbasa (MPSP)" background-image="/images/missions/mpsp.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10">
			<div class="flex gap-4 flex-wrap mb-4">
				<ModalCarouselImage :images="images" />
			</div>

			<p>Driven by a deep compassion for the next generation, our disciples actively partner with local schools to
				combat illiteracy. This initiative goes beyond simple tutoring; we mentor children in literacy and reading
				comprehension using specialized resources rooted in the Word of God. By sharpening their minds and nourishing
				their spirits, we aim to build a foundation for both academic success and spiritual growth.</p>
		</section>
	</section>
</template>

<script setup lang="ts">
import ModalCarouselImage from '~/components/ModalCarouselImage.vue';

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