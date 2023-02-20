<template>
  <li 
    class="rounded px-2 py-1 my-2 bg-primary hover:bg-primary-hover 
          text-white shadow-sm hover:shadow-lg flex flex-row justify-between"
  >
    <input 
      @click="e => taskCheckedHandler(e, props.task)"
      type="checkbox" 
      :id="props.task.id"
      class="mr-2 peer cursor-pointer"
    />
    <span
      @click="taskClickHandler(props.task)"
      class="text-sm leading-6 peer-checked:line-through cursor-pointer grow"
    >
      {{ props.task.title }}
    </span>
    <span 
      class="material-symbols-outlined text-[20px] leading-6 cursor-pointer hover:text-black"
      @click="deleteClickHandler(props.task.id)"
    >
      close
    </span>
  </li>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { inject } from "vue";
import { updateTaskStatus, deleteTask } from "../utils/firebase/db.utils";

const router = useRouter();
const route = useRoute();
const props = defineProps(['task']);
const setSelectedTask = inject('setSelectedTask');

const taskClickHandler = (task) => {
  router.push(`/dashboard/${task.id}`);
  setSelectedTask(task);
}

const taskCheckedHandler = (e, task) => {
  updateTaskStatus(task.id, e.target.checked);
}

const deleteClickHandler = (id) => {
  deleteTask(id);
  if (route.params.id === id) {
    setSelectedTask(null);
    router.push("/dashboard");
  }
}
</script>