import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signupStore", {
  state: () => { },
  actions: {
    //POST
    signup(info) {
      axios({
        method: "POST",
        url: "http://localhost:3000/api/signup",
        data: info,
      })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
