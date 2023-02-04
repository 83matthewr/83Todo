<template>
  <div>
    <label :for="id" class="block text-xs">{{ props.name }}</label>
    <input 
      class="border-2 mt-0.5 mb-1 px-2 py-0.5 rounded text-sm
      focus-visible:ring-2 focus-visible:outline-none"
      :type="props.type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps([
  'name',
  'id',
  'type',
  'modelValue'
]);
defineEmits(['update:modelValue']);
</script>