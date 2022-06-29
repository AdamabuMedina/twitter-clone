import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_CFMeVsh5exAC7nNM0Rv9ntrOPu_jyd8",
  authDomain: "twitter-clone-e4e1f.firebaseapp.com",
  projectId: "twitter-clone-e4e1f",
  storageBucket: "twitter-clone-e4e1f.appspot.com",
  messagingSenderId: "1074932291435",
  appId: "1:1074932291435:web:7a754b66065bed59b79e2e",
  measurementId: "G-DXS33MLN92"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()

export default db