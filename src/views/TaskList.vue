<template>
  <section class="border rounded p-4 w-6/12 shadow-md">
    <h2 class="text-xl font-bold mb-4">Todo List</h2>
    <ul>
      <li 
        v-for="task in tasks" 
        :key="task.title" 
        @click="taskClickHandler(task.id)"
        class="rounded px-2 py-1 my-2 bg-primary hover:bg-primary-hover 
              text-white shadow-sm hover:shadow-lg cursor-pointer"
      >
        {{ task.title }}
      </li>
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