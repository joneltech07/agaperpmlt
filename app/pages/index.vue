<template>
	<main class="min-h-screen flex flex-col justify-center gap-5 md:gap-10 pb-20">
		<HeroSection />
		<div class="p-3 md:p-5 md:px-5 lg:px-15 flex flex-col gap-10 md:gap-20">
			<CallToActionSection />
			<ServiceInfoSection />
			<ChurchIntroSection />

			<!-- TODO:Upcoming Events -->
			<UpcomingEventsSection />
		</div>
	</main>
</template>


<script setup>
import { useHead, useRuntimeConfig } from '#app';
import CallToActionSection from '~/components/Home/CallToActionSection.vue';
import ChurchIntroSection from '~/components/Home/ChurchIntroSection.vue';
import UpcomingEventsSection from '~/components/Home/UpcomingEventsSection.vue';

const runtimeConfig = useRuntimeConfig();

// Assuming your website URL is set in runtimeConfig.public.baseURL

// console.log('Runtime Config:', runtimeConfig.public.baseURL);

const websiteBaseURL = 'https://agaperpmlt.vercel.app';
const imageUrl = `${websiteBaseURL}/images/agape.jpg`;

useHead({
	title: 'AGAPE REACHING PEOPLE MINISTRY LA TRINIDAD',
	meta: [
		// Open Graph Tags (used by most platforms like Facebook, LinkedIn, Discord)
		{ property: 'og:title', content: 'AGAPE REACHING PEOPLE MINISTRY LA TRINIDAD' },
		{ property: 'og:description', content: 'A compelling description of your homepage content.' },
		{ property: 'og:image', content: imageUrl },
		{ property: 'og:url', content: websiteBaseURL },
		{ property: 'og:type', content: 'website' },

		// Twitter Card Tags (specific for X/Twitter)
		// { name: 'twitter:card', content: 'summary_large_image' }, // Use 'summary_large_image' for a large image preview
		// { name: 'twitter:title', content: 'Your Homepage Title' },
		// { name: 'twitter:description', content: 'A compelling description of your homepage content.' },
		// { name: 'twitter:image', content: imageUrl },
	],
});
</script>
