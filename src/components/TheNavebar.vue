<script setup>
import NavItemLeft from "./NavItemLeft.vue";
import NavItemRight from "./NavItemRight.vue";
</script>

<template>
  <nav>
    <NavItemLeft />
    <NavItemRight />
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24rem;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
</style>
