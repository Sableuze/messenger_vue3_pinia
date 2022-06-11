<template>
  <section class='chats-section'>
    <div class='chats-wrapper'>
      <template v-for='chat in chatsList'>
        <ChatItem :key='chat.id'></ChatItem>
      </template>
    </div>
  </section>

</template>

<script setup lang="ts">
import ChatItem from '@/modules/chats/components/ChatItem.vue'
</script>

<style scoped>

</style>
