import { defineStore } from "pinia";
import { ref } from "vue";

import DATA from "../dummy_data";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref(DATA);

  const addTask = (newTask) => {
    tasks.value.push(newTask);
  }

  return { tasks, addTask }
})