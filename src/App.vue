<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/list-routes'

const title = 'PokeemonApp'
</script>

<template>
  <header>
    <NavBar :title :routerLinks />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #8daccc;
}

button {
  margin-left: 20px;
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
.container {
  margin: 0 auto;
  margin-left: 10px;
  padding: 30px;
}
</style>
