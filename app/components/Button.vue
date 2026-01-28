<template>
	<button
		class="flex gap-3 items-center min-h-7 p-2 px-7 border-none dark:border select-none rounded-lg bg-primary text-white hover:bg-secondary-dark/50 dark:hover:bg-primary/70 transition shadow-lg dark:shadow-none hover:cursor-pointer">
		<slot name="icon" />
		<slot />
	</button>
</template>