<template>
	<section>
		<Banner title="Our Story" />

		<div class="p-7 md:p-20">
			<div class="flex flex-col-reverse md:flex-row gap-3 md:gap-10">
				<div class="flex-1 flex flex-col gap-5">
					<section>
						<h2 class="font-bold text-2xl mb-3">The Foundations of Faith</h2>
						<p>The journey began in 2004 with a humble bible study at the boarding house of Nanay Marina Altaki. Led by
							missionary Madam Myrna and Pastor Alejo Bestog, these small gatherings planted the seeds of a spiritual
							community. By 2005, under the leadership of Pastors Cesar and Lorna Ramos, the fellowship transitioned
							into
							formal church services, finding its first home at Sunbeam Learning School.</p>
					</section>

					<section>
						<h2 class="font-bold text-2xl mb-3">Growth and Transformation</h2>
						<p class="mb-3">The following years were a season of movement and maturation. After transitioning through three different
							locations, the congregation eventually settled into its current home—a space that began as a modest garage
							but, through God’s provision, bloomed into a sanctuary.</p>
						<p>In 2008, the church embraced the G12 strategy. Mentored by Pastors Sol Digiya, Sandy Padilla, and Jun
							Vestidas, Pastors Cesar and JR attended the "Encounter God Retreat" in Manila, bringing back a fire for
							discipleship that would redefine the ministry. This passion fueled the 2009 "Bless La Trinidad Movement."
							In
							alignment with Bishop Oriel’s vision for World Conquest, leaders went house-to-house with a fiery desire
							to
							evangelize and pray for the community. This momentum led to the first local Encounter God Retreat and the
							launch of LCSOL Training.</p>
					</section>

					<section>
						<h2 class="font-bold text-2xl mb-3">A New Chapter</h2>
						<p class="mb-3">The church’s strength was tested in 2015 during a season of crisis. However, this period of refinement
							led to the establishment of a dedicated core leadership team. In January 2016, Juanito Ricardo Jr. was
							officially installed as Senior Pastor, serving alongside his wife, Rodilene Binay-an-Ricardo.</p>
						<p>Today, the church remains steadfast, continuing to live out its God-given mission to reach the lost and
							make disciples for Christ.</p>
					</section>
				</div>
				<div class="flex-1 flex justify-center items-center">
					<NuxtImg src="/images/ourstory.jpg" alt="Pastor's Photo Smiling" width="600" height="700" :custom="true"
						v-slot="{ src, isLoaded, imgAttrs }">
						<!-- Show the actual image when loaded -->
						<img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="rounded-2xl object-cover" />

						<!-- Show a placeholder while loading -->
						<USkeleton v-else class="w-full aspect-600/700" />
					</NuxtImg>
				</div>
			</div>
		</div>
	</section>
</template>