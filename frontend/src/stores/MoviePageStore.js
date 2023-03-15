import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviePageStore = defineStore('moviePageStore', {
  state: () => {
    return {
      movieDetails: {},
      movieCast: {},
    };
  },
  actions: {
    // GET
    async fetchMovieCast() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_TMDB_MOVIE_CAST_PATH}`
        )
        this.movieCast = response.data.results;
      } catch (error) {
        console.log('error: ', error)
        throw error
      }
    },
    // async fetchMovieDetails(movieId) {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_KEY_VALUE}&language=en-US`
    //     )
    //     this.movieDetails = response.data;
    //   } catch (error) {
    //     console.log('error: ', error)
    //     throw error
    //   }
    // }
  }
})
