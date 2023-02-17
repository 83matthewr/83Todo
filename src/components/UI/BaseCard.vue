<template>
  <div class="border rounded shadow-md m-4 p-4">
    <h1 v-if="props.title" class="text-2xl font-semibold">{{ props.title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(['title']);
</script>