<script setup lang="ts">
const tasks = ref([
])
const completed = computed(() => tasks.value.filter(task => task.done).length)
</script>

<template>
  <CommonDeskCard>
    <div class="flex items-start justify-between gap-3">
      <div><span class="eyebrow">Your priorities</span><h3 class="mt-2 text-xl font-bold text-slate-900">Today’s tasks</h3></div>
      <NuxtLink to="/tasks" class="text-xs font-bold text-orange-500 hover:text-orange-600">View all →</NuxtLink>
    </div>
    <div class="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-orange-500 transition-all" :style="{ width: `${(completed / tasks.length) * 100}%` }" /></div>
    <p class="mt-2 text-xs text-slate-400">{{ completed }} of {{ tasks.length }} complete</p>
    <div class="mt-5 space-y-2">
      <label v-for="task in tasks" :key="task.title" class="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-slate-50">
        <input v-model="task.done" type="checkbox" class="h-4 w-4 accent-orange-500">
        <span class="flex-1 text-sm font-semibold" :class="task.done ? 'text-slate-400 line-through' : 'text-slate-700'">{{ task.title }}</span>
        <span class="rounded-full px-2 py-1 text-[10px] font-bold" :class="task.done ? 'bg-emerald-50 text-emerald-600' : task.tag === 'High' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-500'">{{ task.tag }}</span>
      </label>
    </div>
  </CommonDeskCard>
</template>
