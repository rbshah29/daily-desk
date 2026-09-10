<script setup lang="ts">
useHead({
  title: 'Calendar · Daily Desk'
})

const currentDate = ref(new Date())

const monthLabel = computed(() =>
  currentDate.value.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric'
  })
)

const days = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  const result: Array<number | null> = []

  for (let i = 0; i < firstDay.getDay(); i++) {
    result.push(null)
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    result.push(day)
  }

  return result
})

const today = new Date()

function isToday(day: number | null) {
  return day === today.getDate()
    && currentDate.value.getMonth() === today.getMonth()
    && currentDate.value.getFullYear() === today.getFullYear()
}

function previousMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  )
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  )
}
</script>

<template>
  <div class="page">
    <header class="page-heading">
      <div>
        <span class="eyebrow">Schedule</span>
        <h2>Calendar</h2>
        <p>See the shape of your month.</p>
      </div>
    </header>

    <CommonDeskCard class="mx-auto max-w-2xl">
      <div class="calendar-header">
        <button
          class="icon-button"
          @click="previousMonth"
        >
          ‹
        </button>

        <strong>{{ monthLabel }}</strong>

        <button
          class="icon-button"
          @click="nextMonth"
        >
          ›
        </button>
      </div>

      <div class="calendar-week">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div class="calendar-grid">
        <button
          v-for="(day, index) in days"
          :key="index"
          class="calendar-day"
          :class="{ empty: !day, today: isToday(day) }"
          :disabled="!day"
        >
          {{ day }}
        </button>
      </div>
    </CommonDeskCard>
  </div>
</template>
