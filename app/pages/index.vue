<script setup lang="ts">
import CallToActionSection from '~/components/Home/CallToActionSection.vue'
import ChurchIntroSection from '~/components/Home/ChurchIntroSection.vue'
import UpcomingEventsSection from '~/components/Home/UpcomingEventsSection.vue'
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center gap-5 md:gap-10 pb-20">
    <HeroSection />
    <div class="p-3 md:p-5 md:px-5 lg:px-15 flex flex-col gap-10 md:gap-20 mt-10 md:mt-0">
      <CallToActionSection />
      <ServiceInfoSection />
      <ChurchIntroSection />

      <!-- TODO:Upcoming Events -->
      <UpcomingEventsSection />
    </div>
  </main>
</template>
