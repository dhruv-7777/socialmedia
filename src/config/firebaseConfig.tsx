import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBDWTdzkyAhdNJh2w3pKtKyxdRLpWqX6tw",
  authDomain: "signal-clone-2d51d.firebaseapp.com",
  projectId: "signal-clone-2d51d",
  storageBucket: "signal-clone-2d51d.appspot.com",
  messagingSenderId: "568968370641",
  appId: "1:568968370641:web:0f5afba7ac7df0f09828f0"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } else {
      await AsyncStorage.removeItem('user');
    }
  });
  
  export { auth, signOut, onAuthStateChanged, firestore };
