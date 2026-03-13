export const useTheme = () => {
	const isDark = ref(false)

	onMounted(() => {
		const darkClass = document.documentElement.classList.contains('dark');

		isDark.value = darkClass
	})

	return { isDark }
}