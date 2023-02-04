<template>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>{{ task.notes }}</p>
    <p>Completed: {{ task.completed }}</p>
  </div>
  <base-button link to="/">
    Go Back
  </base-button>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useTaskStore } from '../stores/tasks';
import { useAuthStore } from "../stores/auth";
const { getTask } = useTaskStore();
const route = useRoute();
const task = getTask(route.params.id);

const { currentUser } = useAuthStore();
console.log(currentUser);
</script>