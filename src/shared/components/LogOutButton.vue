<template>
  <slot
    @click='onLogout'>
    <q-btn>Log out</q-btn>
  </slot>

</template>

<script setup lang='ts'>
import { useAppState } from 'src/stores/appState';

const appState = useAppState();

import { useRouter } from 'vue-router';

const router = useRouter();

const onLogout = async () => {
  const isSuccess = await appState.logOut();
  isSuccess && router.replace('/auth');
};

</script>

<style scoped>

</style>
