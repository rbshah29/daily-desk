<template>
  <nav class="desk-mobile-nav fixed inset-x-4 bottom-4 z-30 flex justify-around rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-900/10 backdrop-blur lg:hidden">
    <NuxtLink v-for="item in [{ label: 'Today', to: '/', icon: '⌂' }, { label: 'Tasks', to: '/tasks', icon: '✓' }, { label: 'Focus', to: '/focus', icon: '◉' }, { label: 'Calendar', to: '/calendar', icon: '□' }]" :key="item.to" :to="item.to" class="flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 [&.router-link-active]:bg-orange-50 [&.router-link-active]:text-orange-500">
      <span class="text-base">{{ item.icon }}</span>{{ item.label }}
    </NuxtLink>
  </nav>
</template>
