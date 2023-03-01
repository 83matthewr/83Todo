<template>
  <div>
    <label :for="id" class="block text-xs w-full">{{ props.name }}</label>
    <input 
      class="w-full border-2 border-white mt-0.5 mb-1 py-1 text-sm
      focus-visible:border-b-primary focus-visible:outline-none"
      :class="borderColor"
      :type="props.type"
      :value="modelValue"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="props.error" data-testid="input-error" class="border-2 border-red-600 bg-red-100 rounded mb-2 px-2 py-1">
      <p class="text-xs text-red-600">{{ props.error }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps([
  'name',
  'id',
  'type',
  'modelValue',
  'error'
]);
defineEmits(['update:modelValue']);

const borderColor = computed(() => {
  if (props.error) return "border-b-red-600";
  else return "border-b-gray-500";
})
</script>