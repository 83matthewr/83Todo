<template>
  <button v-if="!props.link" :class="classes" :type="props.type">
    <slot></slot>
  </button>
  <router-link v-else :to="props.to" :class="classes">
    <slot></slot>
  </router-link>
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
  type: {
    type: String,
    required: false,
    default: "button"
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