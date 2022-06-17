<template>
  <section class='chats-section'>
    <div class='chats-wrapper'>
      <template
        v-for='chat in chatsList'
        :key='chat.id'>
        <ChatItem></ChatItem>
      </template>
    </div>
  </section>

</template>

<script setup lang='ts'>
import ChatItem from '@/modules/chats/components/ChatItem.vue';
</script>

<style scoped>

</style>
