import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("backgroundStore", {
  state: () => {
    return {
      background1: "https://api.lorem.space/image/movie?w=2000&h=700",
      background2: "https://api.lorem.space/image/movie?w=2000&h=720",
      upComingMovies: [],
    };
  },
  actions: {
    fetchMovies(media_type, time_window) {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }`
        )
        .then((res) => {
          this.upComingMovies = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
