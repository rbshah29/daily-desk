<script setup lang="ts">
const note = ref('')
const saved = ref(false)
function save() { saved.value = true; setTimeout(() => { saved.value = false }, 1800) }
</script>
<template>
  <CommonDeskCard><div class="flex items-center justify-between"><div><span class="eyebrow">Capture</span><h3 class="mt-2 text-xl font-bold text-slate-900">A thought for later</h3></div></div><div class="mt-5 flex flex-col gap-3 sm:flex-row"><textarea v-model="note" rows="2" placeholder="Jot down an idea, reminder, or small win..." class="min-h-[72px] flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100" /><button class="primary-button self-end sm:self-center" @click="save">{{ saved ? 'Saved ✓' : 'Save note' }}</button></div></CommonDeskCard>
</template>
