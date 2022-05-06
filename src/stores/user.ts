import { defineStore } from 'pinia';
import { logOut, signIn } from 'src/services';
import { getItem, setItem, removeItem } from 'src/utils/localStorageHelper';
import {UserInfo} from '@firebase/auth-types';
import { AuthProvider } from 'src/types/services';


const LOCAL_STORAGE_TOKEN = 'token'
const LOCAL_STORAGE_EXPIRATION = 'expirationTime'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getItem(LOCAL_STORAGE_TOKEN) ,
    tokenExpirationTime: getItem(LOCAL_STORAGE_EXPIRATION) || 0,
    userData: {
      name: '',
      uid: ''
    }
  }),
  getters: {
    isLoggedIn: (state) => {
      return state.token && state.tokenExpirationTime > Date.now()
    },
    getUser: (state) => state.userData
  },
  actions: {
    async login(flag: AuthProvider) {
      const {token, user} = await signIn(flag)

      if (token && user) {
        this.token = token
        this.tokenExpirationTime = (user as any).stsTokenManager.expirationTime

        setItem(LOCAL_STORAGE_TOKEN, this.token)
        setItem(LOCAL_STORAGE_EXPIRATION, this.tokenExpirationTime)

        this.setUser(user)

      }
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
      }
    },

    setUser(user: UserInfo) {
      this.userData.name = user.displayName || 'N/A'
      this.userData.uid = user.uid
    }
  }
});
