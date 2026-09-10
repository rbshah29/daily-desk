<script setup lang="ts">
const now = ref(new Date())
const { preferences } = useDeskPreferences()
const dateLabel = computed(() => now.value.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }))
const timeLabel = computed(() => now.value.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: preferences.value.clockFormat === '12' }))
const quote = ref('')
const author = ref('Daily cue')
const quoteLoading = ref(true)
let clock: ReturnType<typeof setInterval> | undefined

async function loadQuote() {
  quoteLoading.value = true

  try {
    const response = await $fetch<Array<{ q: string, a: string, h?: string }>>(
      `/api/quote`
    )
    const dailyQuote = response[0]
    quote.value = dailyQuote?.q || 'Make today count, one intentional step at a time.'
    author.value = dailyQuote?.a || 'Daily cue'
  } catch {
    quote.value = 'Make today count, one intentional step at a time.'
    author.value = 'Daily cue'
  } finally {
    quoteLoading.value = false
  }
}

onMounted(() => {
  clock = setInterval(() => { now.value = new Date() }, 1000)
  loadQuote()
})
onUnmounted(() => { if (clock) clearInterval(clock) })
</script>

<template>
  <CommonDeskCard class="flex min-h-full items-center justify-between overflow-hidden bg-white">
    <div>
      <span class="eyebrow">Your day at a glance</span>
      <p class="mt-5 text-sm font-semibold text-slate-400">{{ dateLabel }}</p>
      <p class="mt-1 text-5xl font-bold tracking-tighter text-slate-900 sm:text-6xl">{{ timeLabel }}</p>
      <blockquote class="mt-5 max-w-md border-l-2 border-orange-300 pl-4 text-sm italic leading-6 text-slate-500">
        <span v-if="quoteLoading">Finding your daily cue...</span>
        <template v-else>“{{ quote }}”<footer class="mt-1 text-xs font-bold not-italic text-orange-500">— {{ author }}</footer></template>
      </blockquote>
    </div>
  </CommonDeskCard>
</template>
