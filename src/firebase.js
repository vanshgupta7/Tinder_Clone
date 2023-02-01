import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSrK6da192Us4KzQeq22BpcHAMH-xvbek",
    authDomain: "clone-tinder-e0298.firebaseapp.com",
    projectId: "clone-tinder-e0298",
    storageBucket: "clone-tinder-e0298.appspot.com",
    messagingSenderId: "392088839390",
    appId: "1:392088839390:web:01025301ed31afb3404e4f",
    measurementId: "G-CKX8J29FD0"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;