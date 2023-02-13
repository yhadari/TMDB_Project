<script setup></script>

<template>
  <section>
    <header>
      <h1>Leaderboard</h1>
      <div class="edits">
        <div class="all">
          <span></span>
          <p>All Time Edits</p>
        </div>
        <div class="week">
          <span></span>
          <p>Edits This Week</p>
        </div>
      </div>
    </header>
  </section>
</template>
<style scoped>
section {
  width: 130rem;
  height: 50rem;
  padding: 3rem;
  letter-spacing: 0.6px;
}
header {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2.8rem;
}
header h1 {
  font-weight: 600;
}
.edits span {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}
.all,
.week {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #222;
}

.all span {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLighterGreen, 1)),
    rgba(var(--tmdbLightGreen, 1))
  );
}
.week span {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLogoOrange, 1)),
    rgba(var(--tmdbLogoRed, 1))
  );
}
</style>
