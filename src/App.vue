<script setup>
import TheNavebar from "./components/TheNavebar.vue";
</script>

<template>
  <div class="app_container">
    <nav>
      <TheNavebar />
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.app_container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  /* padding: 0 18rem; */
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 24rem;
}
</style>
