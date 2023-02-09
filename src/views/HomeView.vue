<script setup>
import BienvenueBox from "../components/BienvenueBox.vue";
import Wrap2022 from "../components/Wrap2022.vue";
import MoviesCard from "../components/MoviesCard.vue";
</script>
<template>
  <div class="conatiner">
    <BienvenueBox class="bienvenueBox" />
    <Wrap2022 class="wrap22" />
    <MoviesCard class="moviesCard" />
    <div class="box box4"></div>
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
.moviesCard {
  width: 130rem;
  height: 43.2rem;
  margin-top: 1.4rem;
  color: #fff;
  padding: 0 2rem;
}
.box4 {
  background: #666;
}

@media screen and (max-width: 2600px) {
  .conatiner {
    width: 130rem;
    grid-template-columns: 1fr;
  }
}
</style>
