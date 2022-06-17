import {  ref, child, get } from 'firebase/database';
import { db } from 'src/services/FirebaseApp';
const dbRef = ref(db)
export const checkForItemInDb = async ({ id, path }: {id: string, path: string}) => {
  return get(child(dbRef, path + id)).then((snapshot) => {
    return snapshot.exists();
  })
};
