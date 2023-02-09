<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
const homePageStore = useHomePageStore();
</script>
<template>
  <div>
    <div class="overlay">
      <img :src="homePageStore.background1" alt="movies background" />
      <div class="title">
        <div>
          <h2>Bienvenue,</h2>
          <h5>Des millions de films, émissions télévisées et artistes...</h5>
        </div>
        <div class="input_box">
          <input
            type="text"
            class="search_input"
            placeholder="Rechercher un film, une émission télévisée, un artiste..."
          />
          <button class="search_btn">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/styles/HomePage.css";
</style>
