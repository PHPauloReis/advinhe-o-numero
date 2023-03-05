<template>

  <div class="menu-container">
      
    <h2>Selecione um modo de jogo</h2>

    <div class="menu-options-container">
        
      <ButtonApp
        v-for="button in buttons"
        :key="button.value"
        @buttonClicked="changeGameMode"
        :text="button.text"
        :button-value="button.value"
        :active="button.active"
      />

    </div>

  </div>
    
</template>

<script setup>

import ButtonApp from './ButtonApp.vue';
import { defaultStore } from '../store/state';

const emit = defineEmits(['activatedGameMode'])

const buttons = [
  { text: 'Fácil', value: 'easy', active: false },
  { text: 'Normal', value: 'normal', active: false },
  { text: 'Difícil', value: 'hard', active: false }
]
const store = defaultStore()

const changeGameMode = (gameMode) => {
  store.setActiveGameMode(gameMode)
  emit('activatedGameMode', gameMode)
}

</script>

<style>

.menu-container {
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 3px solid #ECECEC;
}

.menu-container h2 {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 30px;
}

.menu-options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-options-container * {
  margin-right: 30px;
}

.menu-options-container :last-child {
  margin-right: 0;
}
    
</style>