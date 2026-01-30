<template>

	<Banner title="GET INVOLVED" />

	<div class="p-10 flex justify-center">
		<div class="flex flex-wrap gap-4 justify-evenly w-full md:px-30">
			<CallToAction image-background="/images/missions.jpg">
				<template #title>
					Missions
				</template>
				<template #description>
					Explore our various ministries and missions.
				</template>
				<template #button-text>
					<div class="flex items-center">
						<Icon name="mdi:book" class="h-5 w-5 mr-2" />
						<a href="/about/missions"> Read More </a>
					</div>
				</template>
			</CallToAction>

			<CallToAction image-background="/images/hero3.jpg">
				<template #title>
					Intercessory
				</template>
				<template #description>
					Pray for the needs of our community and beyond.
				</template>
				<template #button-text>
					<div class="flex items-center">
						<Icon name="mdi:users" class="h-5 w-5 mr-2" />
						<a href="/about/intercessory"> Read More </a>
					</div>
				</template>
			</CallToAction>

			<CallToAction image-background="/images/worship.jpg">
				<template #title>
					Worship
				</template>
				<template #description>
					Join us in praising and worshiping God.
				</template>
				<template #button-text>
					<div class="flex items-center">
						<Icon name="mdi:users" class="h-5 w-5 mr-2" />
						<a href="/about/worship"> Read More </a>
					</div>
				</template>
			</CallToAction>
		</div>
	</div>

</template>