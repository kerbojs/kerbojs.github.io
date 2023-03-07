<script setup lang="ts">
import Header from '@/components/navigation/Header/Header.vue'
</script>

<template>
  <Header>
    <h1>KerboJS</h1>
  </Header>
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 2rem 1rem;
  width: 100%;
}
</style>
