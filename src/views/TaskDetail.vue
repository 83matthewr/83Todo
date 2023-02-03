<template>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>{{ task.notes }}</p>
    <p>Completed: {{ task.completed }}</p>
  </div>
  <router-link to="/">Go Back</router-link>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useTaskStore } from '../stores/tasks';
const { getTask } = useTaskStore();
const route = useRoute();
const task = getTask(route.params.id);
</script>