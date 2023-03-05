<template>

  <div class="game-board-container">

    <h2>Em qual número eu estou pensando?</h2>

    <div class="move-counter">Você ainda tem {{ movesAvailable }} jogadas!</div>

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
        @buttonClicked="help"
        :text="'Pedir ajuda'"
        :button-value="'help'"
        color-mode="success"
        icon="help"
      />

      <ButtonApp
        @buttonClicked="exit"
        :text="'Desistir'"
        :button-value="'to_give_up'"
        color-mode="danger"
        icon="exit"
      />

    </div>

  </div>

</template>

<script setup>

import { onBeforeMount, computed, ref } from 'vue';
import { defaultStore } from '../store/state';
import ButtonApp from './ButtonApp.vue';
import gameDefinitions from '../commons/gameDefinitions'

let numbers = []
let moves = ref(0)
let helps = ref(0)

const store = defaultStore()

const props = defineProps({
  gameMode: {
    type: String,
    required: false,
    default: {}
  }
})

onBeforeMount(() => {

  for (let i = 1; i <= 50; i++) {
    numbers.push(i)
  }
  
})

const movesAvailable = computed(() => {
  return gameDefinitions[props.gameMode].moves - moves.value
})

const zeroFill = (value) => value.toString().padStart(2, '0')

const chooseOption = (value) => {
  const selectedOptions = store.getSelectedValues

  if (selectedOptions.length >= gameDefinitions[props.gameMode].moves) {
    alert('Você não pode mais selecionar nenhum número!')
    return
  }

  if (!selectedOptions.includes(value)) {
    store.addSelectedValue(value)
    moves.value++
  }
}

const canAskForHelp = () => {
  return helps < gameDefinitions[props.gameMode].help
}

const help = () => {
  if (!canAskForHelp()) {
    alert("Você não pode mais pedir ajuda!")
    return
  }

  helps++
  alert("Você pediu ajuda!")
}

const exit = () => {
  if (confirm('Você tem certeza que deseja desistir dessa partida?')) {
    store.clear()
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