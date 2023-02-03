<template>
  <div class="w-screen">
    <header-nav></header-nav>
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from './components/layout/HeaderNav.vue';
</script>


