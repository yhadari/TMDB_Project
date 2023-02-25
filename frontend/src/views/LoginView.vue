<script setup>
import { reactive } from "vue";
import { useLoginStore } from "@/stores/LoginStore";

const state = reactive({
  username: "",
  password: "",
});
const loginStore = useLoginStore();
</script>
<template>
  <div class="container">
    <div>
      <h2>Login to your account</h2>
      <p>
        In order to use the editing and rating capabilities of TMDB, as well as
        get personal recommendations you will need to login to your account. If
        you do not have an account, registering for an account is free and
        simple.
        <router-link class="link" to="/signup">Click here</router-link> to get
        started.
      </p>
    </div>
    <p>
      If you signed up but didn't get your verification email,
      <router-link class="link" to="/">click here</router-link> to have it
      resent.
    </p>
    <form action="">
      <div class="box">
        <label for="">Username</label>
        <InputText type="text" v-model="state.username" />
      </div>
      <div class="box">
        <label for="">Password</label>
        <InputText type="password" v-model="state.password" />
      </div>
    </form>
    <div class="btn">
      <button class="login" @click="loginStore.login(state)">Login</button>
      <button @click="$router.push('/')" class="reset">Reset password</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 100%;
  max-width: 130rem;
  height: calc(100vh - var(--footerHeight) - var(--navHeight));
  margin: 0 auto;
  padding: 2.8rem;
  letter-spacing: 0.6px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
}
h2 {
  margin-bottom: 0.8rem;
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
.login {
  color: #fff;
  background-color: rgba(var(--tmdbLightBlue));
}
.reset {
  color: rgba(var(--tmdbLightBlue));
  background-color: transparent;
}
.login:hover {
  background-color: black;
}
.link {
  text-decoration: none;
  color: rgba(var(--tmdbLightBlue));
}
</style>
