<template>
  <q-card class='chat-item'>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img
            v-if='props.image'
            :src='props.image'>
          <div
            v-else
            class='img-filler'>
            {{ props.name[0] }}
          </div>
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class='chat-name'><span class='text'>{{ props.name }}</span></q-item-label>
        <q-item-label
          class='chat-last-message'
          caption> <span class='text'>{{ props.lastMessage }}}</span>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang='ts'>
interface Props {
  name: string,
  image: string,
  id: string,
  lastMessage: string
  sendAt: number
}

const props = defineProps<Props>();

const avatarFillerBgs = ['blue', 'purple', 'red', 'yellow'];

const getRandomColor = () => avatarFillerBgs[Math.floor(Math.random() * avatarFillerBgs.length)];
</script>

<style scoped lang='scss'>
.img-filler {
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: v-bind('getRandomColor');
}
.text{
  white-space: nowrap;
  text-overflow: ellipsis ;
}
</style>
