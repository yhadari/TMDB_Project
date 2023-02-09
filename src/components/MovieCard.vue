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
        <button
          @click="handleClick"
          :class="`btn_left ${state.tendanceBtnOne ? 'clickedBtn' : ''}`"
        >
          Aujourd'hui
        </button>
        <button
          @click="handleClick"
          :class="`btn_right ${state.tendanceBtnTwo ? 'clickedBtn' : ''}`"
        >
          Cette semaine
        </button>
      </span>
    </div>
    <div class="moviesCards">
      <div class="scrollBox">
        <div
          class="movieCard"
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
  </div>
</template>

<style scoped>
.moviesContainer {
  max-width: 130rem;
  height: 42rem;
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
.title button {
  font-size: 1.5rem;
  padding: 0.6rem 2.6rem;
  border: none;
  background-color: #fff;
  color: black;
  box-shadow: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
}
.btn_right {
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.btn_left {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
}
.title .clickedBtn {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
  transition: all 0.5s;
}
.p-buttonset {
  border: 1px solid rgba(var(--tmdbDarkBlue), 1);
  border-radius: 2rem;
}
.moviesCards {
  height: 85%;
  width: 100%;
  display: flex;
  position: relative;
}
.moviesCards::before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/IMDb_Header_Page.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
  /* border-radius: 1rem; */
}
.scrollBox {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  overflow-x: scroll;
}
.scrollBox::-webkit-scrollbar {
  height: 0.8rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
}
.movieCard {
  height: 22.5rem;
  min-width: 15rem;
  margin: 1rem;
}
.moviePoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
</style>
