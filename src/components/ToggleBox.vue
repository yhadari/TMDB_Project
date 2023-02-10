<script setup>
import { defineProps } from "vue";
import { useHomePageStore } from "@/stores/HomePageStore";
const homePageStore = useHomePageStore();

// props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  toggle: {
    type: Array,
    required: true,
  },
});

// methods
const ScrollToLeft = () => {
  let content = document.querySelector(".scrollBox");
  content.scrollLeft = 0;
};
const handleClick = (toggle) => {
  ScrollToLeft();
  homePageStore.fetchMovies(toggle.type.media_type, toggle.type.time_window);
  props.toggle.forEach((ele) => {
    ele.clicked = false;
  });
  toggle.clicked = true;
};
</script>

<template>
  <div class="title">
    <h1>{{ props.title }}</h1>
    <div class="btn_box">
      <div v-for="toggle in props.toggle" :key="toggle.name">
        <button
          @click="handleClick(toggle)"
          :class="`${toggle.clicked ? 'clickedBtn' : ''}`"
        >
          {{ toggle.name }}
        </button>
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
.btn_box {
  display: flex;
  border: 1px solid rgba(var(--tmdbDarkBlue), 1);
  border-radius: 2rem;
}
.btn_box button {
  font-size: 1.5rem;
  padding: 0.6rem 2rem;
  border: none;
  background-color: #fff;
  color: black;
  box-shadow: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
  border-radius: 2rem;
}
.btn_box .clickedBtn {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
  /* animation-name: togglAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards; */
  transition: all 0.5s;
}

/* @keyframes togglAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
} */
</style>
