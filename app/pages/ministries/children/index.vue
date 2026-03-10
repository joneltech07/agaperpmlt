<template>
  <section>
    <Banner title="Children Ministry" background-image="/images/children.jpg" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        The classic song reminds us that "Jesus loves the little children of the
        world"—and at ARPM, so do we. Our Children’s Ministry is dedicated to
        more than just childcare; we are committed to helping every child
        encounter the Lord personally. Our mission is to lay a spiritual
        foundation that allows them to grow into mature, steadfast disciples of
        Christ. If you have a heart for children and a desire to shape the
        future of the Kingdom, we invite you to join our teaching team.
      </p>

			<USeparator />

      <!-- Mission & Core Values -->
      <div class="flex flex-wrap gap-4 md:gap-20">
        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Vision</h2>
          <p class="text-center">
            To raise a generation of children who are rooted in God’s Word,
            filled with the Holy Spirit, and empowered to live with faith,
            obedience and Christlike character impacting their families, schools
            and communities.
          </p>
        </div>

        <div class="w-full md:w-100">
          <h2 class="text-2xl font-bold mb-4 text-center">Mission</h2>
          <p class="text-center">
            To lead children to know Jesus personally, experience the presence
            and guidance of the Holy Spirit, and grow as disciples who love
            God’s Word and live it out daily with prayer, worship and loving
            people.
          </p>
        </div>
      </div>

			<USeparator />

      <!-- Verses -->
      <VerseCard header="Biblical Scriptures" :scriptures="scriptures" />

      <USeparator />

      <div class="w-full">
        <h2 class="text-2xl font-bold mb-10 text-center">MEET THE TEAM</h2>
        <div class="flex flex-col md:flex-row gap-4 md:gap-20 justify-center">
          <Image
            src="logo.png"
            name="Evelyn Ngayodan"
            position="Department Head"
          />
          <Image
            src="logo.png"
            name="Charlene Madino"
            position="Assistant"
          />
          <Image
            src="logo.png"
            name="Belinda Layogan"
            position="Assistant"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const scriptures = [
  {
    title: 'Proverbs 22:6',
    text: 'Direct your children onto the right path, and when they are older, they will not leave it.'
  },
  {
    title: 'Matthew 19:14',
    text: 'But Jesus said, “Let the children come to me. Don’t stop them! For the Kingdom of Heaven belongs to those who are like these children.'
  },
  {
    title: '1 Peter 5:2',
    text: 'Carew for the flock that God has entrusted you. Watch over it willingly, not grudgingly-not for what you will get out of it, but because you are eager to serve God. 3 Don’t lord it over the people assigned to your care, but lead them by your own example. 4 And when the Great Shepherd appears, you will receive a crown of never-ending glory and honor. '
  }
]
</script>
