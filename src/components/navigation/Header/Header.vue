<script setup lang="ts">
import Logo from '@/components/visual/Logo/Logo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="Header">
    <div class="Header__wrapper">
      <div class="Header__left">
        <RouterLink to="/">
          <Logo variant="slogan" :size="40" />
        </RouterLink>
      </div>
      <div class="Header__center"></div>
      <div class="Header__right">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>
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
  padding: 1rem;
  width: 100%;
}

.Header__left {
  flex-grow: 2;
}

.Header__brand-name {
  font-family: 'Raleway', sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
}

.Header__right {
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
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
