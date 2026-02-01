<template>

	<Banner title="GET INVOLVED" />

	<div class="p-7 md:p-10 flex justify-center">
		<div class="flex flex-wrap gap-4 justify-stretch w-full md:px-5 lg:px-30">
			<CallToAction class="grow" v-for="value in callToActionItems" :key="value.title" :image-background="value.imageBackground">
				<template #title>
					{{ value.title }}
				</template>
				<template #description>
					{{ value.description }}
				</template>
				<template #button-text>
					<a :href="value.link"> Read More </a>
				</template>
			</CallToAction>
		</div>
	</div>

</template>

<script setup lang="ts">
const callToActionItems = [
	{
		title: 'Missions',
		description: 'Explore our various ministries and missions.',
		imageBackground: '/images/missions.jpg',
		link: '/ministries/missions'
	},
	{
		title: 'Intercessory',
		description: 'Pray for the needs of our community and beyond.',
		imageBackground: '/images/intercessory.jpg',
		link: '/ministries/intercessory'
	},
	{
		title: 'Media',
		description: 'Stay updated with our latest sermons and events.',
		imageBackground: '/images/media.jpg',
		link: '/ministries/media'
	},
	{
		title: 'Worship',
		description: 'Join us in praising and worshiping God.',
		imageBackground: '/images/worship.jpg',
		link: '/ministries/worship'
	},
	{
		title: 'Children',
		description: 'Engage your children in a fun and safe environment.',
		imageBackground: '/images/children.jpg',
		link: '/ministries/children'
	},
	{
		title: 'Sociable',
		description: 'Connect and build relationships within our church community.',
		imageBackground: '/images/sociable.jpg',
		link: '/ministries/sociable'
	},
	{
		title: 'Consolidation',
		description: 'Strengthen your faith through our consolidation programs.',
		imageBackground: '/images/consolidation.jpg',
		link: '/ministries/consolidation'
	},
	{
		title: 'Finance',
		description: 'Support our church through financial contributions.',
		// imageBackground: '/images/finance.jpg',
		link: '/ministries/finance'
	},
	{
		title: 'Kitchen',
		description: 'Help us provide meals for those in need.',
		imageBackground: '/images/kitchen.jpg',
		link: '/ministries/kitchen'
	},
	{
		title: 'Technical',
		description: 'Assist with our technical needs during services and events.',
		// imageBackground: '/images/technical.jpg',
		link: '/ministries/technical'
	}
];
</script>