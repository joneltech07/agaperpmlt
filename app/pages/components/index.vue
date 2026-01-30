<script setup lang="ts">
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue';
</script>

<template>
  <div class="p-7">
    <div class="flex gap-3 flex-wrap justify-start items-start">
      <CallToAction image-background="/images/sunday_service.jpg">
        <template #title>
          Call To Action
        </template>
        <template #description>
          Explore various button styles and functionalities to enhance user interaction.
        </template>
        <template #button-text>
          Learn More
        </template>
      </CallToAction>

      <Button>
        <template #icon>
          <img src="/logo.png" alt="Logo" class="h-5 w-5" />
        </template>
        Click Me
      </Button>

      <!-- TODO:Create Card -->

      <Card image-background="/images/sunday_service.jpg" visit-link="/#">
        <template #title>
          Card Title
        </template>
        <template #description>
          This is a sample card description.
        </template>
      </Card>

    </div>
  </div>
</template>