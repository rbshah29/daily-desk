<script setup lang="ts">
useHead({
  title: 'Today · Daily Desk'
})
</script>

<template>
  <div class="page">
    <section class="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <DashboardWeatherCard class="lg:col-span-5" />
      <DashboardTodayHero class="lg:col-span-7" />
    </section>

    <section class="grid grid-cols-1 gap-5 lg:grid-cols-12">

      <DashboardTodayTasks class="lg:col-span-7" />
      
      <DashboardFocusCard class="lg:col-span-5" />
      <DashboardScheduleCard class="lg:col-span-9" />

      <DashboardQuickNote class="lg:col-span-12" />
    </section>
  </div>
</template>
