<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped lang="scss">
nav {
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: #2c3e50;
  }
}
</style>
