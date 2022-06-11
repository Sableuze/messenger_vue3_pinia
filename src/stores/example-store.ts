import { defineStore } from 'pinia';

const ab = () => {
  const asd = '1221'
    .split('');
};
export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) =>
      state
        .counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});
