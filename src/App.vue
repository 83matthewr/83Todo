<template>
  <div class="w-screen h-screen bg-gray-200">
    <header-nav></header-nav>
    <div class="container mx-auto px-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from './components/layout/HeaderNav.vue';
</script>


