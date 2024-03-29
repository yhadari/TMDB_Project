<script setup>
import ToggleBox from "@/components/ToggleBox.vue";
import ScrolBox from "./ScrolBox.vue";
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, computed } from "vue";
import { vedioToggle } from "@/toggle/toggle";

const homePageStore = useHomePageStore();

//methods
const loading = (value) => {
  state.loading = value;
};

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  size: "original",
  loading: true,
  index: 0,
  vedioPlay: false,
  vedioIndex: 0,
  scroll: 0,
});

const scroll = (value) => {
  state.scroll = value;
};

const vedioPosterHover = (index) => {
  state.index = index;
};

const vedioPosterClick = (index) => {
  state.vedioIndex = index;
  state.vedioPlay = true;
};

homePageStore.fetchTrailers("movie");
</script>

<template>
  <section :class="`${state.scroll <= 100 && 'contianer'}`">
    <ToggleBox
      title="Latest Trailers"
      type="vedio"
      :toggle="vedioToggle"
      @loading="loading"
    />
    <ScrolBox type="vedio" @scroll="scroll">
      <div
        :class="`vedioCard ${!state.loading && 'hide'} ${
          homePageStore.vedio.loading && 'ld'
        }`"
        v-for="(vedio, index) in homePageStore.vedio.arr"
        :key="vedio.name"
      >
        <div class="loading" v-if="homePageStore.vedio.loading">
          <img src="../assets/loading.png" alt="loading" />
        </div>
        <div
          class="imageCard"
          @click="vedioPosterClick(index)"
          v-if="!homePageStore.vedio.loading"
        >
          <img
            class="vedioPoster"
            :src="`${state.base_url}${state.size}${vedio.backdrop_path}`"
            alt="movie poster"
            @mouseover="vedioPosterHover(index)"
          />
          <img
            class="tree_points"
            src="../assets/TreePoints.svg"
            alt="TreePoinst"
          />
          <ion-icon name="play" class="play_btn"></ion-icon>
        </div>
        <div v-if="!homePageStore.vedio.loading">
          <h2 class="movieTitle">{{ vedio.name || vedio.title }}</h2>
          <h3>{{ homePageStore.vedio.names[index] }}</h3>
        </div>
      </div>
    </ScrolBox>
    <div
      class="backGround"
      :style="`background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.75) 0%, rgba(var(--tmdbDarkBlue), 0.75) 100%), url(${
        state.base_url
      }${state.size}${homePageStore.vedio.arr[state.index]?.backdrop_path})`"
    ></div>
    <Teleport to="body">
      <div class="vedio_wrap" v-if="state.vedioPlay">
        <div class="vedio_close" @click="state.vedioPlay = false">
          <iframe
            class="responsive-iframe"
            :src="`https://www.youtube.com/embed/${
              homePageStore.vedio.urls[state.vedioIndex]
            }?autoplay=1`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.contianer::after {
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
  z-index: 20;
  animation-name: animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes animation {
  0% {
    right: -6rem;
    top: 0;
  }
  100% {
    right: 0;
    top: 0;
  }
}
.vedio_close {
  width: 100%;
  position: relative;
  cursor: pointer;
  padding-top: 56.25%;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.vedio_close::after {
  content: "x";
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: hsla(0, 0%, 100%, 0.2);
  color: #fff;
  border-radius: 50%;
  height: 3.4rem;
  width: 3.4rem;
  font-size: 2.4rem;
  text-align: center;
}
.vedio_wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: grayscale(0.4) blur(0.8rem);
  padding: 12%;
}
.vedioCard {
  height: 17.8rem;
  width: 31.8rem;
  min-width: 31.8rem;
  border-radius: 1rem;
  text-align: center;
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: 0.8px;
  background-color: hsla(0, 0%, 100%, 0.4);
  margin-top: 0.6rem;
  z-index: 10;
}
.hide {
  visibility: hidden;
  opacity: 0;
  transition: linear 0.6s, opacity 0.6s linear;
}
.imageCard {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  margin-bottom: 1rem;
}
.imageCard:hover {
  transform: scale(1.05);
}
.imageCard:hover .play_btn {
  width: 7rem;
  height: 7rem;
}
.vedioPoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.tree_points,
.play_btn {
  cursor: pointer;
  position: absolute;
}
.tree_points {
  top: 0.8rem;
  right: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;
  opacity: 0.6;
}
.play_btn {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5.8rem;
  height: 5.8rem;
  color: #fff;
  transition: all 0.3s;
}
.backGround {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading img {
  width: 6.4rem;
  opacity: 0.7;
  animation: fade 2s infinite;
}
.ld {
  animation: fade 2s infinite;
}
@keyframes fade {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.7;
  }
}
</style>
