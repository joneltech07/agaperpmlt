<template>
  <section>
    <Banner title="VOLUNTEERS" background-image="/images/volunteers.jpg" />
    <Section>
      <p class="w-full md:w-200 text-center">
        We are born to live not for ourselves alone, but to serve others. We
        invite you to join us as we go to the mission field and proclaim God’s
        Word. Go to our Missions tab and read on our different mission
        involvements.
      </p>

      <div class="flex items-center justify-center mt-10 mb-20">
        <UCarousel
          class="w-full"
          v-slot="{ item }"
          loop
          dots
          :autoplay="{ delay: 3000 }"
          wheel-gestures
          :prev="{ variant: 'solid' }"
          :next="{ variant: 'solid' }"
          :items="images"
          :ui="{
            item: 'basis-full md:basis-1/3 ps-0',
            prev: 'sm:start-8',
            next: 'sm:end-8',
            container: 'ms-0'
          }"
        >
          <img
            :src="item.src"
            width="320"
            height="320"
            :alt="item.alt"
            class="object-cover w-full h-80 rounded-2xl md:rounded-none"
          />
        </UCarousel>
      </div>
    </Section>
  </section>
</template>

<script setup lang="ts">
import Section from '~/layouts/Section.vue'

const images = [
  {
    src: '/images/community/volunteer/1.jpg',
    alt: 'Volunteer 1'
  },
  {
    src: '/images/community/volunteer/2.jpg',
    alt: 'Volunteer 2'
  },
  {
    src: '/images/community/volunteer/3.jpg',
    alt: 'Volunteer 3'
  },
  {
    src: '/images/community/volunteer/4.jpg',
    alt: 'Volunteer 4'
  },
  {
    src: '/images/community/volunteer/5.jpg',
    alt: 'Volunteer 5'
  },
  {
    src: '/images/community/volunteer/6.jpg',
    alt: 'Volunteer 6'
  },
  {
    src: '/images/community/volunteer/7.jpg',
    alt: 'Volunteer 7'
  },
  {
    src: '/images/community/volunteer/8.jpg',
    alt: 'Volunteer 8'
  },
  {
    src: '/images/community/volunteer/9.jpg',
    alt: 'Volunteer 9'
  },
  {
    src: '/images/community/volunteer/10.jpg',
    alt: 'Volunteer 10'
  }
]
</script>
