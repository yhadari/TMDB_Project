<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="container">
    <div class="panel">
      <div class="title">
        <p>Benefits of being a member</p>
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
      <h2>Sign up for an account</h2>
      <p>
        Signing up for an account is free and easy. Fill out the form below to
        get started. JavaScript is required to to continue.
      </p>
      <form action="">
        <div>
          <label for=""></label>
          <input type="text" />
        </div>
        <div>
          <label for=""></label>
          <input type="password" />
        </div>
        <div>
          <label for=""></label>
          <input type="password" />
        </div>
        <div>
          <label for=""></label>
          <input type="email" />
        </div>
      </form>
      <p>
        By clicking the "Sign up" button below, I certify that I have read and
        agree to the TMDB terms of use and privacy policy.
      </p>
      <button>Sign Up</button>
      <button>Cancel</button>
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
  padding-top: 2.4rem;
  letter-spacing: 0.6px;
}
.panel {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 21%;
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
  height: 50%;
  width: 79%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  font-size: 1.6rem;
}
</style>
