<script setup>
import { reactive } from "vue";
import { useSignupStore } from "@/stores/signupStore";

const signupStore = useSignupStore();
//data
const state = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
});
</script>
<template>
  <div class="container">
    <div class="panel">
      <div class="title">
        <p>Benefits of being a member test</p>
      </div>
      <ul class="list">
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Find something to watch on your subscribed streaming services</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Log the movies and TV shows you have watched</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>
            Keep track of your favourite movies and TV shows and get
            recommendations from them
          </li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Build and maintain a personal watchlist</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Build custom mixed lists (movies and TV)</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Take part in movie and TV discussions</li>
        </div>
        <div class="listBox">
          <span>&#x2713;</span>
          <li>Contribute to, and improve the information in our database</li>
        </div>
      </ul>
    </div>
    <div class="signupForm">
      <div>
        <h2>Sign up for an account</h2>
        <p>
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to to continue.
        </p>
      </div>
      <form action="">
        <div class="box">
          <label for="">Username</label>
          <InputText type="text" v-model="state.username" />
        </div>
        <div class="box">
          <label for="">Password (4 characters minimum)</label>
          <InputText type="password" v-model="state.password" />
        </div>
        <div class="box">
          <label for="">Password Confirm</label>
          <InputText type="password" v-model="state.confirmPassword" />
        </div>
        <div class="box">
          <label for="">Email</label>
          <InputText type="email" v-model="state.email" />
        </div>
      </form>
      <p>
        By clicking the "Sign up" button below, I certify that I have read and
        agree to the TMDB terms of use and privacy policy.
      </p>
      <div class="btn">
        <button class="sign" @click="signupStore.signup(state)">Sign Up</button>
        <button @click="$router.push('/')" class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  gap: 3.6rem;
  width: 100%;
  max-width: 130rem;
  height: calc(100vh - var(--footerHeight) - var(--navHeight));
  margin: 0 auto;
  padding: 2.4rem;
  letter-spacing: 0.6px;
}
.panel {
  display: flex;
  flex-direction: column;
  height: 50%;
  min-height: 62rem;
  width: 27.3rem;
  min-width: 27.3rem;
  border-radius: var(--imageBorderRadius);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
}
.panel .title {
  width: 100%;
  height: 15%;
  padding: 2rem;
  color: #fff;
  font-size: 2.2rem;
  background-color: rgba(var(--tmdbLightBlue));
}
.list {
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;
  font-size: 1.6rem;
  list-style: none;
}
.listBox {
  display: flex;
  gap: 0.6rem;
  color: #333;
}
.listBox span {
  font-size: 2rem;
  color: #000;
}
.signupForm {
  width: 102.7rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  font-size: 1.5rem;
}
.signupForm h2 {
  margin-bottom: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #222;
}
form .box {
  display: flex;
  flex-direction: column;
}
.box input {
  height: 4rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: #444;
}

.btn button {
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: var(--imageBorderRadius);
  padding: 0.8rem 1.6rem;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
}
.sign {
  color: #fff;
  background-color: rgba(var(--tmdbLightBlue));
}
.cancel {
  color: rgba(var(--tmdbLightBlue));
  background-color: transparent;
}
.sign:hover {
  background-color: black;
}
</style>
