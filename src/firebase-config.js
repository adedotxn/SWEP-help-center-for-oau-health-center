import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8q-a3YwmQdwi5V_wrP3217Atm2I8jcS4",
    authDomain: "help-center-e380b.firebaseapp.com",
    projectId: "help-center-e380b",
    storageBucket: "help-center-e380b.appspot.com",
    messagingSenderId: "244349552102",
    appId: "1:244349552102:web:fca25169e3eedad0d5c227",
    measurementId: "G-FSWCWMGS2B"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);