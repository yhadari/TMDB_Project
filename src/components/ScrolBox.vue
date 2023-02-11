<script setup></script>
<template>
  <div class="Cards">
    <div class="scrollBox">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.Cards {
  height: 85%;
  width: 100%;
  display: flex;
  position: relative;
}
.scrollBox {
  display: flex;
  gap: 1.8rem;
  overflow-x: scroll;
  color: #000;
  padding: 0 2.6rem;
}
.scrollBox::-webkit-scrollbar {
  height: 1rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
}
</style>
