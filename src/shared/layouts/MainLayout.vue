<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn @click='onLogout'>Log out</q-btn>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAppState } from 'src/stores/appState';
const appState = useAppState()

import { useRouter } from 'vue-router';
const router = useRouter()

const onLogout = async () => {
  const isSuccess = await appState.logOut()
  isSuccess && router.replace('/auth')

}
</script>
