<template>
  <div class="container">
    <h1 class="title">Join Today</h1>
    <div class="joinBox">
      <div class="leftPart">
        <p>
          Get access to maintain your own custom personal lists, track what
          you've seen and search and filter for what to watch next—regardless if
          it's in theatres, on TV or available on popular streaming services
          like Netflix, Amazon Prime Video, FlixOlé, Zee5, and MUBI.
        </p>
        <button class="JoinBtn">Sign Up</button>
      </div>
      <div class="rightPart">
        <ul>
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li>Log the movies and TV shows you've seen</li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  width: inherit;
  height: 28rem;
  background-image: url(../assets/joinBackground.jpg);
  background-size: cover;
  background-position: 0 50%;
  padding: 3.2rem;
  color: #fff;
  letter-spacing: 0.6px;
}
.title {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.joinBox {
  display: flex;
  gap: 4rem;
}
.JoinBtn {
  padding: 1rem;
  text-decoration: none;
  border: none;
  width: 10rem;
}
.leftPart {
  font-size: 1.6rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.rightPart {
  width: 40%;
  font-size: 1.4rem;
}
</style>
