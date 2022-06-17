import {  TUserInitial } from 'src/shared/types/user/userTypes';
import { ref, set } from 'firebase/database';
import { db } from 'src/services/FirebaseApp';
import { ApiPaths } from '@/shared/enums/ApiPaths';

export const addUserToDbBase = ({ displayName, uid, email, photoURL }: TUserInitial) => {
  set(ref(db, ApiPaths.users + uid), {
    displayName,
    email,
    uid,
    photoURL,
  });
};
