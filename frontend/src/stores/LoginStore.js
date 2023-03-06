import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("loginStore", {
  state: () => { },
  actions: {
    //POST
    login(info) {
      axios({
        method: "POST",
        url: "http://localhost:3000/api/login",
        data: info,
        withCredentials: true,
      })
        .then((res) => {
          console.log("res", res);
          console.log('yassine');
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
