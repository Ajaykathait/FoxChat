import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzXr3NVYZ2x8ZksMENAoJ0-j75eK3ydLE",
  authDomain: "foxchat-1680c.firebaseapp.com",
  databaseURL: "https://foxchat-1680c-default-rtdb.firebaseio.com",
  projectId: "foxchat-1680c",
  storageBucket: "foxchat-1680c.appspot.com",
  messagingSenderId: "293520320940",
  appId: "1:293520320940:web:29371303d9542abed87209",
  measurementId: "G-CBXJPZWFMT",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};