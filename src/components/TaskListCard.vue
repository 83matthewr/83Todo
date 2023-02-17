<template>
  <section class="my-4">
    <ul>
      <li 
        v-for="task in props.tasks" 
        :key="task.title" 
        @click="onClick(task)"
        class="rounded px-2 py-1 my-2 bg-primary hover:bg-primary-hover 
              text-white shadow-sm hover:shadow-lg cursor-pointer"
      >
        {{ task.title }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps(['tasks', 'onClick']);
</script>