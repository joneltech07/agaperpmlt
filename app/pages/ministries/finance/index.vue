<template>
  <section>
    <Banner title="Finance" background-image="/images/finance.jpg" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        The ARPM Finance Team is committed to managing the tithes and offerings
        of our congregation with the highest standards of honesty, transparency,
        and biblical integrity. We believe that every gift is a sacred trust.
        Our mission is to provide meticulous accounting of the church’s
        resources, ensuring that every cent is directed toward advancing the
        Kingdom of the Lord and fulfilling His vision for our community.
      </p>

      <VerseCard header="MINISTRY VERSE" :scriptures="verses" />

			<USeparator />

      <!-- Mission & Core Values -->
      <div class="flex flex-wrap gap-4 md:gap-20">
        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Vision</h2>
          <p class="text-center">
            To be faithful stewards of the church’s financial resources ensuring
            transparency, accountability and responsible management to support
            the mission and growth of the church
          </p>
        </div>

        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Mission</h2>
          <p class="text-center">
            To manage finances prudently through budgeting and reporting,
            fostering generosity and financial responsibility among members. We
            strive to honor God by using resources wisely for the advancement of
            his kingdom and well-being of our community
          </p>
        </div>
      </div>

      <USeparator />

      <div class="w-full">
        <h2 class="text-2xl font-bold mb-10 text-center">MEET THE TEAM</h2>
        <div class="flex flex-col md:flex-row gap-4 md:gap-20 justify-center">
          <Image
            src="/images/profile_placeholder.png"
            name="Denia B. Sacla"
            position="Department Head"
          />
          <Image
            src="/images/profile_placeholder.png"
            name="Mae Ann Pingaping"
            position="Assistant"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const verses = [
  {
    title: 'Deuteronomy',
    text: '“But remember the Lord your God, For it is who gives you the ability to produce wealth, and so confirms his covenant, which he swore to your ancestors as it is today”“and it was the duty of the trumpeters and singers to make themselves heard in unison in praise and thanksgiving to the Lord), and when the song was raised, owith trumpets and cymbals and other musical instruments, in praise to the Lord”'
  },
  {
    title: '2 Corinthians 8:7',
    text: '“Since you excel in so many ways in your faith, you gifted speakers, your enthusiasm, and your love from us I want you to excel also in this gracious act of giving.”'
  }
]
</script>
