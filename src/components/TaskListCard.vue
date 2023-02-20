<template>
  <section class="my-4">
    <ul>
      <task-item
        v-for="task in props.tasks" 
        :key="task.title"
        :task="task"
      />
    </ul>
  </section>
</template>

<script setup>
import TaskItem from './TaskItem.vue';
const props = defineProps(['tasks']);
</script>