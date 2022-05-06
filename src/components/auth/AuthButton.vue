<template>
  <q-btn class='auth-button' unelevated flat @click='onClick' >

    <img class='icon' :src='props.icon' alt='icon'/>
    <p class='button-text'>{{ props.btnText }}</p>

  </q-btn>
</template>
<script setup lang='ts'>
import { useAuthStore } from 'src/stores'
const store = useAuthStore()

import { AuthProvider } from 'src/types/services';
interface Props {
  icon: any,
  flag: AuthProvider,
  btnText: string,
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  btnText: 'Continue With Google',
  flag: 'google'
});

const onClick = () => {
  store.login(props.flag)
}
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
