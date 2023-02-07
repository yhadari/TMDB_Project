<script setup>
import { useHomePageStore } from "../stores/HomePageStore";
import { reactive } from "vue";
const homePageStore = useHomePageStore();
const state = reactive({
  tendanceBtnOne: true,
  tendanceBtnTwo: false,
  path: import.meta.env.VITE_TMDB_MOVIE_PATH,
  media_type: "all",
  time_window: "day",
});
const handleClick = (e) => {
  if (e.target.innerText === "Aujourd'hui") {
    state.tendanceBtnOne = true;
    state.tendanceBtnTwo = false;
    state.time_window = "day";
    homePageStore.fetchMovies(state.media_type, state.time_window);
  } else {
    state.tendanceBtnOne = false;
    state.tendanceBtnTwo = true;
    state.time_window = "week";
    homePageStore.fetchMovies(state.media_type, state.time_window);
  }
};
homePageStore.fetchMovies(state.media_type, state.time_window);
</script>

<template>
  <div class="moviesContainer">
    <div class="title">
      <h1>Tendances</h1>
      <span class="p-buttonset">
        <Button
          @click="handleClick"
          label="Aujourd'hui"
          :class="`${state.tendanceBtnOne ? 'clickedBtn' : ''}`"
        />
        <Button
          @click="handleClick"
          label="Cette semaine"
          :class="`${state.tendanceBtnTwo ? 'clickedBtn' : ''}`"
        />
      </span>
    </div>
    <div class="moviesCards">
      <div
        class="moviesCard"
        v-for="movie in homePageStore.upComingMovies"
        :key="movie.id"
      >
        <img
          class="moviePoster"
          :src="`${state.path}${movie.poster_path}`"
          alt="movie poster"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.moviesContainer {
  max-width: 130rem;
  height: 40rem;
  margin: 0 auto;
  margin-top: 1.4rem;
  color: #fff;
  padding: 0 2rem;
}
.title {
  height: 15%;
  color: black;
  display: flex;
  align-items: center;
  gap: 2.6rem;
}
.title h1 {
  font-size: 2.4rem;
  font-weight: 600;
}
.title Button {
  font-size: 1.5rem;
  padding: 0.6rem 2.6rem;
  border: none;
  background-color: #fff;
  color: black;
  box-shadow: none;
  border-radius: 2rem;
  font-weight: 500;
  letter-spacing: 0.4px;
}
.title Button:hover {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
  border: none;
  box-shadow: none;
}
.title .clickedBtn {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
}
.p-buttonset {
  border: 1px solid rgba(var(--tmdbDarkBlue), 1);
  border-radius: 2rem;
}
.moviesCards {
  height: 85%;
  /* background-color: black; */
  display: flex;
  overflow-x: scroll;
}
.moviesCard {
  height: 80%;
  min-width: 16rem;
  background-color: black;
  margin: 1rem;
  border-radius: 1rem;
}
.moviePoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
</style>
