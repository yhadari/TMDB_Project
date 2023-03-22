<script setup>
import router from '@/router/index'
import LinkItem from '@/components/LinkItem.vue'
import { useMoviePageStore } from '@/stores/MoviePageStore'
import { reactive } from 'vue'

const moviePageStore = useMoviePageStore()

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  backdrop_size: "original",
  poster_size: "original",
  director: '',
  character: '',
  writer: '',
  runtime: {}
})

// Methods
const getId = () => {
  const param = router.currentRoute.value.params.param
  const id = param.substring(0, param.indexOf('-'))
  return id
}

const getCast = (crew) =>{
  state.director = crew.find((ele)=> ele.job === "Director")?.original_name
  state.character = crew.find((ele)=> ele.job === "Characters")?.original_name
  state.writer = crew.find((ele)=> ele.job === "Writer")?.name
}

const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  state.runtime = { hours, minutes };
}
// Fetch movie details
await moviePageStore.fetchMovieDetails(getId())
console.log(moviePageStore.movieDetails);
toHoursAndMinutes(moviePageStore.movieDetails.runtime)
await moviePageStore.fetchMovieCredits(getId())
console.log(moviePageStore.movieCredits);
getCast(moviePageStore.movieCredits.crew);
await moviePageStore.fetchUsername()

</script>
<template>
  <div class="container">
    <div class="shortcut_bar">
      <LinkItem
        name="Overview &darr;"
        :links="[
          { name: 'Main', to: '/' },
          { name: 'Alternative Titels', to: '/' },
          { name: 'Cast & Crew', to: '/' },
          { name: 'Release Dates', to: '/' },
          { name: 'Translations', to: '/' },
          { name: 'Watch Now', to: '/' }
        ]"
        type="left"
        textColor="#000"
      />
      <LinkItem
        name="Media &darr;"
        :links="[
          { name: 'Backdrops', to: '/' },
          { name: 'Logos', to: '/' },
          { name: 'Posters', to: '/' },
          { name: 'Vedios', to: '/' }
        ]"
        type="left"
        textColor="#000"
      />
      <LinkItem
        name="Fandom &darr;"
        :links="[
          { name: 'Discussions', to: '/' },
          { name: 'Reviews', to: '/' }
        ]"
        type="left"
        textColor="#000"
      />
      <LinkItem
        name="Share &darr;"
        :links="[
          { name: 'Share Link', to: '/' },
          { name: 'Facebook', to: '/' },
          { name: 'Tweet', to: '/' }
        ]"
        type="left"
        textColor="#000"
      />
    </div>
    <div class="movie_box">
      <div class="movie_background">
        <img
        :src="`${state.base_url}${state.backdrop_size}${moviePageStore.movieDetails.backdrop_path}`"
        alt="movie_background"
        />
        <div class="gradient-overlay"></div>
      </div>
      <div class="movie_info">
        <img
          class="poster_img"
          :src="`${state.base_url}${state.poster_size}${moviePageStore.         movieDetails.poster_path}`"
          alt="movie_backdrop"
        />
        <div class="movie_details">
          <h1 class="m_title">{{ moviePageStore.movieDetails.title}} <span class="m_date">({{ moviePageStore.movieDetails.release_date}})</span></h1>
          <div class="m_genres">
            .
            <div v-for="item in moviePageStore.movieDetails.genres">{{ item.name }},</div>
            .
            <p class="m_runtime">{{ state.runtime.hours }}h {{ state.runtime.minutes }}m</p>
          </div>
          <p class="m_tagline">{{ moviePageStore.movieDetails.tagline }}</p>
          <div class="m_overview">
            <p>Overview</p>
            {{ moviePageStore.movieDetails.overview }}
          </div>
          <p class="m_pc">{{ moviePageStore.movieDetails.production_countries }}</p>
          <p class="m_character">{{ state.character }}</p>
          <p class="m_director">{{ state.director }}</p>
          <p class="m_writer">{{ state.writer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  letter-spacing: 0.6px;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 0.6rem;
}
.shortcut_bar {
  width: inherit;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
.movie_box {
  width: 100%;
  height: 51rem;
  overflow: hidden;
  position: relative;
}
.movie_background {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: -1;
}
.movie_background img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(hsla(0, 0%, 20%, 0.7), hsla(0, 0%, 20%, 0.7));
}
.movie_info{
  width: inherit;
  display: flex;
  justify-content: center;
  padding: 2.8rem;
  gap: 3.6rem;
}
.poster_img{
  width: 30rem;
  border-radius: 1rem;
}
.movie_details{
  width: 100rem;
  /* background-color: red; */
  padding: 2rem 0;
  color: #fff;
  font-size: 1.6rem;
}
.m_title{
  font-size: 3.6rem;
}
.m_date{
  opacity: 0.8;
}
.m_genres{
  display: flex;
  gap: 0.6rem;
}
.m_tagline{
  opacity: 0.8;
}
.m_overview{
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
