<template>
	<section>
		<Banner title="Bless Our Cops (and Soldiers) Movement" background-image="/images/missions/boc.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-5">
			<div class="flex gap-4 flex-wrap">
				<ModalCarouselImage :images="images" />
			</div>

			<p>For many years, our church has been a dedicated partner in
				this movement, recognizing the unique sacrifices of those in uniform. Our mission is to "plant the seed of
				truth" in the hearts of our police officers and soldiers. Through regular visitation, prayer, and fellowship,
				we provide a spiritual lifeline to those who protect our nation, ensuring they are equipped with the strength
				that only Christ can provide.</p>

			<USeparator />

			<!-- Leader Profile Card -->
			<CoordinatorCard name="Nova Tobyagon" role="BOC Coordinator" area="" image-src='/images/leaders/nova_tobyagon.jpg'
				bio="Nova Tobyagon is the dedicated BOC Coordinator, leading our church's mission to serve and uplift law enforcement and military personnel. With a heart for ministry and a passion for strengthening the spiritual foundation of those who serve, Nova orchestrates meaningful fellowship, prayer vigils, and support programs for our uniformed heroes. Through her compassionate leadership, she ensures that every officer and soldier knows they are valued, remembered, and prayed for by our faith community." />
		</section>
	</section>
</template>

<script setup lang="ts">
import CoordinatorCard from '~/components/CoordinatorCard.vue';
import ModalCarouselImage from '~/components/ModalCarouselImage.vue';

const images = [
	{
		src: '/images/missions/boc/facilitation.jpg',
		alt: 'Game Activity'
	},
	{
		src: '/images/missions/boc/group_discussion.jpg',
		alt: 'Group Discussion'
	},
	{
		src: '/images/missions/boc/group_photo.jpg',
		alt: 'Group Photo'
	}
];
</script>