<template>
  <section>
    <Banner title="PLAN YOUR VISIT" background-image="/images/im_new.jpg" />

    <Section>
      <div class="w-full">
        <Map />
      </div>
    </Section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Section from '~/layouts/Section.vue'
</script>
