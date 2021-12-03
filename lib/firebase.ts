import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVNU60ybbkVpGraryrreZK-A-VRVE852Q",
  authDomain: "dakiti-ecommerce.firebaseapp.com",
  projectId: "dakiti-ecommerce",
  storageBucket: "dakiti-ecommerce.appspot.com",
  messagingSenderId: "314675585564",
  appId: "1:314675585564:web:e4dbe2194ee344351df5d9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

// make a query to a collection with name 'category'
