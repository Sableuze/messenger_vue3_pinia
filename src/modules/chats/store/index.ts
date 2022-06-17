import { defineStore } from 'pinia';
import { TChatItem } from 'src/shared/types/chat/chatTypes';
import { TFetchChatsParams } from '@/modules/chats/store/types';
import { useAppState } from '@/stores';

type TState = {
  chatsList: TChatItem[] | null
}


export const useChatsStore = defineStore('chats', {
  state: () => ({
    chatsList: []
  } as TState),

  getters: {
    getChatsList: (state) => state.chatsList,
  },

  actions: {
    updateChats(data: TChatItem[]) {
      this.chatsList = data
    },


  }
})
