import { app, auth } from 'src/services/FirebaseApp';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, reload } from 'firebase/auth';
import { AuthProviders } from 'src/services/authService/AuthProviders';
import { AuthProvider } from 'src/types/services/';


export const signIn = async (providerFlag: AuthProvider) => {
  const provider = AuthProviders[providerFlag] || AuthProviders['google']

  const { user, credential, token, refreshToken } = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      const refreshToken = user.refreshToken
      return {credential, token, user, refreshToken}
    })


  return {user, credential, token, refreshToken}


};

export const logOut = () => {
  return signOut(auth).then(() => {
    return true
  }).catch(() => {
    return false
  });
}
