<script setup>
import ToggleBox from "@/components/ToggleBox.vue";
import ScrolBox from "./ScrolBox.vue";
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, ref } from "vue";
const homePageStore = useHomePageStore();

// data
const state = reactive({
  vedio_path: import.meta.env.VITE_TMDB_VEDIO_PATH,
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
homePageStore.fetchTrendingMovies("all", "day");
</script>

<template>
  <div class="container">
    <ToggleBox title="Bandes-annonces" type="vedio" :toggle="toggle" />
    <ScrolBox>
      <div
        class="vedioCard"
        v-for="vedio in homePageStore.LatestTrailers"
        :key="vedio.title"
      >
        <img
          class="vedioPoster"
          :src="`${state.vedio_path}${vedio.path}`"
          alt="movie poster"
        />
        <img
          class="tree_points"
          src="../assets/TreePoints.svg"
          alt="TreePoinst"
        />
        <img src="" alt="playBtn" />
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
}
.vedioCard {
  position: relative;
  height: 17.8rem;
  min-width: 31.8rem;
  border-radius: 1rem;
  padding: 0.4rem;
  transition: all 0.3s;
}
.vedioCard:hover {
  transform: scale(1.05);
}
.vedioPoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
</style>
