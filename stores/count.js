export const useCountStore = defineStore('count', () => {
    const count=ref(0)
    return {count }
  })
  