<script setup lang="ts">
useHead({
  title: 'Focus · Daily Desk'
})

const selectedMinutes = ref(25)
const remainingSeconds = ref(25 * 60)
const running = ref(false)

let timer: ReturnType<typeof setInterval> | undefined

const formattedTime = computed(() => {
  const minutes = Math.floor(remainingSeconds.value / 60)
  const seconds = remainingSeconds.value % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

const progress = computed(() => {
  const total = selectedMinutes.value * 60

  if (!total) return 0

  return ((total - remainingSeconds.value) / total) * 100
})

function startTimer() {
  if (running.value) {
    pauseTimer()
    return
  }

  running.value = true

  timer = setInterval(() => {
    if (remainingSeconds.value <= 0) {
      pauseTimer()
      return
    }

    remainingSeconds.value--
  }, 1000)
}

function pauseTimer() {
  running.value = false

  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

function resetTimer() {
  pauseTimer()
  remainingSeconds.value = selectedMinutes.value * 60
}

function selectPreset(minutes: number) {
  selectedMinutes.value = minutes
  resetTimer()
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="page focus-page">
    <header class="page-heading">
      <div>
        <span class="eyebrow">Deep work</span>
        <h2>Focus Studio</h2>

        <p>
          Protect one uninterrupted block of attention.
        </p>
      </div>
    </header>

    <CommonDeskCard class="focus-studio">
      <div class="focus-presets">
        <button
          v-for="minutes in [5, 15, 25, 50]"
          :key="minutes"
          class="preset-button"
          :class="{ active: selectedMinutes === minutes }"
          @click="selectPreset(minutes)"
        >
          {{ minutes }}m
        </button>
      </div>

      <div
        class="focus-ring"
        :style="{ '--progress': `${progress}%` }"
      >
        <div class="focus-ring-inner">
          <span class="eyebrow">
            {{ running ? 'Focusing' : 'Ready' }}
          </span>

          <strong>{{ formattedTime }}</strong>
        </div>
      </div>

      <div class="focus-actions">
        <button
          class="primary-button large"
          @click="startTimer"
        >
          {{ running ? 'Pause' : 'Start focus' }}
        </button>

        <button
          class="secondary-button"
          @click="resetTimer"
        >
          Reset
        </button>
      </div>
    </CommonDeskCard>
  </div>
</template>