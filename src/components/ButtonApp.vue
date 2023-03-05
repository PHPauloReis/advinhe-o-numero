<template>

  <div
    @click="$emit('buttonClicked', buttonValue)"
    class="button-container"
    :class="{ active: active || isActive }"
    :style="style"
  >
    {{ text }}
  </div>
  
</template>

<script setup>

import { computed } from '@vue/reactivity';
import { defaultStore } from '../store/state';

const store = defaultStore()

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ""
  },
  buttonValue: {
    type: String,
    required: false,
    default: ""
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  },
  width: {
    type: String,
    required: false,
    default: ""
  }
})

const isActive = computed(() => {
  return props.buttonValue === store.getActiveGameMode
})

</script>

<style scoped>

.button-container {
  width: fit-content;
  padding: 0 20px;
  height: 55px;
  border: 2px solid #BFBFBF;
  border-bottom-width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
}

.button-container:hover {
  background-color: #EFEFEF;
}

.button-container:active {
  margin-top: 2px;
  height: 53px;
  border-bottom-width: 2px;
}

.button-container.active {
  background-color: #DBF4FE;
  border-color: #78D9FC;
  color: #39B4E0;
}

.active:hover {
  background-color: #B5E8FC;
}
  
</style>