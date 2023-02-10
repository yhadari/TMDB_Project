<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, ref } from "vue";
import ToggleBox from "@/components/ToggleBox.vue";
const homePageStore = useHomePageStore();

// data
const state = reactive({
  movie_path: import.meta.env.VITE_TMDB_MOVIE_PATH,
});

const toggle = ref([
  {
    name: "Aujourd'hui",
    type: {
      media_type: "all",
      time_window: "day",
    },
    clicked: true,
  },
  {
    name: "Cette semaine",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
]);

// fetch movies
homePageStore.fetchTrendingMovies("all", "day");
homePageStore.fetchTrailer("streaming");
</script>

<template>
  <div>
    <ToggleBox title="Tendances" type="poster" :toggle="toggle" />
    <div class="moviesCards">
      <div class="scrollBox">
        <div
          class="movieCard"
          v-for="movie in homePageStore.trending"
          :key="movie.id"
        >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.moviesCards {
  height: 85%;
  width: 100%;
  display: flex;
  position: relative;
}
.scrollBox {
  display: flex;
  overflow-x: scroll;
  color: #000;
  padding: 0 2rem;
}
.scrollBox:after {
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
}
.scrollBox::-webkit-scrollbar {
  height: 1rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
}
.movieCard {
  position: relative;
  height: 22.5rem;
  min-width: 15rem;
  margin: 1rem;
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
