import { defineStore } from "pinia";
import axios from "axios";

export const useBackgroundStore = defineStore("backgroundStore", {
  state: () => {
    return {
      background1: "https://api.lorem.space/image/movie?w=2000&h=700",
      background2: "https://api.lorem.space/image/movie?w=2000&h=720",
    };
  },
  actions: {},
});
