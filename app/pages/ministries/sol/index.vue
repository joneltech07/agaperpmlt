<template>
	<section>
		<Banner title="Life Class School of Leaders (LCSOL)" background-image="/images/sol.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10">
			<section class="mb-10 md:mb-20">
				<h2 class="text-2xl md:text-3xl font-bold mb-4">Life Class School of Leaders (LCSOL)</h2>
				<p>Life Class School of Leaders (LCSOL) is a leadership training program dedicated to equipping believers with
					Christlike character and Christ-centered leadership. Through biblical teaching, discipleship, and practical
					ministry training, we prepare trainees to grow spiritually, lead with humility, and serve others effectively.
					Our goal is to raise leaders who reflect the heart of Christ and are ready to impact their communities for
					God’s kingdom.</p>

				<div class="flex items-center justify-center mt-10">
					<UCarousel v-slot="{ item }" loop dots :autoplay="{ delay: 3000 }" wheel-gestures :prev="{ variant: 'solid' }"
						:next="{ variant: 'solid' }" :items="images" :ui="{
							item: 'basis-1/3 ps-0',
							prev: 'sm:start-8',
							next: 'sm:end-8',
							container: 'ms-0'
						}">
						<img :src="item.src" width="320" height="320" :alt="item.alt" class="object-cover w-100 h-80" />
					</UCarousel>
				</div>
			</section>

			<section class="my-10">
				<h2 class="text-2xl md:text-2xl font-bold mb-4 text-center">Join Our Program</h2>
				<!-- Paste the Google Form embed code here -->
				<iframe class="w-full rounded-2xl md:mb-20"
					src="https://docs.google.com/forms/d/11R4zEoiAuyMTUkf3EoNw1xCSKSuUI-Kl3QfcujcwSSo/viewform" width="640"
					height="500" frameborder="0" marginheight="0" marginwidth="0">
					Loading...
				</iframe>
			</section>
		</section>
	</section>
</template>

<style scoped>
/* Optional: Add some basic styling */
</style>

<script setup lang="ts">
const activeIndex = ref(0);


const images = [
	{
		src: '/images/lcsol/sol_unstoppable.jpg',
		alt: 'LCSOL Unstoppable'
	},
	{
		src: '/images/lcsol/sol_3.jpg',
		alt: 'LCSOL 3'
	},
	{
		src: '/images/lcsol/trainies_on_hall.jpg',
		alt: 'LCSOL Trainies on Hall'
	},
	{
		src: '/images/lcsol/sol_solafide.jpg',
		alt: 'LCSOL Solafide'
	},
	{
		src: '/images/lcsol/sol_tetelestai.jpg',
		alt: 'LCSOL Tetelestai'
	}
];


function onClickPrev() {
	activeIndex.value = activeIndex.value <= 0 ? images.length - 1 : activeIndex.value - 1;
}

function onClickNext() {
	activeIndex.value = activeIndex.value >= images.length - 1 ? 0 : activeIndex.value + 1;
}

</script>