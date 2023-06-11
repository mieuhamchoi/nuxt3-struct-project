import { defineStore } from 'pinia'

export const ExampleStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      // `this` is the store instance
      this.counter++
    },
    async getData() {
      const axios = useNuxtApp().$axios;
      return await axios.Apis.ExampleServices.randomData().then((res) => {
        return res
      }).catch((er) => {
        //console.log("lỗi", er)
      })
    }
  },
})
