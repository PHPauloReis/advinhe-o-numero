<template>
  
  <HeaderApp />
  
  <div class="container">

    <MenuApp @activatedGameMode="showGameBoard" />

    <GameBoardApp v-if="selectedGameMode" :game-mode="selectedGameMode" />

  </div>
  

</template>

<script setup>

  import HeaderApp from './components/HeaderApp.vue';
  import MenuApp from './components/MenuApp.vue';
  import GameBoardApp from './components/GameBoardApp.vue';
  import { ref } from 'vue';

  let selectedGameMode = ref(null)

  const showGameBoard = (gameMode) => {
    selectedGameMode.value = gameMode
  }

</script>

<style scoped>

.container {
   width: 768px;
   margin: 0 auto;
}

</style>
