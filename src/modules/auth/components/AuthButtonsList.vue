<template>
  <transition-group
    tag='ul'
    :css='false'
    @before-enter='onBeforeEnter'
    @enter='onEnter'
    @leave='onLeave'>
    <li
      v-for='button in buttonsList'
      :key='button.id'
      class='button-item'>

      <ContinueWithButton
        :id='button.id'
        :icon='button.icon'
        :btn-text='button.btnText'
        :flag='button.flag'
        :disabled='isComponentLoading'
        @load-start='onLoadingStart'
        @load-complete='onLoadingComplete'
      >

      </ContinueWithButton>
    </li>
  </transition-group>
</template>


<script setup lang='ts'>
import { computed } from 'vue';
import gsap from 'gsap';

const componentId = 'buttonsList';
const isComponentLoading = computed(() => appState.isItemLoading(componentId))


import { buttonsList } from 'src/assets/continueWIthButtons';
import ContinueWithButton from './AuthButton.vue';

import { useAppState } from 'src/stores';

const appState = useAppState();


const onLoadingStart = () => {
  appState.addLoadingItem(componentId);
};
const onLoadingComplete = () => {
  appState.removeLoadingItem(componentId);
};

function onBeforeEnter(el: any) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el: any, done: any) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done
  });
}

function onLeave(el: any, done: any) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  });
}
</script>

<style scoped>
.button-item {
  margin-bottom: 16px;
}
</style>
