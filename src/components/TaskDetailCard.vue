<template>
  <div data-testid="task-detail-card" v-if="props.task">
    <div class="flex flex-row justify-between mb-4">
      <h2 class="text-3xl font-bold">{{ props.task.title }}</h2>
      <span class="material-symbols-outlined pr-2 cursor-pointer hover:text-primary">edit</span>
    </div>
    <div class="flex flex-col sm:flex-row justify-between align-baseline">
      <p class="text-sm text-gray-500 leading-5">Created: {{ props.task.date_created.toDate().toDateString() }}</p>
      <p v-if="props.task.completed" class="leading-5 pr-2 text-green-500">Completed</p>
      <p v-if="!props.task.completed" class="leading-5 pr-2 text-red-500">Incomplete</p>
    </div>
    <textarea readonly rows="5" :value="notes" class="w-full bg-gray-100 rounded p-1 my-2"/>
    <div class="flex flex-row justify-center align-baseline">
      <base-button buttonStyle="reversed" class="p-2 mx-4 w-40">
        <span class="material-symbols-outlined text-[40px]">notifications</span>
        <p>Add Reminder</p>
      </base-button>
      <base-button buttonStyle="reversed" class="p-2 mx-4 w-40">
        <span class="material-symbols-outlined text-[40px]">delete</span>
        <p>Delete</p>
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(['task']);

const notes = computed(() => {
  if (props.task.notes !== '') return props.task.notes;
  else return "No notes for this task";
});
</script>