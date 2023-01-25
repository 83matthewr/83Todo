<template>
  <section class="todo-list">
    <p>Todo List</p>
    <ul>
      <li v-for="task in tasks" :key="task.title" @click="taskClickHandler(task.id)">{{ task.title }}</li>
    </ul>
  </section>
</template>

<script setup>
import { useTaskStore } from "../stores/tasks";
import { useRouter } from "vue-router";

const router = useRouter();
const { tasks } = useTaskStore();

function taskClickHandler(id) {
  router.push(`/${id}`);
}
</script>