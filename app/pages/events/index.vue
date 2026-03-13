<template>
  <section>
    <Banner title="Agape Events" background-image="/images/events.jpg" />

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
import { useThemeStore } from '~/store/theme'

const theme = useThemeStore()

const isDark = computed(() => theme.isDark)
</script>

<style scoped>
/* Light Mode */
.vuecal {
  --vuecal-primary-color: #d59d1d;
  --vuecal-bg-color: #ffffff;
  --vuecal-text-color: #1f2937;
}
</style>
