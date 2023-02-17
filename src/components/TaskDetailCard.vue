<template>
  <div v-if="props.task">
    <h2>{{ props.task.title }}</h2>
    <p>{{ props.task.notes }}</p>
    <p>Completed: {{ props.task.completed }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['task']);
</script>