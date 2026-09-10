<script setup lang="ts">
interface Note {
  id: number
  text: string
  color: 'red' | 'green' | 'yellow'
}

useHead({
  title: 'Notes · Daily Desk'
})

const colors: Note['color'][] = [
  'red',
  'green',
  'yellow'
]

const notes = ref<Note[]>([
])

function addNote() {
  notes.value.unshift({
    id: Date.now(),
    text: '',
    color: colors[notes.value.length % colors.length]!
  })
}

function deleteNote(id: number) {
  notes.value = notes.value.filter(note => note.id !== id)
}

</script>

<template>
  <div class="page">
    <header class="page-heading split-heading">
      <div>
        <span class="eyebrow">Capture</span>
        <h2>Notes</h2>
        <p>Keep small thoughts somewhere safe.</p>
      </div>

      <button
        class="primary-button"
        @click="addNote"
      >
        + New note
      </button>
    </header>

    <div class="notes-grid">
      <article
        v-for="note in notes"
        :key="note.id"
        class="note-card"
        :class="note.color"
      >
        <div class="note-actions">
          <div class="note-color-picker" aria-label="Choose note color">
            <button
              v-for="color in colors"
              :key="color"
              :aria-label="`Use ${color} note color`"
              :title="`Use ${color}`"
              class="note-color-swatch"
              :class="[color, { active: note.color === color }]"
              @click="note.color = color"
            />
          </div>

          <button
            aria-label="Delete note"
            @click="deleteNote(note.id)"
          >
            ×
          </button>
        </div>

        <textarea
          v-model="note.text"
          placeholder="Write something..."
        />
      </article>
    </div>

    <div
      v-if="!notes.length"
      class="empty-state"
    >
      No notes yet.
    </div>
  </div>
</template>
