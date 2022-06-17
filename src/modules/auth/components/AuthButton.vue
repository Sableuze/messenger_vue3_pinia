<template>
  <q-btn
    class='auth-button'
    unelevated
    flat
    :disable='props.disabled'
    :loading='isComponentLoading'
    @click='onClick'>

    <img
      class='icon'
      :src='props.icon'
      alt='icon'
    />
    <p class='button-text'>{{ props.btnText }}</p>
  </q-btn>
</template>
<script setup lang='ts'>

import { useAppState } from 'src/stores';
const appState = useAppState();

import { useRouter } from 'vue-router';

const router = useRouter();


import { AuthProvider } from 'src/types/services';
import { computed } from 'vue';

interface Props {
  icon: any,
  flag: AuthProvider,
  btnText: string,
  id: string,
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  btnText: 'Continue With Google',
  flag: 'google'
});
const emit = defineEmits<{
  (e: 'loadStart'): void,
  (e: 'loadComplete'): void
}>();

const componentName = `auth-${props.flag}`;
const isComponentLoading = computed(() => appState.isItemLoading(componentName));



const onClick = async () => {

  onLoadingStart();

  const result = await appState.login(props.flag);

  onLoadingComplete();
  result && router.replace('/');
};

const onLoadingStart = () => {
  appState.addLoadingItem(componentName);
  emit('loadStart');
};
const onLoadingComplete = () => {
  appState.removeLoadingItem(componentName);
  emit('loadComplete');
};
</script>


<style scoped>
.auth-button {
  display: flex;
  background: white;
  color: #444;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}


.icon {
  background: v-bind('props.icon') no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 48px;
  height: 48px;
}

.button-text {
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: 'Roboto', sans-serif;
}
</style>
