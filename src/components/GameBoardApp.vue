<template>

  <div class="game-board-container">

    <h2>Em qual número eu estou pensando?</h2>

    <div class="move-counter">Você ainda tem 8 jogadas!</div>

    <div class="number-container">

      <ButtonApp
        @buttonClicked="chooseOption"
        v-for="number of numbers"
        :key="number"
        :text="zeroFill(number)"
        :button-value="number"
        :style="'width: 65px; padding: 0; margin-bottom: 10px'"
        :active="store.getSelectedValues.includes(number)"
      />

    </div>

    <div class="game-board-menu-container">

      <ButtonApp
        @buttonClicked="chooseOption"
        :text="'Pedir ajuda'"
        :button-value="'help'"
      />

      <ButtonApp
        @buttonClicked="chooseOption"
        :text="'Desistir'"
        :button-value="'to_give_up'"
      />

    </div>

  </div>

</template>

<script setup>

import { defaultStore } from '../store/state';
import ButtonApp from './ButtonApp.vue';

let numbers = []

const store = defaultStore() 

for (let i = 1; i <= 50; i++) {
    numbers.push(i)
}

const zeroFill = (value) => value.toString().padStart(2, '0')

const chooseOption = (value) => {
  const selectedOptions = store.getSelectedValues

  if (selectedOptions.length >= 6) {
    alert('asdfasdf')
    return
  }

  if (!selectedOptions.includes(value)) {
    store.addSelectedValue(value)
  }
}

</script>

<style scoped>

h2 {
  font-size: 40px;
  font-weight: bold;
  color: #D84E41;
  margin-top: 30px;
}

.game-board-container .move-counter {
  width: 356px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #C4C4C4;
  border-radius: 10px;
  margin: 30px 0 50px 0;
  font-size: 25px;
  font-weight: bold;
}

.game-board-container .number-container {
  display: grid;
  grid-template-columns:repeat(10, 1fr);
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #ECECEC;
}

.game-board-menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}

.game-board-menu-container * {
  margin: 0 15px;
}

</style>