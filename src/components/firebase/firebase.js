import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK1uqlLK8sE3KFRlrK3nwh3K5BGbgp8Yo",
  authDomain: "clear-head-10349.firebaseapp.com",
  projectId: "clear-head-10349",
  storageBucket: "clear-head-10349.appspot.com",
  messagingSenderId: "152101666563",
  appId: "1:152101666563:web:5e6833dd5492f99f65f336",
  measurementId: "G-07DCSEK88F",
});

const db = firebaseApp.firestore();

export default db;
