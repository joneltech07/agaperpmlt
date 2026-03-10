<template>
  <section>
    <Banner title="Technical" />

    <section
      class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center"
    >
      <p class="w-full md:w-200 text-center">
        Our fathers and brothers at ARPM are driven by a passion to honor God
        through the stewardship of His house. This team handles the essential
        technical and mechanical needs of our facilities, ensuring that our
        place of worship is safe, functional, and beautiful. We invite men of
        Christ to contribute their unique skills and strength to this vital
        ministry. Whether you are a craftsman, a technician, or simply have a
        willing pair of hands, your service is a direct contribution to the
        advancement of God’s Kingdom.
      </p>

      <USeparator />

      <div class="w-full">
        <h2 class="text-2xl font-bold mb-10 text-center">MEET THE TEAM</h2>
        <div class="flex flex-col flex-wrap md:flex-row gap-4 md:gap-20 justify-center">
          <Image
            v-for="(team, idx) in teams"
            :key="idx"
            :src="team.src"
            :name="team.name"
            :position="team.position"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const teams = [
  {
    src: '/images/profile_placeholder.png',
    name: 'Brix Gomintong',
    position: 'Department Head'
  },
  {
    src: '/images/profile_placeholder.png',
    name: 'Glenmar Emilio',
    position: 'Assistant'
  },
	{
		src: '/images/profile_placeholder.png',
		name: 'Angelito James Bustos',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Jusam Ricardo',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Jerome Cabinta',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Juanito Ricardo Sr.',
		position: 'Driver',
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Jonel Uligan',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Nathaniel Bucasan',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Gary Lingad',
		position: 'Driver'
	},
	{
		src: '/images/profile_placeholder.png',
		name: 'Alester Uligan',
		position: 'Driver'
	}
];
</script>
