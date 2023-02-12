import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("backgroundStore", {
  state: () => {
    return {
      background: "https://api.lorem.space/image/movie?w=2000&h=980",
      trending: [],
      popular: [],
      topRated: [],
    };
  },
  actions: {
    fetchTrending(media_type, time_window) {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }`
        )
        .then((res) => {
          this.trending = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
    fetchPopular(type) {
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        )
        .then((res) => {
          this.popular = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
    fetchTopRated(type) {
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/top_rated?api_key=${
            import.meta.env.VITE_TMDB_KEY_VALUE
          }&language=en-US&page=1`
        )
        .then((res) => {
          this.topRated = res.data.results;
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
