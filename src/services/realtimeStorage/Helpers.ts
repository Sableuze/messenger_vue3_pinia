import { onValue, ref } from 'firebase/database';
import { db } from 'src/services/FirebaseApp';

export const checkForItemInDb = ({ id, path }: {id: string, path: string}) => {
  return onValue(ref(db, `${path}` + id), (snapshot) => {
    debugger
    return snapshot.exists();
  })
};
