<template>

  <div
    @click="$emit('buttonClicked', buttonValue)"
    class="button-container"
    :class="{ 
      active: active || isActive,
      success: colorMode === 'success',
      danger: colorMode === 'danger'
    }"
    :style="style"
  >
    <div class="icon" v-if="!!icon !== false">
      <img :src="'/src/assets/icons/' + icon + '.svg'">
    </div>
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
  },
  colorMode: {
    type: String,
    required: false,
    default: "default"
  },
  icon: {
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

.icon {
  margin-top: 3px;
  margin-right: 10px;
}

.success {
  background-color: #39CC33;
  border-color: #39CC33;
  border-bottom-color: #48A728;
  color: #FFF;
  font-weight: bold;
}

.success:hover {
  background-color: #14BE0D;
  border-color: #14BE0D;
  border-bottom-color: #48A728;
}

.success:active {
  background-color: #14BE0D !important;
}

.danger {
  background-color: #FF4D54;
  border-color: #FF4D54;
  border-bottom-color: #E52D34;
  color: #FFF;
  font-weight: bold;
}

.danger:hover {
  background-color: #E52D34;
  border-color: #E52D34;
  border-bottom-color: #D6151D;
}

.danger:active {
  background-color: #E52D34 !important;
}
  
</style>