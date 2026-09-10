<script setup lang="ts">
const minutes = ref(25)
const active = ref(false)
const remaining = ref(25 * 60)
let timer: ReturnType<typeof setInterval> | undefined
const time = computed(() => `${String(Math.floor(remaining.value / 60)).padStart(2, '0')}:${String(remaining.value % 60).padStart(2, '0')}`)
function toggle() { active.value = !active.value; if (active.value) timer = setInterval(() => { if (remaining.value > 0) remaining.value--; else { active.value = false; if (timer) clearInterval(timer); timer = undefined } }, 1000); else if (timer) { clearInterval(timer); timer = undefined } }
function reset() { active.value = false; if (timer) clearInterval(timer); timer = undefined; remaining.value = minutes.value * 60 }
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <CommonDeskCard class="flex min-h-full flex-col justify-between bg-orange-50/60">
    <div class="flex items-start justify-between"><div><span class="eyebrow">Deep work</span><h3 class="mt-2 text-xl font-bold text-slate-900">Focus studio</h3></div><span class="text-2xl">◉</span></div>
    <div class="my-7 text-center"><p class="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">{{ active ? 'In the zone' : 'Ready when you are' }}</p><p class="mt-2 text-6xl font-bold tracking-tighter text-slate-900">{{ time }}</p></div>
    <div class="flex items-center gap-2"><button class="primary-button flex-1" @click="toggle">{{ active ? 'Pause session' : 'Start focus' }}</button><button class="icon-button bg-white" aria-label="Reset timer" @click="reset">↺</button></div>
  </CommonDeskCard>
</template>
