import { defineStore } from "pinia";

export const useSheepStore = defineStore({
  id: "sheep",
  state: () => ({
    step: 0,
  }),
  getters: {
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
