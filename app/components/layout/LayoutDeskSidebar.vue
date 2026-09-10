<template>
  <aside class="desk-sidebar fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-slate-200/80 bg-white px-6 py-7 lg:flex">
    <div class="flex items-center gap-3">
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

    <div class="desk-sidebar-foot mt-auto">
      <span class="desk-pulse"></span>
      <span><a href="https://www.linkedin.com/in/rbshah29/">@rbshah</a></span>
      <b>2026</b>
    </div>
  </aside>
</template>
