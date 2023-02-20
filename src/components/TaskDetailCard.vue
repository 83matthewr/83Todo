<template>
  <div v-if="props.task">
    <h2>{{ props.task.title }}</h2>
    <p>{{ props.task.notes }}</p>
    <p>Completed: {{ props.task.completed }}</p>
  </div>
  <div v-if="!props.task" class="w-full h-full bg-gray-100 flex justify-center items-center">
    <p class="h-10">Select a task</p>
  </div>
</template>

<script setup>
const props = defineProps(['task']);
</script>