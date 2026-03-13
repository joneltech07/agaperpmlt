import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
	const isDark = ref(false)

	const setIsDark = (value: boolean) => {
		isDark.value = value
	}

	const toggleTheme = () => {
		isDark.value = !isDark.value
	}

	return { isDark, setIsDark, toggleTheme }
});