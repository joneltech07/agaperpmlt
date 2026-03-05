<template>
	<section>
		<Banner title="Christians for Nation Building (C4NB)" background-image="/images/missions/c4nb.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-5">
			<div class="flex gap-4 flex-wrap">
				<ModalCarouselImage :images="images" />
			</div>

			<p>As part of a vital national movement, the church stands firmly in the gap for our country. C4NB is dedicated to
				strengthening Filipino disciples who are committed to honoring Christ in the public sphere. Locally, we work in
				unity with fellow churches in Benguet to reach out to Criminology students. By mentoring these future leaders in
				their formative university years, we are helping to raise a generation of law enforcement professionals who lead
				with integrity and godly character.</p>

			<USeparator />

			<!-- Leader Profile Card -->

			<CoordinatorCard name="Jaysabel Calpo" role="C4NB Coordinator" area="CAR" image-src="/images/leaders/jaysabel_calpo.jpeg"
				bio="Jaysabel is a dedicated advocate for nation-building and a passionate mentor to the students involved in the C4NB program. With a heart for empowering the next generation of leaders, she strives to instill values of integrity and godly character in the future law enforcement professionals." />

		</section>
	</section>
</template>

<script setup lang="ts">
import CoordinatorCard from '~/components/CoordinatorCard.vue';
import ModalCarouselImage from '~/components/ModalCarouselImage.vue';

const images = [
	{
		src: '/images/missions/c4nb/game_activity.jpg',
		alt: 'Game Activity'
	},
	{
		src: '/images/missions/c4nb/group_presentation.jpg',
		alt: 'Group Presentation'
	},
	{
		src: '/images/missions/c4nb/team_work.jpg',
		alt: 'Team Work'
	}
];
</script>