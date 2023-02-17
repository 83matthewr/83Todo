<template>
  <div class="container flex flex-col sm:flex-row justify-center">
    <base-card title="Todo List" class="grow">
      <task-list-card :tasks="tasks" :onClick="taskClickHandler"/>
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

import { ref } from 'vue';
import { useRouter } from "vue-router";
import { db } from "../utils/firebase/db.utils";
import { collection, query, where } from "firebase/firestore";
import { useCollection, useCurrentUser } from "vuefire";

const router = useRouter();
const user = useCurrentUser();

const tasksQuery = query(collection(db, "tasks"), where("user_id", "==", user.value.uid));
const tasks = useCollection(tasksQuery);
const selectedTask = ref(null);

const taskClickHandler = (task) => {
  router.push(`/dashboard/${task.id}`);
  selectedTask.value = task;
}
</script>