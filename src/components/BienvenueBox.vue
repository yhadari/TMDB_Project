<script setup>
import { reactive } from "vue";
import { useHomePageStore } from "@/stores/HomePageStore";

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  size: "original",
});

const homePageStore = useHomePageStore();

await homePageStore.fetchTrending("all", "day");
const trending = homePageStore.trending.data;
const random = Math.floor(Math.random() * trending.length) + 1;
console.log("t", trending[random]);
</script>
<template>
  <div>
    <div class="overlay">
      <img
        :src="`${state.base_url}${state.size}${trending[random].backdrop_path}`"
        alt="movies background"
      />
      <div class="title">
        <div>
          <h2>Welcome</h2>
          <h5>
            Millions of movies, TV shows and people to discover. Explore now.
          </h5>
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
.overlay::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: rgb(0, 68, 119);
  background: linear-gradient(
    90deg,
    rgba(0, 68, 119, 1) 100%,
    rgba(0, 105, 180, 1) 100%
  );
}
</style>
