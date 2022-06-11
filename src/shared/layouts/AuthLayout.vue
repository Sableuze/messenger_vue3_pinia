<template>
  <q-layout class='auth auth-cnt'>
    <section class='section-greetings'>
      <h1 class='greetings-title'>Hello</h1>
      <transition
        name='switch'
        mode='out-in'>
        <div
          v-if='isAuthOptionsHidden'
          class='stage-item stage-one'>
          <q-btn
            size='lg'
            @click='isAuthOptionsHidden = false'>Start using the app
          </q-btn>
        </div>
        <template v-else>
          <AuthButtonsList></AuthButtonsList>
        </template>
      </transition>
    </section>
  </q-layout>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import AuthButtonsList from '@/modules/auth/components/AuthButtonsList.vue';

const isAuthOptionsHidden = ref<boolean>(true)
</script>

<style scoped lang='scss'>
.auth-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
}

.section-greetings {
  font-weight: 600;
  font-size: 5em;

  height: 400px;

  display: flex;
  flex-direction: column;

  .greetings-title {
    margin-bottom: 16px;
  }
}

.switch-enter-active {
  transition: all .3s ease-out;
}

.switch-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.switch-enter-active {
  transition: all .5s ease;
}

.switch-leave-active {
  transition: all .5s ease;

}
</style>
