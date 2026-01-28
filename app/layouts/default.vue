<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Home',
		to: '/',
		active: '/' === route.path
	},
	{
		label: 'Components',
		to: '/components',
		active: route.path.startsWith('/components')
	},
	{
		label: 'Figma',
		to: 'https://go.nuxt.com/figma-ui',
		target: '_blank'
	},
	{
		label: 'Releases',
		to: 'https://github.com/nuxt/ui/releases',
		target: '_blank'
	}
])
</script>

<template>
	<div>
		<UHeader>
			<template #title>
				<Logo class="h-10 w-auto" />
			</template>

			<UNavigationMenu :items="items" />

			<template #right>
				<UColorModeButton />

				<UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
					<UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank"
						icon="i-simple-icons-github" aria-label="GitHub" />
				</UTooltip>
			</template>
		</UHeader>

		<main>
			<slot />
		</main>
	</div>
</template>
