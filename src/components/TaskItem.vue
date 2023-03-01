<template>
  <li 
    class="rounded px-2 py-1 my-2 bg-white border-2 border-primary 
          text-primary shadow-sm hover:shadow-lg flex flex-row justify-between"
    data-testid="task-item"
  >
    <input 
      data-testid="task-input"
      :checked="props.task.completed"
      @click="e => taskCheckedHandler(e, props.task)"
      type="checkbox" 
      :id="props.task.id"
      class="mr-2 peer cursor-pointer accent-primary"
    />
    <span
      @click="taskClickHandler(props.task)"
      class="text-sm leading-6 peer-checked:line-through cursor-pointer grow"
    >
      {{ props.task.title }}
    </span>
    <span 
      data-testid="task-delete"
      class="material-symbols-outlined text-[20px] leading-6 cursor-pointer text-gray-400 hover:text-primary"
      @click="deleteClickHandler(props.task.id)"
    >
      close
    </span>
  </li>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { updateTaskStatus, deleteTask } from "../utils/firebase/db.utils";

const router = useRouter();
const route = useRoute();
const props = defineProps(['task']);

const taskClickHandler = (task) => {
  router.push(`/dashboard/${task.id}`);
}

const taskCheckedHandler = (e, task) => {
  updateTaskStatus(task.id, e.target.checked);
}

const deleteClickHandler = (id) => {
  deleteTask(id);
  if (route.params.id === id) {
    router.push("/dashboard");
  }
}
</script>