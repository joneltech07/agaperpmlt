<template>
	<section>
		<Banner title="Missions" background-image="/images/missions.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40">
			<section class="mb-10">
				<h2 class="text-2xl md:text-3xl font-bold mb-4">Beyond the Walls: Our Mission in the Field</h2>
				<p>The ministry of the church is not contained within four walls; it is a living mission that extends into the
					heart of our community. We believe that true servanthood happens "in the fields"—wherever there is a need for
					hope, guidance, and the light of the Gospel.</p>
			</section>

			<section class="w-full flex flex-col md:flex-row gap-7 md:gap-10">
				<CallToActionCard class="grow" v-for="(mission, key) in missions" :key="key"
					:image-background="mission.imageBackground">
					<template #title>
						{{ mission.title }}
					</template>
					<template #description>
						{{ mission.description }}
					</template>
					<template #button-text>
						<a :href="mission.link"> Read More </a>
					</template>
				</CallToActionCard>
			</section>
		</section>
	</section>
</template>

<script setup lang="ts">
import CallToActionCard from '~/components/Home/CallToActionCard.vue';

const missions = [
	{
		title: 'May Pag-asa sa Pagbasa',
		description: 'Driven by a deep compassion for the next generation, our disciples actively partner with local schools to combat illiteracy. This initiative goes beyond simple tutoring; we mentor children in literacy and reading comprehension using specialized resources rooted in the Word of God. By sharpening their minds and nourishing their spirits, we aim to build a foundation for both academic success and spiritual growth.',
		imageBackground: '/images/missions/mpsp.jpg',
		link: '/ministries/missions/mpsp'
	},
	{
		title: 'Christians for Nation Building (C4NB)',
		description: 'As part of a vital national movement, the church stands firmly in the gap for our country. C4NB is dedicated to strengthening Filipino disciples who are committed to honoring Christ in the public sphere. Locally, we work in unity with fellow churches in Benguet to reach out to Criminology students. By mentoring these future leaders in their formative university years, we are helping to raise a generation of law enforcement professionals who lead with integrity and godly character.',
		imageBackground: '/images/missions/c4nb.jpg',
		link: '/ministries/missions/c4nb'
	},
	{
		title: 'Bless Our Cops (and Soldiers) Movement',
		description: 'For many years, our church has been a dedicated partner in this movement, recognizing the unique sacrifices of those in uniform. Our mission is to "plant the seed of truth" in the hearts of our police officers and soldiers. Through regular visitation, prayer, and fellowship, we provide a spiritual lifeline to those who protect our nation, ensuring they are equipped with the strength that only Christ can provide.',
		imageBackground: '/images/missions/boc.jpg',
		link: '/ministries/missions/boc'
	}
]
</script>