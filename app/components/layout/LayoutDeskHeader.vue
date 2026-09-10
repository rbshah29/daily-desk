<template>
  <header class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
    <div>
      <h1 class="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Good morning, Rutvik </h1>
    </div>
    <div class="flex items-center gap-2">
      <NuxtLink to="/tasks" class="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 transition hover:border-orange-200 hover:text-orange-500 sm:block">+ Quick task</NuxtLink>
      <NuxtLink to="/settings" aria-label="Open settings" class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500 transition hover:text-orange-500">⚙</NuxtLink>
    </div>
  </header>
</template>
