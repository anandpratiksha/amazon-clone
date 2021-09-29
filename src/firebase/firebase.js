import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDZYoy0Cmmuv8WLZDsWTJ3BwwtXyKINak",
  authDomain: "clone-c740c.firebaseapp.com",
  projectId: "clone-c740c",
  storageBucket: "clone-c740c.appspot.com",
  messagingSenderId: "159256232762",
  appId: "1:159256232762:web:73d2b43fa4526520704603",
  measurementId: "G-CWCD97YW9E"
 
});

const auth = firebase.auth();

export { auth };