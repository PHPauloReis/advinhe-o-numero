import { defineStore } from 'pinia'

export const defaultStore = defineStore('store', {
    
    state: () => ({
      
      activeGameMode: null,
      selectedValues: []

    }),
    
    getters: {
      
      doubleCount: (state) => state.count * 2,
      getActiveGameMode: (state) => state.activeGameMode,
      getSelectedValues: (state) => state.selectedValues

    },
    
    actions: {

      setActiveGameMode(gameMode) {
        this.activeGameMode = gameMode
      },

      addSelectedValue(selectedValue) {
        this.selectedValues.push(selectedValue)
      },

      clear() {
        this.activeGameMode = null,
        this.selectedValues = []
      }

    },
    
  })
  