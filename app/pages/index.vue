<template>
	<div class="min-h-screen flex flex-col justify-center">
		<HeroSection />
		<MainSection />
		<ServiceInfoSection />
	</div>
</template>


<script setup>
import { useHead, useRuntimeConfig } from '#app';

const runtimeConfig = useRuntimeConfig();
// Assuming your website URL is set in runtimeConfig.public.baseURL
const websiteBaseURL = runtimeConfig.public.baseURL || 'https://agaperpmlt.vercel.app'; 
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
