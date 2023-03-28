import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYvm9O8CSvyg644bVmC1pPzVbqQcLiZk4",
  authDomain: "netflix-portfolio-f504b.firebaseapp.com",
  projectId: "netflix-portfolio-f504b",
  storageBucket: "netflix-portfolio-f504b.appspot.com",
  messagingSenderId: "469336904904",
  appId: "1:469336904904:web:d65cd072349e057ba041fd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
