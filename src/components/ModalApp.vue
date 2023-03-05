<template>
  <div v-if="showingModal" class="overlay">
    <div class="modal-container">
      <div class="header">
        Dica
        <img @click="closeModal" src="../assets/icons/close.svg" alt="">
      </div>
      <div class="content">
        <ul>
          <li>O número que eu pensei não é maior que 12</li>
          <li>O número que eu pensei não é maior que 38</li>
          <li>O número que eu pensei não é maior que 3</li>
        </ul>
      </div>
      <div class="footer">
        <ButtonApp
          @buttonClicked="closeModal"
          text="Ok, entendido!"
          color-mode="success"
          icon="check"
          button-value="close-modal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import ButtonApp from './ButtonApp.vue';
import { computed } from 'vue';

const emit = defineEmits(['closeModal'])

const props = defineProps({
  showing: {
    type: Boolean,
    required: false,
    default: false
  }
})

const showingModal = computed(() => {
  return props.showing
})

const closeModal = () => {
  emit('closeModal')
}

</script>

<style>

.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.overlay::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: -1;
  opacity: 0.5;
}

.modal-container {
  width: 796px;
  min-height: 100px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}

.modal-container .header {
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 15px 0;
  border-bottom: 2px solid #ECECEC;
}

.modal-container .header img {
  cursor: pointer;
}

.modal-container .content {
  padding: 25px 0;
  font-size: 21px;
}

.modal-container .content ul {
  margin-left: 35px;
}

.modal-container .footer {
  display: flex;
  justify-content: right;
}

</style>