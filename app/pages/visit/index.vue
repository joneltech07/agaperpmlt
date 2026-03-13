<template>
  <section>
    <Banner title="PLAN YOUR VISIT" background-image="/images/im_new.jpg" />

    <Section>
      <div class="w-full">
        <h2 class="text-3xl text-center font-bold mb-1">Service time</h2>
        <p class="text-lg text-center mb-10">Sundays • 9:00 AM</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="flex flex-col gap-3">
            <h3 class="uppercase text-3xl font-bold">detailed directions</h3>
            <p>
              Agape Reaching People Ministry Inc. is located near
              <span class="font-bold"
                >Km. 5 Pico Road / Halsema Highway in La Trinidad,
                Benguet,</span
              >
              just beside the small alley between
              <span class="font-bold">Philippine Business Bank</span> and
              <span class="font-bold">EastWest Bank</span>. If you are passing
              along the main road, simply look for the two banks and enter the
              small alley between them. The church is located inside that alley.
            </p>
            <h3 class="uppercase text-2xl font-bold">Driving or Walking</h3>
            <p>
              If you are traveling
              <span class="font-bold">along Halsema Highway (Km. 5, Pico)</span>
              from <span class="font-bold">Baguio City</span> toward La
              Trinidad, watch for
              <span class="font-bold">Philippine Business Bank</span> and
              <span class="font-bold">EastWest Bank</span> along the road.
              Between these two buildings is a small alley. Enter the alley and
              continue a short distance, and you will find Agape Reaching People
              Ministry Inc. If you are coming from
              <span class="font-bold">La Trinidad</span> toward Baguio, pass
              through the <span class="font-bold">Km. 5 Pico</span> area and
              look for the same landmark banks. The alley between them leads
              directly to the church.
            </p>
            <h3 class="uppercase text-2xl font-bold">Public Transportation</h3>
            <p>
              Most
              <span class="font-bold"
                >jeepneys and taxis traveling between Baguio City and La
                Trinidad</span
              >
              pass through the
              <span class="font-bold">Km. 5 Pico / Halsema Highway</span> area.
              You can ask the driver to drop you off near
              <span class="font-bold">Philippine Business Bank</span> or
              <span class="font-bold">EastWest Bank</span>, then walk into the
              small alley between the two banks to reach the church. We welcome
              everyone to come early, find a seat, and prepare their hearts as
              we gather together for worship and fellowship.
            </p>
          </div>
          <Map />
        </div>
      </div>
    </Section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Section from '~/layouts/Section.vue'
</script>
