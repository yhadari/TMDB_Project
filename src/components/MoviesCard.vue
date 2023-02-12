<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, defineProps, computed } from "vue";
import ToggleBox from "@/components/ToggleBox.vue";
import ScrolBox from "./ScrolBox.vue";
import { trendingToggle, popularToggle } from "@/toggle/toggle";
const homePageStore = useHomePageStore();

//props
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

// data
const state = reactive({
  movie_path: import.meta.env.VITE_TMDB_MOVIE_PATH,
});

//computed
const title = computed(() => {
  if (props.type === "trending") return "Trending";
  if (props.type === "popular") return "What's Popular";
});
const toggle = computed(() => {
  if (props.type === "trending") return trendingToggle;
  if (props.type === "popular") return popularToggle;
});
const movies = computed(() => {
  if (props.type === "trending") return homePageStore.trending;
  if (props.type === "popular") return homePageStore.popular;
});
// fetch movies
if (props.type === "trending") homePageStore.fetchTrendingMovies("all", "day");
else if (props.type === "popular") homePageStore.fetchPopularMovies("movie");
</script>

<template>
  <div class="container">
    <ToggleBox :title="title" :type="type" :toggle="toggle.value" />
    <ScrolBox>
      <div class="movieCard" v-for="movie in movies" :key="movie.id">
        <img
          class="moviePoster"
          :src="`${state.movie_path}${movie.poster_path}`"
          alt="movie poster"
        />
        <img
          class="tree_points"
          src="../assets/TreePoints.svg"
          alt="TreePoinst"
        />
        <h2 class="movieTitle">{{ movie.title || movie.name }}</h2>
        <p>{{ movie.release_date || movie.first_air_date }}</p>
      </div>
    </ScrolBox>
  </div>
</template>

<style scoped>
.container:after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 6rem;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%
  );
  z-index: 10;
}
.movieCard {
  position: relative;
  height: 22.5rem;
  min-width: 15rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
}
.moviePoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}
.tree_points {
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;
  opacity: 0.6;
}
.movieTitle {
  margin-top: 2rem;
  letter-spacing: 0.6px;
}
</style>
