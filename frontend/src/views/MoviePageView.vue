<script setup>
import router from '@/router/index'
import LinkItem from '@/components/LinkItem.vue'
import { useMoviePageStore } from '@/stores/MoviePageStore'

const moviePageStore = useMoviePageStore()

// Methods
const getId = () => {
  const param = router.currentRoute.value.params.param
  const id = param.substring(0, param.indexOf('-'))
  return id
}

// Fetch movie details
moviePageStore.fetchMovieDetails(getId())
console.log('movie: ', moviePageStore.movieDetails);
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
    <div class="movie_info"></div>
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
  height: 58rem;
}
</style>
