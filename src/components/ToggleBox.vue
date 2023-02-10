<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: string,
    required: true,
  },
  toggle: {
    type: Array[String],
    required: true,
  },
});
</script>
<template>
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
</style>
