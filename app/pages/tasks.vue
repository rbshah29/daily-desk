<script setup lang="ts">
interface Task {
  id: number
  title: string
  completed: boolean
  tag: string
}

useHead({
  title: 'Tasks · Daily Desk'
})

const newTask = ref('')
const newTag = ref('')

const tasks = ref<Task[]>([
])

const remainingTasks = computed(
  () => tasks.value.filter(task => !task.completed).length
)

function addTask() {
  const title = newTask.value.trim()

  if (!title) return

  tasks.value.unshift({
    id: Date.now(),
    title,
    completed: false,
    tag: newTag.value.trim() || ''
  })

  newTask.value = ''
  newTag.value = ''
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<template>
  <div class="page">
    <header class="page-heading">
      <div>
        <span class="eyebrow">Workspace</span>
        <h2>Tasks</h2>

        <p>
          {{ remainingTasks }} task{{ remainingTasks === 1 ? '' : 's' }}
          remaining
        </p>
      </div>
    </header>

    <CommonDeskCard>
      <form
        class="task-create"
        @submit.prevent="addTask"
      >
        <input
          v-model="newTask"
          class="desk-input"
          placeholder="What needs to be done?"
        >

        <input
          v-model="newTag"
          class="desk-input sm:max-w-40"
          placeholder="Tag (optional)"
          maxlength="20"
        >

        <button class="primary-button">
          Add task
        </button>
      </form>
    </CommonDeskCard>

    <div class="task-page-list">
      <CommonDeskCard
        v-for="task in tasks"
        :key="task.id"
      >
        <div class="task-row">
          <input
            v-model="task.completed"
            type="checkbox"
            class="task-checkbox"
          >

          <div class="task-copy">
            <strong :class="{ completed: task.completed }">
              {{ task.title }}
            </strong>

            <span
              v-if="task.tag"
              class="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500"
            >
              #{{ task.tag }}
            </span>
          </div>

          <button
            class="icon-button danger"
            @click="deleteTask(task.id)"
          >
            ×
          </button>
        </div>
      </CommonDeskCard>

      <div
        v-if="!tasks.length"
        class="empty-state"
      >
        Everything is clear.
      </div>
    </div>
  </div>
</template>
