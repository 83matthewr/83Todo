<template>
  <div class="container flex flex-col sm:flex-row justify-center">
    <base-card title="Todo List" class="grow">
      <task-list-card :tasks="tasks"/>
      <hr/>
      <create-new-task />
    </base-card>
    <base-card title="Todo Details" class="grow">
      <task-detail-card v-if="selectedTask" :task="selectedTask"/>
      <div v-if="!selectedTask">
        Select a Task
      </div>
    </base-card>
  </div>
</template>

<script setup>
import TaskListCard from '../components/TaskListCard.vue';
import TaskDetailCard from '../components/TaskDetailCard.vue';
import CreateNewTask from '../components/CreateNewTask.vue';

import { ref, provide } from 'vue';
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

provide('setSelectedTask', setSelectedTask);
</script>