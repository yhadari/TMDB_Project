import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signupStore", {
  state: () => {},
  actions: {
    //POST
    signup(info) {
      console.log("info: ", info);
      axios
        .post("http://localhost:3000/api/signup", info)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});