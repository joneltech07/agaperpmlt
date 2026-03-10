<template>
  <section>
    <Banner title="Worship" background-image="/images/worship.jpg" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        Our Worship Team is dedicated to one singular mission: lifting high the
        name of the Lord through hymns and songs of praise. We believe that
        music is a powerful gift from God, and we invite anyone with a heart for
        worship to use their talents for His Kingdom. Whether you are a seasoned
        musician or a complete beginner, our doors are open. We offer dedicated
        music lessons to help you sharpen your skills and find your place in our
        harmony of praise.
      </p>

      <VerseCard header="MINISTRY VERSE" :scriptures="verses" />

      <USeparator />

      <!-- Mission & Core Values -->
      <div class="flex flex-wrap gap-4 md:gap-20">
        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Vision</h2>
          <p class="text-center">
            <span class="italic font-bold">Matthew 5:14 (NLT)</span> “You are
            the light of the world. A town built on a hill cannot be hidden.”
          </p>
        </div>

        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Mission</h2>
          <p class="text-center">
            To radiate the light of Jesus Christ to the world through MEDIA.
          </p>
        </div>
      </div>

      <USeparator />

      <div class="w-full">
        <h2 class="text-2xl font-bold mb-10 text-center">MEET THE TEAM</h2>
        <div class="flex flex-col md:flex-row gap-4 md:gap-20 justify-center">
          <Image
            src="/images/leaders/eli_jane_gomintong.jpg"
            name="Arlene P. Diola"
            position="Department Head"
          />
          <Image
            src="logo.png"
            name="John Mar Diola"
            position="Music Director"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const verses = [
  {
    title: '2 Chronicles 5:13',
    text: '“and it was the duty of the trumpeters and singers to make themselves heard in unison in praise and thanksgiving to the Lord), and when the song was raised, owith trumpets and cymbals and other musical instruments, in praise to the Lord”'
  },
  {
    title: 'Romans 12:1',
    text: '“Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy an”'
  },
  {
    title: 'John4:23-24',
    text: '“Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks. 24 God is spirit, and his worshipers must worship in the Spirit and in truth.”'
  }
]
</script>
