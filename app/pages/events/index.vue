<template>
  <section>
    <Banner title="AGAPERPMLT Events" />

    <Section>
      <FeaturedEvents />

      <div class="w-full mt-20">
        <vue-cal
          :dark="isDark"
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

const isDark = ref(document.documentElement.classList.contains('dark'))

const observer = new MutationObserver(() => {
  const getIsDark = document.documentElement.classList.contains('dark')
  isDark.value = getIsDark
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
})
</script>

<style scoped>
/* Light Mode */
.vuecal {
  --vuecal-primary-color: #d3a438;
  --vuecal-bg-color: #ffffff;
  --vuecal-text-color: #1f2937;
}

/* Dark Mode */
.dark .vuecal {
  --vuecal-primary-color: #d3a438;
  --vuecal-bg-color: #111827;
  --vuecal-text-color: #f9fafb;
}
</style>
