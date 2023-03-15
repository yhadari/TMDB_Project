<script setup>
import router from '@/router/index'
import LinkItem from '@/components/LinkItem.vue'
import { useMoviePageStore } from '@/stores/MoviePageStore'

const moviePageStore = useMoviePageStore()
const backgroundImage = import.meta.env.VITE_TMDB_MOVIE_PATH

// Methods
const getId = () => {
  const param = router.currentRoute.value.params.param
  const id = param.substring(0, param.indexOf('-'))
  return id
}

// Fetch movie details
await moviePageStore.fetchMovieDetails(getId())
console.log(moviePageStore.movieDetails)
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
    <div class="movie_info">
      <div class="movie_background">
        <img
          :src="`${backgroundImage}/${moviePageStore.movieDetails.backdrop_path}`"
          alt="movie_background"
        />
        <div class="gradient-overlay"></div>
      </div>
      <div class="movie_backdrop">
        <img
          :src="`${backgroundImage}/${moviePageStore.movieDetails.poster_path}`"
          alt="movie_backdrop"
        />
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
.movie_info {
  width: 100%;
  height: 58rem;
  overflow: hidden;
  position: relative;
}
.movie_background {
  position: absolute;
  width: inherit;
  height: inherit;
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
  background: linear-gradient(to right, hsl(0, 0%, 87%), hsl(0, 0%, 67%, 0.4) 100%);
}
.movie_backdrop {
  width: 38rem;
  margin: 0 auto;
  margin-top: 2.6rem;
  position: relative;
  padding: 0 4rem;
}
.movie_backdrop::after {
  content: '';
  height: 6.8rem;
  width: calc(100% - 8rem);
  background-color: rgba(var(--tmdbDarkBlue, 1));
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(90%);
  border-radius: 0 0 1rem 1rem;
}
.movie_backdrop img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem 1rem 0 0;
}
</style>
