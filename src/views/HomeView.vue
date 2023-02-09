<script setup>
import { useHomePageStore } from "../stores/HomePageStore";
import MovieCard from "../components/MovieCard.vue";
const homePageStore = useHomePageStore();
</script>
<template>
  <div>
    <!-- <div class="img_container">
      <div class="overlay overlay1">
        <img :src="homePageStore.background1" alt="movies background" />
        <div class="title">
          <div>
            <h2>Bienvenue,</h2>
            <h5>Des millions de films, émissions télévisées et artistes...</h5>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup input_box">
              <input
                type="text"
                class="search_input"
                placeholder="Rechercher un film, une émission télévisée, un artiste..."
              />
              <button class="search_btn">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay overlay2">
        <img :src="homePageStore.background2" alt="movies background" />
        <div class="title">
          <div>
            <h1>THAT'S A</h1>
            <h1>WRAP 2022</h1>
          </div>
          <hr />
          <p>The best (and worst) from 2022.</p>
          <router-link class="link" to="/2022">
            <div class="check_it_btn">check it out &rarr;</div>
          </router-link>
        </div>
      </div>
    </div>
    <MovieCard /> -->
  </div>
</template>
<style scoped>
.img_container {
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 3.2rem;
  letter-spacing: 0.4px;
}
.link {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}
.overlay {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}
.overlay img {
  width: inherit;
  height: 36rem;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
}
.title {
  z-index: 1;
  max-width: 130rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  padding: 3.2rem;
  gap: 0.4rem;
}
.title p {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.4px;
}
.overlay::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.overlay1:after {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 33%,
    rgba(255, 255, 255, 1) 100%
  );
}
.overlay2:after {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 28%,
    rgba(27, 1, 28, 1) 52%
  );
}
.input_box {
  width: 120rem;
  margin-top: 4rem;
  position: relative;
}
.search_input {
  width: 100%;
  height: 4.8rem;
  padding: 0 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.4px;
  color: #777;
  border-radius: 3rem !important;
  border: none;
}
.search_input:focus {
  outline: none;
}
.search_btn {
  cursor: pointer;
  border: none;
  height: 100%;
  width: 10rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(
    to right,
    rgba(var(--tmdbLightGreen), 1) 0%,
    rgba(var(--tmdbLightBlue), 1) 100%
  );
  border-radius: 3rem !important;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.search_btn:hover {
  color: #111;
}
.check_it_btn {
  width: 14rem;
  padding: 0.8rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  border: 2px solid #fff;
  text-align: center;
  margin-top: 1.6rem;
}
</style>
