<template>
	<section>
		<Banner title="May Pag-asa sa Pagbasa (MPSP)" background-image="/images/missions/mpsp.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-5">
			<div class="flex gap-4 flex-wrap">
				<ModalCarouselImage :images="images" />
			</div>

			<p>Driven by a deep compassion for the next generation, our disciples actively partner with local
				schools to
				combat illiteracy. This initiative goes beyond simple tutoring; we mentor children in literacy and reading
				comprehension using specialized resources rooted in the Word of God. By sharpening their minds and nourishing
				their spirits, we aim to build a foundation for both academic success and spiritual growth.</p>

			<USeparator />

			<!-- Leader Profile Card -->

			<CoordinatorCard name="Jerome Cabinta" role="MPSP Coordinator" area="" imageSrc="/images/leaders/jerome_cabinta.jpg"
				bio="Jerome is a passionate advocate for literacy and education, dedicating his time to mentoring children in the MPSP program. With a heart for nurturing young minds, he strives to empower the next generation with the gift of reading and comprehension." />

		</section>
	</section>
</template>

<script setup lang="ts">
import CoordinatorCard from '~/components/CoordinatorCard.vue';
import Image from '~/components/Image.vue';
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
		src: '/images/missions/mpsp/one_on_one_teaching.jpg',
		alt: 'Group Discussion with Kids'
	}
];
</script>