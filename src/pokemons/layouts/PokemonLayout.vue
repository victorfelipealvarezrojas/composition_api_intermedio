<script lang="ts" setup>
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'
import type { RouterLink } from '@/router/list-routes'

const links: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    // props se definen desde la ruta

    return {
      name: name?.toString(),
      path: path,
      title: (props as { title: string }).title,
      visible: (props as { isView?: boolean }).isView,
    }
  }) || []
</script>

<template>
  <h1>Pokemon Layout</h1>
  <NavBar :router-links="links" :is-secondary="true" />
  <RouterView />
</template>
