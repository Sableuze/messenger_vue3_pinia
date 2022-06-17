import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyBOjmGCuf5qjfidZXSSctjnoHXy77ClHE4',
  authDomain: 'messenger-c965e.firebaseapp.com',
  databaseURL: 'https://messenger-c965e-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'messenger-c965e',
  storageBucket: 'messenger-c965e.appspot.com',
  messagingSenderId: '452373502309',
  appId: '1:452373502309:web:0b028371640dd3726c298c'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
