<template>
  <section>
    <Banner title="AGAPERPMLT Events" />

    <Section>
      <div class="flex flex-wrap justify-center gap-5">
        <EventCard
          v-for="event in events"
          :key="event.title"
          customClass="w-full md:w-70"
          :event="event"
        />
      </div>
    </Section>
  </section>
</template>

<script setup lang="ts">
import { link } from '#build/ui'
import Section from '~/layouts/Section.vue'

const events = [
  {
    title: 'Community Outreach',
    location: 'La Trinidad, Benguet',
    date: 'Saturday, July 15, 2024',
    image: {
      src: 'logo.png',
      alt: 'Community Outreach'
    },
    link: '/events/community-outreach'
  },
  {
    title: 'Youth Retreat',
    location: 'Baguio City',
    date: 'Saturday, August 20, 2024',
    image: {
      src: '/images/youth_retreat.jpg',
      alt: 'Youth Retreat'
    },
    link: '/events/community-outreach'
  },
  {
    title: 'Worship Night',
    location: 'La Trinidad, Benguet',
    date: 'Saturday, September 10, 2024',
    image: {
      src: '/images/worship_night.jpg',
      alt: 'Worship Night'
    },
    link: '/events/community-outreach'
  }
]
</script>
