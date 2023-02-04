<template>
  <button v-if="!props.link" :class="classes">
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
    }
});
const classes = 'block w-fit mt-4 px-4 py-0.5 bg-primary hover:bg-primary-hover '
  + 'text-white rounded';
</script>