<template>

  <div class="p-7 md:p-10 flex justify-center">
    <div class="flex flex-wrap gap-4 justify-stretch w-full md:px-5 lg:px-15">
      <CallToActionCard class="grow" v-for="value in callToActionItems" :key="value.title" :image-background="value.imageBackground">
        <template #title>
          {{ value.title }}
        </template>
        <template #description>
          {{ value.description }}
        </template>
        <template #button-text>
          <div class="flex items-center">
            <Icon name="mdi:book" class="h-5 w-5 mr-2" />
            <a :href="value.link"> Read More </a>
          </div>
        </template>
      </CallToActionCard>
    </div>
  </div>

</template>

<script setup lang="ts">
import CallToActionCard from '~/components/Home/CallToActionCard.vue';

const callToActionItems = [
	{
		title: 'Our Story',
		description: 'The history of Agape Reaching People Ministries La Trinidad.',
		imageBackground: '/images/ourstory.jpg',
		link: '/about/story'
	},
	{
		title: 'Leadership',
		description: 'Meet the Leadership team',
		imageBackground: '/images/hero3.jpg',
		link: '/about/leadership'
	},
	{
		title: 'Mission & Vision',
		description: 'Our mission, vision, and values',
		imageBackground: '/images/facilitation.jpg',
		link: '/about/mission-vision'
	}
]
</script>