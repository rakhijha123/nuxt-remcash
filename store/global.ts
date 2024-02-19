import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      sidebar: true,
    }
  },
})