import { defineStore } from "pinia";
import axios from "axios";

export const useHomePageStore = defineStore("backgroundStore", {
  state: () => {
    return {
      background: "https://api.lorem.space/image/movie?w=2000&h=980",
      trending: [],
      bandesAnnonces: [],
    };
  },
  actions: {
    fetchTrendingMovies(media_type, time_window) {
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
    fetchTrailer(type) {
      axios
        .get(
          "https://www.themoviedb.org/remote/panel?panel=trailer_scroller&group=streaming"
        )
        .then((res) => {
          console.log(type);
          console.log("res: ", res);
          this.bandesAnnonces = res;
        });
    },
  },
});
