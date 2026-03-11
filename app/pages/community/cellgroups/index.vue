<template>
  <section>
    <Banner title="CELLGROUPS" background-image="/images/cellgroup.jpg" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        In obedience to the Great Commission, the core of ARPM’s discipleship
        happens within our cellgroups. We believe that spiritual growth is best
        nurtured in fellowships. These small groups meet weekly to share in
        fellowship—creating a safe space where disciples can encourage one
        another, study the Word, and strengthen each other's faith. It is here
        that we truly live out our calling to be our brother's keeper.
      </p>

      <div class="flex items-center justify-center mt-10">
        <UCarousel
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
            class="object-cover w-100 h-80"
          />
        </UCarousel>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref(0)

const images = [
  {
    src: '/images/community/cellgroups/1.jpg',
    alt: 'Cellgroup 1'
  },
  {
    src: '/images/community/cellgroups/2.jpg',
    alt: 'Cellgroup 2'
  },
  {
    src: '/images/community/cellgroups/3.jpg',
    alt: 'Cellgroup 3'
  },
  {
    src: '/images/community/cellgroups/4.jpg',
    alt: 'Cellgroup 4'
  },
  {
    src: '/images/community/cellgroups/5.jpg',
    alt: 'Cellgroup 5'
  },
  {
    src: '/images/community/cellgroups/6.jpg',
    alt: 'Cellgroup 6'
  },
  {
    src: '/images/community/cellgroups/7.jpg',
    alt: 'Cellgroup 7'
  },
  {
    src: '/images/community/cellgroups/8.jpg',
    alt: 'Cellgroup 8'
  },
  {
    src: '/images/community/cellgroups/9.jpg',
    alt: 'Cellgroup 9'
  },
  {
    src: '/images/community/cellgroups/10.jpg',
    alt: 'Cellgroup 10'
  },
  {
    src: '/images/community/cellgroups/11.jpg',
    alt: 'Cellgroup 11'
  }
];
</script>
