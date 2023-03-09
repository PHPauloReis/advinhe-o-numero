<template>

  <div class="game-board-container">

    <h2>Em qual número eu estou pensando?</h2>

    <div
      class="move-counter"
      :class="{ 
        userWin: gameStatus === 'userWin',
        userLoose: gameStatus === 'userLoose' || isLastMove
      }"
    >
      <div v-if="gameStatus === 'userWin'">Parabéns, você venceu!</div>
      <div v-if="gameStatus === 'userLoose'">Que pena, você perdeu!</div>
      <div v-if="gameStatus === 'running'">Você ainda tem {{ movesAvailable }} jogadas!</div>
    </div>

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

import { onBeforeMount, computed, ref, watch } from 'vue';
import { defaultStore } from '../store/state';
import ButtonApp from './ButtonApp.vue';
import gameDefinitions from '../commons/gameDefinitions'

let numbers = []
let moves = ref(0)
let helps = ref(0)
let chosenRandomNumber = null
let gameStatus = 'running'

const store = defaultStore()

const emit = defineEmits(['askedForHelp'])

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

  chosenRandomNumber = chooseRandomNumber(1, 50)
  
})

const activeGameMode = computed(() => store.getActiveGameMode)

const movesAvailable = computed(() => {
  return gameDefinitions[props.gameMode].moves - moves.value
})

const isLastMove = computed(() => {
  const selectedOptions = store.getSelectedValues

  return gameDefinitions[props.gameMode].moves - selectedOptions.length === 1
});

watch(activeGameMode, () => {
  clearGameData()
  chosenRandomNumber = chooseRandomNumber(1, 50)
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

    if (chosenRandomNumber === value) {
      gameStatus = "userWin"
      return
    }

    if (selectedOptions.length === gameDefinitions[props.gameMode].moves) {
      gameStatus = "userLoose"
    }
  }
}

const canAskForHelp = () => {
  return helps.value < gameDefinitions[props.gameMode].help
}

const help = () => {
  if (!canAskForHelp()) {
    alert("Você não pode mais pedir ajuda!")
    return
  }

  emit('askedForHelp')
  helps.value++
}

const exit = () => {
  if (confirm('Você tem certeza que deseja desistir dessa partida?')) {
    store.clear()
    clearGameData()
  }
}

const clearGameData = () => {
  moves.value = 0
  helps.value = 0
}

const chooseRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

.userWin {
  color: #48A728;
  border-color: #48A728 !important;
  background-color: #39CC3355;
}

.userLoose {
  color: #FF4D54;
  border-color: #FF4D54 !important;
  background-color: #FF4D5455;
}

</style>