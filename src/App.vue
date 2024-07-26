<template>
  <NavBarComponent />

  <RouterView />
</template>

<script setup>
import NavBarComponent from './components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<style>
@import '@/assets/styles/main.css'
</style>
