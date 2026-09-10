<template>
  <aside class="desk-sidebar fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-slate-200/80 bg-white px-6 py-7 lg:flex">
    <div class="flex items-center gap-3">
      <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20"></span>
      <div>
        <strong class="block text-sm font-extrabold tracking-tight text-slate-900">Daily Desk</strong>
      </div>
    </div>

    <nav class="mt-12 space-y-2">
      <NuxtLink v-for="item in [{ label: 'Today', to: '/', icon: '⌂' }, { label: 'Tasks', to: '/tasks', icon: '✓' }, { label: 'Calendar', to: '/calendar', icon: '□' }, { label: 'Focus', to: '/focus', icon: '◉' }, { label: 'Notes', to: '/notes', icon: '✦' }]" :key="item.to" :to="item.to" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-orange-50 hover:text-orange-500 [&.router-link-active]:bg-orange-50 [&.router-link-active]:text-orange-600">
        <span class="w-5 text-center text-base">{{ item.icon }}</span>{{ item.label }}
      </NuxtLink>
      <NuxtLink to="/settings" class="mt-8 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-orange-50 hover:text-orange-500 [&.router-link-active]:bg-orange-50 [&.router-link-active]:text-orange-600">
        <span class="w-5 text-center text-base">⚙</span>Settings
      </NuxtLink>
    </nav>

    <!-- <div class="mt-auto rounded-2xl bg-slate-900 p-4 text-white">
      <p class="text-xs font-bold">Make space for what matters.</p>
      <p class="mt-2 text-[11px] leading-relaxed text-slate-400">A small plan today makes a lighter tomorrow.</p>
    </div> -->
  </aside>
</template>
