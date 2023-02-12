import { ref } from "vue";

export const trendingToggle = ref([
  {
    name: "Today",
    type: {
      media_type: "all",
      time_window: "day",
    },
    clicked: true,
  },
  {
    name: "This Week",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
]);

export const popularToggle = ref([
  {
    name: "Streaming",
    type: {
      media_type: "all",
      time_window: "day",
    },
    clicked: true,
  },
  {
    name: "On TV",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
  {
    name: "For Rent",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
  {
    name: "In Theaters",
    type: {
      media_type: "all",
      time_window: "week",
    },
    clicked: false,
  },
]);

export const vedioToggle = ref([
  {
    name: "Streaming",
    clicked: true,
  },
  {
    name: "On TV",
    clicked: false,
  },
  {
    name: "For Rent",
    clicked: false,
  },
  {
    name: "In Theaters",
    clicked: false,
  },
]);
