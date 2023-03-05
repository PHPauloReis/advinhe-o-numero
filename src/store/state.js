import { defineStore } from 'pinia'

export const defaultStore = defineStore('store', {
    
    state: () => ({ 

      count: 0, 
      name: 'Eduardo',
      activeGameMode: null,
      selectedValues: []

    }),
    
    getters: {
      
      doubleCount: (state) => state.count * 2,
      getActiveGameMode: (state) => state.activeGameMode,
      getSelectedValues: (state) => state.selectedValues

    },
    
    actions: {

      increment() {
        this.count++
      },

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
  