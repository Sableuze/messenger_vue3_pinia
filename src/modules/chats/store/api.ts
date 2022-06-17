import { TFetchChatsParams } from '@/modules/chats/store/types';
import { db } from 'src/services/FirebaseApp';
import { ref, onValue } from 'firebase/database';
import { useChatsStore } from './index';
import { ApiPaths } from '@/shared/enums/ApiPaths';
const chatsStore = useChatsStore()

export const subscribeToChats = ({ ownerId, limit, orderBy }: TFetchChatsParams) => {
  const myChatsRef = ref(db, ApiPaths.chats + ownerId);
  onValue(myChatsRef, (snapshot) => {
    const data = snapshot.val();

    chatsStore.updateChats(data);
  });
}

