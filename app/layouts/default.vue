<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import Button from '~/components/Button.vue';

const route = useRoute()

const device = useDevice();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Home',
		to: '/',
		active: '/' === route.path
	},
	{
		label: 'About',
		to: '/about',
		active: route.path.startsWith('/about'),
		children: [
			{
				label: 'Our Story',
				to: '/about/story',
				active: route.path === '/about/story'
			},
			{
				label: 'Leadership',
				to: '/about/leadership',
				active: route.path === '/about/leadership'
			},
			{
				label: 'Mission & Vision',
				to: '/about/mission-vision',
				active: route.path === '/about/mission-vision'
			}
		]
	},
	{
		label: 'Ministries',
		to: '/ministries',
		active: route.path.startsWith('/ministries'),
		children: [
			{
				label: 'Missions',
				to: '/ministries/missions',
				active: route.path === '/ministries/missions'
			},
			{
				label: 'Intercessory',
				to: '/ministries/intercessory',
				active: route.path === '/ministries/intercessory'
			},
			{
				label: 'Media',
				to: '/ministries/media',
				active: route.path === '/ministries/media'
			},
			{
				label: 'Worship',
				to: '/ministries/worship',
				active: route.path === '/ministries/worship'
			},
			{
				label: 'Children',
				to: '/ministries/children',
				active: route.path === '/ministries/children'
			},
			{
				label: 'Sociable',
				to: '/ministries/sociable',
				active: route.path === '/ministries/sociable'
			},
			{
				label: 'Consolidation',
				to: '/ministries/consolidation',
				active: route.path === '/ministries/consolidation'
			},
			{
				label: 'Finance',
				to: '/ministries/finance',
				active: route.path === '/ministries/finance'
			},
			{
				label: 'Kitchen',
				to: '/ministries/kitchen',
				active: route.path === '/ministries/kitchen'
			},
			{
				label: 'Technical',
				to: '/ministries/technical',
				active: route.path === '/ministries/technical'
			}
		]
	},
	{
		label: 'Community',
		to: '/community',
		active: route.path.startsWith('/community'),
		children: [
			{
				label: 'Cellgroups',
				to: '/community/cellgroups',
				active: route.path === '/community/cellgroups'
			},
			{
				label: 'Volunteer Opportunities',
				to: '/community/volunteers',
				active: route.path === '/community/volunteers'
			}
		]
	},
	{
		label: 'Connect',
		to: '/connect',
		active: route.path.startsWith('/connect'),
		children: [
			{
				label: 'Contact Us',
				to: '/connect/contact-us',
				active: route.path === '/connect/contact-us'
			},
			{
				label: 'Connect Card',
				to: '/connect/connect-card',
				active: route.path === '/connect/connect-card'
			}
		]
	},
	{
		label: 'Events',
		to: '/events',
		active: route.path.startsWith('/events')
	},
	{
		label: 'Give',
		to: '/give',
		active: route.path.startsWith('/give')
	}
]);

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

				<Button to="/give" class="ml-4 max-md:hidden">
					Watch Live
				</Button>
			</template>

			<template #body>
				<div class="w-full flex">
					<UNavigationMenu :items="items" orientation="vertical" class="w-full" />
				</div>
			</template>
		</UHeader>

		<main>
			<slot />
		</main>


		<!-- Footer -->
		<UFooter class="bg-primary/10 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 pb-20">
			<template #left>
				<div class="flex flex-col items-center space-y-2">
					<Logo class="h-40 w-auto" />
					<p class="text-5xl font-poppins text-shadow-sm text-primary">AGAPE</p>
				</div>
			</template>

			<div class="flex flex-col gap-4">
				<UNavigationMenu class="block md:hidden" :items="items" orientation="vertical" variant="link" />
				<UNavigationMenu class="hidden md:block" :items="items" orientation="horizontal" variant="link" />
				<div class="text-center">
					<p class="text-lg font-bold">Email Us</p>
					<p>agaperpmlatrinidad@gmail.com</p>
				</div>
				<div class="text-center">
					<p class="text-lg font-bold">Find Us</p>
					<p>JC065 PICO, KM.5, La Trinidad, Benguet</p>
				</div>
				<p class="text-muted text-sm text-center">Copyright © {{ new Date().getFullYear() }} Agape Reaching
					People Ministry La Trinidad</p>
			</div>

			<template #right>
				<div class="flex flex-col">
					<div>
						<UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost"
							to="https://www.facebook.com/arpmbenguetph" target="_blank" aria-label="Facebook" />
						<UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://go.nuxt.com/x"
							target="_blank" aria-label="X" />
						<UButton icon="i-simple-icons-tiktok" color="neutral" variant="ghost"
							to="https://github.com/nuxt/nuxt" target="_blank" aria-label="GitHub" />
					</div>
					<Button to="/watch" class="mt-4">
						Watch Live
					</Button>
				</div>
			</template>
		</UFooter>
	</div>
</template>
