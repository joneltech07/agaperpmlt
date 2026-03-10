<script setup lang="ts">
import Image from '~/components/Image.vue';

</script>

<template>
	<section>
		<Banner title="Intercessory" background-image="/images/intercessory.jpg" />

		<section class="p-7 md:px-20 md:py-20 md:pb-40 pb-10 flex flex-col gap-10 items-center">
			<p class="w-full md:w-200 text-center">The ARPM Intercessory team focuses on lifting every concern, celebrations
				and crises to the LORD in prayer. We
				believe that prayer is the backbone of the church and no victories can be born without it. We conduct prayer
				meetings every Wednesday of the week and a prayer soaking once a month.</p>

			<USeparator />

			<div class="flex flex-wrap gap-4 md:gap-20">
				<div class="w-full md:w-100">
					<h2 class="text-2xl font-bold mb-4 text-center">Vision</h2>
					<p class="text-center"><span class="font-bold italic">1 Timothy 2:1-4 (NLT)</span>
						I urge you, first of all, to pray for all people. Ask God to help them; intercede on their behalf, and
						give thanks for them. Pray this way for kings and all who are in authority so that we can live peaceful
						and quiet lives marked by godliness and dignity. This is good and pleases God our Savior, who wants
						everyone to be saved and to understand the truth.</p>
				</div>

				<div class="w-full md:w-100">
					<h2 class="text-2xl font-bold mb-4 text-center">Mission</h2>
					<p class="text-center">To pray for all people and to intercede on their behalf that they may know Christ and
						to live for him. </p>
				</div>
			</div>

			<USeparator />

			<div class="w-full">
				<h2 class="text-2xl font-bold mb-10 text-center">MEET THE TEAM</h2>
				<div class="flex flex-col md:flex-row gap-4 md:gap-20 justify-center">
					<Image src="/images/leaders/nova_tobyagon.jpg" name="Nova Tobyagon" position="Department Head" />
					<Image src="logo.png" name="Alester Uligan" position="Assistant" />
				</div>
			</div>
		</section>
	</section>
</template>