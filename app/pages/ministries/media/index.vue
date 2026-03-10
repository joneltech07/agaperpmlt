<template>
  <section>
    <Banner title="Media" background-image="/images/media.jpg" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        As the world shifts toward a digital-first landscape, our church has
        embraced the boom of social media as a powerful tool for the Great
        Commission. Through creative storytelling and online engagement, our
        Media Team works tirelessly to get the Gospel "out there," reaching
        hearts and homes that were once beyond our physical reach.
      </p>

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
            src="/images/leaders/arlene_diola_media_head.jpg"
            name="Arlene P. Diola"
            position="Department Head"
          />
          <Image
            src="/images/leaders/jonel_uligan_media_assistant.png"
            name="Jonel Uligan"
            position="Media Assistant"
          />
        </div>
      </div>
    </section>
  </section>
</template>
