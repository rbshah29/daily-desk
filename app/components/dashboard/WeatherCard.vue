<script setup lang="ts">
const { preferences } = useDeskPreferences()
const location = ref('Locating...')
const temperatureC = ref(24)
const feelsLikeC = ref(25)
const humidity = ref(42)
const loading = ref(true)
const temperature = computed(() => preferences.value.temperatureUnit === 'celsius' ? `${temperatureC.value}°` : `${Math.round((temperatureC.value * 9) / 5 + 32)}°`)
const feelsLike = computed(() => preferences.value.temperatureUnit === 'celsius' ? feelsLikeC.value : Math.round((feelsLikeC.value * 9) / 5 + 32))

async function loadLocation(latitude: number, longitude: number) {
  try {
    const data = await $fetch<{ address?: { city?: string, town?: string, village?: string, state?: string } }>('https://nominatim.openstreetmap.org/reverse', {
      params: { format: 'jsonv2', lat: latitude, lon: longitude, zoom: 10, addressdetails: 1 }
    })

    const address = data.address
    const city = address?.city || address?.town || address?.village
    if (city && address?.state) location.value = `${city}, ${address.state}`
    else if (city) location.value = city
  } catch {
    location.value = 'Current location'
  }
}

async function loadWeather(latitude: number, longitude: number) {
  try {
    const data = await $fetch<{ current: { temperature_2m: number, apparent_temperature: number, relative_humidity_2m: number } }>('https://api.open-meteo.com/v1/forecast', {
      params: { latitude, longitude, current: 'temperature_2m,apparent_temperature,relative_humidity_2m', timezone: 'auto' }
    })
    temperatureC.value = Math.round(data.current.temperature_2m)
    feelsLikeC.value = Math.round(data.current.apparent_temperature)
    humidity.value = data.current.relative_humidity_2m
  } catch {
    // Keep the useful fallback values when the weather service is unavailable.
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (!navigator.geolocation) { loading.value = false; return }
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      loadLocation(coords.latitude, coords.longitude)
      loadWeather(coords.latitude, coords.longitude)
    },
    () => { location.value = 'Current location'; loading.value = false },
    { enableHighAccuracy: false, timeout: 7000 }
  )
})
</script>

<template>
  <CommonDeskCard class="overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
    <div class="flex items-start justify-between">
      <div><span class="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-200">{{ location }}</span><h3 class="mt-2 text-xl font-bold">{{ loading ? 'Checking weather' : 'Bright & breezy' }}</h3></div>
      <span class="text-4xl">☀</span>
    </div>
    <div class="mt-7 flex items-end justify-between"><p class="text-6xl font-bold tracking-tighter">{{ temperature }}<span class="text-2xl text-indigo-200">{{ preferences.temperatureUnit === 'celsius' ? 'C' : 'F' }}</span></p><button class="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-indigo-100 hover:bg-white/20" @click="preferences.temperatureUnit = preferences.temperatureUnit === 'celsius' ? 'fahrenheit' : 'celsius'">Switch °{{ preferences.temperatureUnit === 'celsius' ? 'F' : 'C' }}</button></div>
    <p class="mt-4 text-xs text-indigo-200">Feels like {{ feelsLike }}° · Humidity {{ humidity }}%</p>
  </CommonDeskCard>
</template>
