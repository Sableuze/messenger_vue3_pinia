<template>
  <q-page class="row items-center justify-evenly">
    <div class='flex column'><h1>{{ title }}</h1>
      <q-input v-model='title'></q-input>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const title = ref<string>('It is me')
    return {title}
  }
});
</script>
