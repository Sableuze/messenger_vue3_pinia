import { GoogleAuthProvider } from 'firebase/auth';
import { AuthProvider } from 'src/types/services/AuthTypes';

const providerGoogle = new GoogleAuthProvider();

providerGoogle.setCustomParameters({
  login_hint: 'user@example.com',
});

export const AuthProviders: Record<AuthProvider, any> = {
  google: providerGoogle,
  github: ''
};
