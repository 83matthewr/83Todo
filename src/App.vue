<template>
  <header-nav></header-nav>
  <div class="container">
    <section class="todo-list">
      <p>Todo List</p>
      <ul>
        <li v-for="task in tasks" :key="task.title">{{ task.title }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import HeaderNav from "./components/layout/HeaderNav.vue";
import { computed } from "vue";
import { useTaskStore } from "./stores/tasks";

const store = useTaskStore();
const tasks = computed(() => store.tasks);
</script>

