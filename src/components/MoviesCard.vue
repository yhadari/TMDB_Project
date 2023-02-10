<script setup>
import { useHomePageStore } from "../stores/HomePageStore";
import { reactive } from "vue";
const homePageStore = useHomePageStore();

// data
const state = reactive({
  tendanceBtnOne: true,
  tendanceBtnTwo: false,
  movie_path: import.meta.env.VITE_TMDB_MOVIE_PATH,
  media_type: "all",
  time_window: "day",
});

// fetch movies
homePageStore.fetchMovies(state.media_type, state.time_window);

// methods
const ScrollToLeft = () => {
  let content = document.querySelector(".scrollBox");
  content.scrollLeft = 0;
};
const handleClick = (e) => {
  ScrollToLeft();
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
</script>

<template>
  <div>
    <div class="title">
      <h1>Tendances</h1>
      <div class="btn_box">
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
      </div>
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
.btn_box button {
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
.btn_box {
  border: 1px solid rgba(var(--tmdbDarkBlue), 1);
  border-radius: 2rem;
}
.btn_right {
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
.btn_left {
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
}
.btn_box .clickedBtn {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
  transition: all 0.5s;
}
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
  height: 0.8rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
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
