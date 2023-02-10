<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
const homePageStore = useHomePageStore();
</script>
<template>
  <div>
    <div class="overlay">
      <img src="../assets/wrap2022_bg.jpg" alt="movies background" />
      <div class="title">
        <div class="wrap_text">
          <h1>THAT'S A</h1>
          <h1>WRAP 2022</h1>
        </div>
        <p>The best (and worst) from 2022.</p>
        <div class="check_it_box">
          <router-link class="link" to="/2022">
            <div class="check_it_btn">check it out &rarr;</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/styles/HomePage.css";
</style>
