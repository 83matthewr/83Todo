<template>
  <router-link v-if="props.link" :to="props.to" :class="classes">
    <slot></slot>
  </router-link>
  <button v-else :class="classes">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  link: {
      type: Boolean,
      required: false,
      default: false
    },
  to: {
    type: String,
    required: false,
    default: '/'
  },
  buttonStyle: {
    type: String,
    required: false,
    default: "solid"
  }
});

const classes = computed(() => {
  if (props.buttonStyle === 'solid') {
    return 'block bg-primary border-2 border-primary hover:bg-primary-hover '
      + 'text-white rounded text-center';
  } else if (props.buttonStyle === 'reversed') {
    return 'block bg-white border-2 border-primary hover:bg-primary hover:text-white '
      + 'text-primary rounded text-center';
  } else {
    return 'block bg-white '
      + 'text-primary rounded text-center';
  }
})
</script>