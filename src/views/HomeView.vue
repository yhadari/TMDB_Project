<script setup>
import BienvenueBox from "../components/BienvenueBox.vue";
import Wrap2022 from "../components/Wrap2022.vue";
import MoviesCard from "../components/MoviesCard.vue";
import VediosBox from "../components/VediosBox.vue";
</script>

<template>
  <div class="conatiner">
    <BienvenueBox class="bienvenueBox" />
    <Wrap2022 class="wrap22" />
    <MoviesCard class="moviesCard" type="trending" />
    <VediosBox class="vedioBox" />
    <MoviesCard class="moviesCard" type="popular" />
    <MoviesCard class="moviesCard" type="popular" />
  </div>
</template>

<style scoped>
.conatiner {
  width: 260rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(35.6rem, auto);
}
.bienvenueBox,
.wrap22 {
  width: 130rem;
  color: #fff;
  font-size: 3.2rem;
  letter-spacing: 0.8px;
}
.moviesCard,
.vedioBox {
  width: 130rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.moviesCard {
  height: 44.2rem;
  padding-top: 1.4rem;
  color: #000;
}
.vedioBox {
  height: 38rem;
  color: #fff;
  padding-top: 2rem;
}

@media screen and (max-width: 2600px) {
  .conatiner {
    width: 130rem;
    grid-template-columns: 1fr;
  }
}
</style>
