
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAofNkvsqL5E2wtoNI3KnQNwKVZnrMV3vc",
  authDomain: "clone-9f45d.firebaseapp.com",
  projectId: "clone-9f45d",
  storageBucket: "clone-9f45d.appspot.com",
  messagingSenderId: "796878870163",
  appId: "1:796878870163:web:6f12b0a9a3f5679b9b1f66"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvide();

export{db,auth,provider};