import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebase_config = {
  apiKey: "AIzaSyD9pRUaMfUyQ-vNKISJNHVYq-GOVRSPyOg",
  authDomain: "clash-royal-api-tournament.firebaseapp.com",
  databaseURL: "https://clash-royal-api-tournament.firebaseio.com",
  projectId: "clash-royal-api-tournament",
  storageBucket: "clash-royal-api-tournament.appspot.com",
  messagingSenderId: "692635584235",
  appId: "1:692635584235:web:5198f4236d04fa2b6620ae",
  measurementId: "G-ZVBJ6WDYC4"
};

// Initialize Firebase
firebase.initializeApp(firebase_config);
firebase.analytics();

export default firebase;

