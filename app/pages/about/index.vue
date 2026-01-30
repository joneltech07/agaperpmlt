<template>

  <div class="p-4 md:p-10 flex justify-center">
    <div class="flex flex-wrap gap-4 justify-evenly w-full md:px-30">
      <CallToAction image-background="/images/sunday_service.jpg">
        <template #title>
          OUR STORY
        </template>
        <template #description>
          The history of Agape Reaching People Ministries La Trinidad.
        </template>
        <template #button-text>
          <div class="flex items-center">
            <Icon name="mdi:book" class="h-5 w-5 mr-2" />
            <a href="/about/story"> Read More </a>
          </div>
        </template>
      </CallToAction>

      <CallToAction image-background="/images/hero3.jpg">
        <template #title>
          LEADERSHIP
        </template>
        <template #description>
          Meet the Leadership team
        </template>
        <template #button-text>
          <div class="flex items-center">
            <Icon name="mdi:users" class="h-5 w-5 mr-2" />
            <a href="/about/leadership"> Read More </a>
          </div>
        </template>
      </CallToAction>

      <CallToAction image-background="/images/facilitation.jpg">
        <template #title>
          Mission & Vision
        </template>
        <template #description>
          Out mission, vision, and values
        </template>
        <template #button-text>
          <div class="flex items-center">
            <Icon name="mdi:users" class="h-5 w-5 mr-2" />
            <a href="/about/mission-vision"> Read More </a>
          </div>
        </template>
      </CallToAction>
    </div>
  </div>

</template>