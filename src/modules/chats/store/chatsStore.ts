import { defineStore } from 'pinia';
import { TChatItem } from 'src/shared/types/chat/chatTypes';

type TState = {
  chatsList: TChatItem[]
}


const useChatsStore = defineStore('chats', {
  state: () => ({
    chatsList: []
  }) as TState,

  getters: {
    chatsList: (state) => state.chatsList
  },

  actions: {
    getChats(params){

    }
  }
})
