<template>
  
  <HeaderApp />
  
  <div class="container">

    <MenuApp @activatedGameMode="showGameBoard" />

    <GameBoardApp @askedForHelp="showHelpModal = true" v-if="hasGameModeSelected" :game-mode="selectedGameMode" />

    <ModalApp @closeModal="showHelpModal = false" :showing="showHelpModal" />

  </div>
  

</template>

<script setup>

  import HeaderApp from './components/HeaderApp.vue';
  import MenuApp from './components/MenuApp.vue';
  import GameBoardApp from './components/GameBoardApp.vue';
  import ModalApp from  './components/ModalApp.vue'
  import { ref, computed } from 'vue';
  import { defaultStore } from './store/state';

  const store = defaultStore()

  let selectedGameMode = ref(null)
  let showHelpModal = ref(false)

  const showGameBoard = (gameMode) => {
    selectedGameMode.value = gameMode
  }

  const hasGameModeSelected = computed(() => {
    return !!selectedGameMode.value && !!store.getActiveGameMode
  })

</script>

<style scoped>

.container {
   width: 768px;
   margin: 0 auto;
}

</style>
