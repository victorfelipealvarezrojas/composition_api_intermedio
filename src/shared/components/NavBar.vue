<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'
import { computed } from 'vue'

interface NavBarProps {
  title?: string
  routerLinks: RouterLink[]
  isSecondary?: boolean
}

const props = withDefaults(defineProps<NavBarProps>(), {
  title: 'Composition App',
  isSecondary: false,
})

// const links = toRef(props,'routerLinks') no pierdo referencia reactiva
const links = computed(() => props.routerLinks.filter((link) => link.visible !== false))
</script>

<template>
  <div class="icon-title">
    <template v-if="!isSecondary">
      <img alt="vue-logo" src="@/assets/logo.svg" width="25" height="25" />
      <span v-if="title">{{ title }}...</span>
    </template>
  </div>
  <nav>
    <RouterLink v-for="route in links" v-bind:key="route.name" v-bind:to="route.path">{{
      route.name
    }}</RouterLink>
  </nav>
</template>

<style>
.icon-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-title img {
  margin-right: 10px;
}

nav a:hover {
  background-color: #f0f0f0;
}

img {
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
}

nav a.router-link-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
