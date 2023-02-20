<template>
  <div class="container flex flex-col sm:flex-row justify-center">
    <base-card title="Todo List" class="flex-1">
      <task-list-card :tasks="tasks"/>
      <hr/>
      <create-new-task />
    </base-card>
    <base-card :title="taskTitle" class="flex-1">
      <task-detail-card :task="selectedTask"/>
    </base-card>
  </div>
</template>

<script setup>
import TaskListCard from '../components/TaskListCard.vue';
import TaskDetailCard from '../components/TaskDetailCard.vue';
import CreateNewTask from '../components/CreateNewTask.vue';

import { ref, provide, computed } from 'vue';
import { db } from "../utils/firebase/db.utils";
import { collection, query, where, orderBy } from "firebase/firestore";
import { useCollection, useCurrentUser } from "vuefire";

const user = useCurrentUser();

const tasksQuery = query(collection(db, "tasks"), where("user_id", "==", user.value.uid), orderBy("date_created"));
const tasks = useCollection(tasksQuery);
const selectedTask = ref(null);

const setSelectedTask = (task) => {
  selectedTask.value = task;
}

const taskTitle = computed(() => {
  if (selectedTask.value) return selectedTask.value.title;
  else return null;
})

provide('setSelectedTask', setSelectedTask);
</script>