import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbk691xPkkFMGvJFml1FzXxzhLze2OUP0",
  authDomain: "whatsapp-firebase-yt-34a3d.firebaseapp.com",
  projectId: "whatsapp-firebase-yt-34a3d",
  storageBucket: "whatsapp-firebase-yt-34a3d.appspot.com",
  messagingSenderId: "1036082989125",
  appId: "1:1036082989125:web:3b808862b77cee9ec27b2c",
  measurementId: "G-WLZZ5EHL3D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
