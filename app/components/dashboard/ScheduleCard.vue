<script setup lang="ts">
const events = ref([
    ])
</script>
<template>
  <CommonDeskCard>
    <div class="flex items-start justify-between"><div><span class="eyebrow">Up next</span><h3 class="mt-2 text-xl font-bold text-slate-900">Your schedule</h3></div><NuxtLink to="/calendar" class="text-xs font-bold text-orange-500">Open calendar →</NuxtLink></div>
    <div class="mt-5 divide-y divide-slate-100"><div v-for="event in events" :key="event.time" class="flex items-center gap-4 py-3 first:pt-0 last:pb-0"><span class="w-12 text-xs font-bold text-slate-400">{{ event.time }}</span><span class="h-2 w-2 rounded-full bg-orange-400" /><div class="flex-1"><p class="text-sm font-bold text-slate-700">{{ event.title }}</p><p class="mt-0.5 text-xs text-slate-400">{{ event.type }}</p></div></div></div>
  </CommonDeskCard>
</template>
