<template>
  <button v-if="!props.link" :class="classes" :type="props.type">
    <slot></slot>
  </button>
  <router-link v-else :to="props.to" :class="classes">
    <slot></slot>
  </router-link>
</template>

<script setup>
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
  }
});
const classes = 'block bg-primary hover:bg-primary-hover '
  + 'text-white rounded text-center';
</script>