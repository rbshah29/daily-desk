export type DeskTheme = 'light' | 'dark' | 'system'
export type ClockFormat = '12' | '24'
export type TemperatureUnit = 'celsius' | 'fahrenheit'

export function useDeskPreferences() {
  const preferences = useState('daily-desk-preferences', () => ({
    theme: 'system' as DeskTheme,
    clockFormat: '12' as ClockFormat,
    temperatureUnit: 'celsius' as TemperatureUnit
  }))

  function applyTheme() {
    if (!import.meta.client) return

    const dark = preferences.value.theme === 'dark'
      || (preferences.value.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }

  onMounted(() => {
    const saved = localStorage.getItem('daily-desk-preferences')
    if (saved) {
      try {
        preferences.value = { ...preferences.value, ...JSON.parse(saved) }
      } catch {
        // Ignore malformed local preferences and keep defaults.
      }
    }
    applyTheme()
  })

  watch(preferences, () => {
    applyTheme()
    if (import.meta.client) localStorage.setItem('daily-desk-preferences', JSON.stringify(preferences.value))
  }, { deep: true })

  return { preferences, applyTheme }
}
