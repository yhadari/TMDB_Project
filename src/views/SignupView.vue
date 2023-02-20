<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="container"></div>
</template>
<style scoped>
.container {
  width: 100%;
  max-width: 130rem;
  height: calc(100vh - var(--footerHeight) - var(--navHeight));
  margin: 0 auto;
  background-color: black;
}
</style>
