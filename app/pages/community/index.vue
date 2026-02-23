<template>
	<Banner title="FIND COMMUNITY" />

	<div class="p-7 md:p-10 flex justify-center">
		<div class="flex flex-wrap gap-4 justify-stretch w-full md:px-3 lg:px-15">
			<CallToActionCard class="grow" v-for="value in callToActionItems" :key="value.title" :image-background="value.imageBackground">
				<template #title>
					{{ value.title }}
				</template>
				<template #description>
					{{ value.description }}
				</template>
				<template #button-text>
					<a :href="value.link"> Read More </a>
				</template>
			</CallToActionCard>
		</div>
	</div>
</template>

<script setup lang="ts">
import CallToActionCard from '~/components/Home/CallToActionCard.vue';

const callToActionItems = [
	{
		title: 'Cell Groups',
		description: 'Join a small group to connect and grow in faith together.',
		imageBackground: '/images/cellgroup.jpg',
		link: '/community/cellgroups'
	},
	{
		title: 'Volunteer Opportunities',
		description: 'Serve in various ministries and outreach programs.',
		imageBackground: '/images/volunteers.jpg',
		link: '/community/volunteers'
	}
]
</script>