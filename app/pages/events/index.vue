<template>
  <section>
    <Banner title="AGAPERPMLT Events" />

    <Section>
      <div class="flex flex-wrap justify-center gap-5">
        <EventCard
          v-for="event in events.slice(0, 3)"
          :key="event.title"
          customClass="w-full md:w-70"
          :event="event"
        />
      </div>

      <div class="w-full mt-20">
        <vue-cal
          view="month"
          :views="['week', 'month']"
          :events="
            events.map(event => ({
              start: event.start,
              end: event.end,
              title: event.title
            }))
          "
          events-on-month-view
        />
      </div>
    </Section>
  </section>
</template>

<script setup lang="ts">
import Section from '~/layouts/Section.vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

const events = [
  {
    title: "Women's Fellowship",
    location: 'Rosario',
    date: 'Saturday, March 14, 2026',
    image: {
      src: 'logo.png',
      alt: "Women's Fellowship"
    },
    link: '/events/community-outreach',
    start: new Date(new Date('2026-03-14').setHours(10, 30, 0, 0)),
    end: new Date(new Date('2026-03-14').setHours(11, 30, 0, 0))
  },
  {
    title: "Men's Convention 2026",
    location: 'Cuneta Astrodome',
    date: 'Saturday, March 14, 2026',
    image: {
      src: 'logo.png',
      alt: "Men's Convention 2026"
    },
    link: '/events/community-outreach',
    start: new Date(new Date('2026-03-14').setHours(10, 30, 0, 0)),
    end: new Date(new Date('2026-03-14').setHours(11, 30, 0, 0))
  },
  {
    title: 'LCSOL Moving Up',
    location: 'La Trinidad, Benguet',
    date: 'Sunday, March 15, 2026',
    image: {
      src: 'logo.png',
      alt: 'LCSOL Moving Up'
    },
    link: '/events/community-outreach',
    start: new Date(new Date('2026-03-15').setHours(13, 0, 0, 0)),
    end: new Date(new Date('2026-03-15').setHours(15, 0, 0, 0))
  },
  {
    title: 'Primary Leaders Quarterly Meeting',
    location: 'La Trinidad, Benguet',
    date: 'Sunday, March 29, 2026',
    image: {
      src: 'logo.png',
      alt: 'Primary Leaders Quarterly Meeting'
    },
    link: '/events/community-outreach',
    start: new Date(new Date('2026-03-29').setHours(8, 0, 0, 0)),
    end: new Date(new Date('2026-03-29').setHours(17, 0, 0, 0))
  }
]
</script>
