<template>
  
  <HeaderApp />
  
  <div class="container">

    <MenuApp />

    <GameBoardApp />

  </div>
  

</template>

<script setup>

  import HeaderApp from './components/HeaderApp.vue';
  import MenuApp from './components/MenuApp.vue';
  import GameBoardApp from './components/GameBoardApp.vue';

</script>

<style scoped>

.container {
   width: 768px;
   margin: 0 auto;
}

</style>
