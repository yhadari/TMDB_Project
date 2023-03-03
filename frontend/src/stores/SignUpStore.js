import { defineStore } from "pinia";
import axios from "axios";

export const useSignupStore = defineStore("signupStore", {
  state: () => {},
  actions: {
    //POST
    signup(info) {
      axios
        .post("http://localhost:3000/api/signup", info)
        .then((res) => {
          console.log("res", res);
          console.log("status", res.status);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    },
  },
});
