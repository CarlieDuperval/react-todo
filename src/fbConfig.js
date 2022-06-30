import { initializeApp } from 'firebase/app'

export const firebaseConfig = {
    apiKey: "AIzaSyBKd0pgfkSzpiTkf0qFEB-ACdsjrzeTAF4",
    authDomain: "react-todo-812cb.firebaseapp.com",
    projectId: "react-todo-812cb",
    storageBucket: "react-todo-812cb.appspot.com",
    messagingSenderId: "978117859846",
    appId: "1:978117859846:web:275c1b7d378c414db20187"
  };

 export const connectAuth = () => {
    const app = initializeApp(firebaseConfig); // connect to firebase
    return getAuth(app); // connect to firebase/auth 
}
