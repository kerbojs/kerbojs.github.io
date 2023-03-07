<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="Header">
    <div class="Header__wrapper">
      <div class="Header__left">
        <h1 class="Header__brand-name">KerboJS</h1>
      </div>
      <div class="Header__center">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>
      <div class="Header__right"></div>
    </div>
  </header>
</template>

<style scoped>
.Header {
  width: 100%;
}

.Header__wrapper {
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: var(--content-width);
  width: 100%;
}

.Header__left {
  flex-grow: 2;
  padding: 0.5rem 1rem;
}

.Header__brand-name {
  font-size: 1.6rem;
  font-weight: 800;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
