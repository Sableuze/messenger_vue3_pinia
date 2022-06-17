import { defineStore } from 'pinia';
import { logOut, signIn } from 'src/services';
import { getItem, setItem, removeItem } from 'src/utils/localStorageHelper';
import {UserInfo} from '@firebase/auth-types';
import { AuthProvider } from 'src/types/services';
import { checkForItemInDb } from '@/services/realtimeStorage/Helpers';

import { ApiPaths } from '@/shared/enums/ApiPaths';
import { addUserToDbBase } from '@/services/realtimeStorage/Users';
import { subscribeToChats } from '@/modules/chats/store/api';
const LOCAL_STORAGE_TOKEN = 'token'
const LOCAL_STORAGE_EXPIRATION = 'expirationTime'

export type AppState = {
  loadingCount: number,
  loadingItems: string[]
  token: string,
  tokenExpirationTime: number,
  userData: {
    name: string,
    uid: string
  }
}

export const useAppState = defineStore('appState', {
  state: () => ({
    loadingCount: 0,
    loadingItems: [],
    token: getItem(LOCAL_STORAGE_TOKEN) as string,
    tokenExpirationTime: getItem(LOCAL_STORAGE_EXPIRATION) || 0,
    userData: {
      name: '',
      uid: ''
    }
  } as AppState),

  getters: {
    isAppLoading: (state) => state.loadingCount > 0,
    isItemLoading: (state) => {
      return (item: string) => state.loadingItems.includes(item)
    },
    isLoggedIn: (state) => {
      return state.token && state.tokenExpirationTime > Date.now()
    },
    getUser: (state) => state.userData

  },
  actions: {
    incrementLoading() {
      this.loadingCount += 1;
    },
    decrementLoading() {
      this.loadingCount -= 1;
    },
    resetLoading() {
      this.loadingCount = 0
    },
    addLoadingItem(item: string) {
      this.loadingItems.includes(item) === false && this.loadingItems.push(item)
    },
    removeLoadingItem(item: string) {
      this.loadingItems = this.loadingItems.filter(i => i !== item)
    },
    async login(flag: AuthProvider) {
      const {token, user} = await signIn(flag)
      if (token && user) {
        this.token = token
        this.tokenExpirationTime = (user as any).stsTokenManager.expirationTime

        setItem(LOCAL_STORAGE_TOKEN, this.token)
        setItem(LOCAL_STORAGE_EXPIRATION, this.tokenExpirationTime)

        if (!await checkForItemInDb({ id: user.uid, path: ApiPaths.users })){
          const { displayName, uid, email, photoURL } = user
          addUserToDbBase({ displayName, uid, email, photoURL })
        }

        this.setUser(user)

        return true
      }
      else return false
    },

    async logOut(){
      const success = await logOut()
      if (success) {
        this.token = ''
        this.tokenExpirationTime = 0


        removeItem(LOCAL_STORAGE_TOKEN)
        removeItem(LOCAL_STORAGE_EXPIRATION)

        this.userData.name = ''
        this.userData.uid = ''
        return true
      }
    },

    setUser(user: UserInfo) {
      this.userData.name = user.displayName || 'N/A'
      this.userData.uid = user.uid
    },

  },
});
