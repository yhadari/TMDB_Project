<script setup>
import ToggleBox from "@/components/ToggleBox.vue";
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, ref } from "vue";
const homePageStore = useHomePageStore();

// data
const state = reactive({
  movie_path: import.meta.env.VITE_TMDB_MOVIE_PATH,
});

const toggle = ref([
  {
    name: "En streaming",
    type: {
      media_type: "all",
      time_window: "day",
    },
    clicked: true,
  },
  {
    name: "À la télévision",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
  {
    name: "À louer",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
  {
    name: "Au cinéma",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
]);

// fetch movies
homePageStore.fetchMovies("all", "day");
</script>
<template>
  <div>
    <ToggleBox title="Bandes-annonces" :toggle="toggle" />
  </div>
</template>
<style scoped></style>
