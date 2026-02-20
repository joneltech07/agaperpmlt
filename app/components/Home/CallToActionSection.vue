<template>

	<!-- Main Contaier -->
	<div class="w-full">
		<!-- Top Info -->
		<div class="flex justify-center">
			<div class="flex flex-wrap gap-4 justify-stretch w-full md:px-5 lg:px-15">
				<CallToActionCard class="grow" v-for="value in callToActionItems" :key="value.title"
					:image-background="value.imageBackground">
					<template #title>
						{{ value.title }}
					</template>
					<template #description>
						{{ value.description }}
					</template>
					<template #button-text>
						<a :href="value.link"> Learn More </a>
					</template>
				</CallToActionCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CallToActionCard from './CallToActionCard.vue';

const callToActionItems = [
	{
		title: "I'm New",
		description: 'Discover more about our church and how to get connected.',
		imageBackground: '/images/im_new.jpg',
		link: '/visit'
	},
	{
		title: 'Ministries',
		description: 'Explore our various ministries and how you can get involved.',
		imageBackground: '/images/ministries.jpg',
		link: '/ministries'
	},
	{
		title: 'Community',
		description: 'Connect with others in our church family.',
		imageBackground: '/images/community.jpg',
		link: '/events'
	}
]
</script>