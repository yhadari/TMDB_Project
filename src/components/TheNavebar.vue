<script setup>
import NavItemLeft from "./NavItemLeft.vue";
import NavItemRight from "./NavItemRight.vue";
</script>

<template>
  <nav>
    <div class="content">
      <NavItemLeft />
      <NavItemRight />
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  background-color: rgba(var(--tmdbDarkBlue), 1);
}
.content {
  width: 100%;
  max-width: 130rem;
  height: var(--navHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
</style>
