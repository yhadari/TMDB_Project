<script setup>
import { ref, onMounted } from "vue";
const scroll = ref(0);

//props
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

//emits
const emit = defineEmits(["scroll"]);

//methods
const handleScroll = (event) => {
  scroll.value = event.target.scrollLeft;
  emit("scroll", scroll.value);
};

// ...
const scrollContainer = ref(null);
const scrollDuration = 40000; // Duration of the scrolling animation in milliseconds
const startTime = performance.now() + 1500; // Time when the animation starts
let stopScroll = ref(false);

const performScrollAnimation = () => {
  const currentTime = performance.now();
  const elapsedTime = currentTime - startTime;

  if (scrollContainer.value) {
    const targetScrollPosition =
      scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;

    // Calculate the new scroll position based on elapsed time
    const newScrollPosition = Math.min(
      targetScrollPosition,
      (elapsedTime / scrollDuration) * targetScrollPosition
    );

    scrollContainer.value.scrollLeft = newScrollPosition;

    if (elapsedTime < scrollDuration) {
      // Continue the animation
      requestAnimationFrame(performScrollAnimation);
    }
  }
};

const stop = () => {
  stopScroll.value = true;
};
const sc = () => {
  stopScroll.value = false;
  performScrollAnimation();
};

onMounted(() => {
  setTimeout(() => {
    performScrollAnimation();
  }, 1500);
});
</script>

<template>
  <div class="Cards">
    <div
      @mouseover="stop()"
      @mouseleave="sc()"
      :ref="`${props.type === 'vedio' && !stopScroll && 'scrollContainer'}`"
      @scroll="handleScroll"
      :class="`scrollBox ${props.type} ${
        scroll <= 100 && props.type != 'vedio' && 'container'
      }`"
    >
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
  z-index: 10;
}
.container::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 6rem;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%
  );
  z-index: 10;
  animation-name: animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes animation {
  0% {
    right: -6rem;
    top: 0;
  }
  100% {
    right: 0;
    top: 0;
  }
}
.scrollBox {
  display: flex;
  gap: 1.8rem;
  overflow-x: scroll;
  overflow-y: hidden;
  color: #000;
  padding: 0 2rem;
}
.scrollBox::-webkit-scrollbar {
  height: 0.8rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 0.5rem;
}
</style>
