import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("loginStore", {
  state: () => {},
  actions: {
    //POST
    login(info) {
      console.log("info: ", info);
      axios
        .post("http://localhost:3000/api/login", info)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
