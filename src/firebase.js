import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ( {
    apiKey: "AIzaSyAf0zzntKCu5zQxHriVHx1fAwqwF42NHZQ",
    authDomain: "todo-app-wolvhe.firebaseapp.com",
    databaseURL: "https://todo-app-wolvhe.firebaseio.com",
    projectId: "todo-app-wolvhe",
    storageBucket: "todo-app-wolvhe.appspot.com",
    messagingSenderId: "100094053585",
    appId: "1:100094053585:web:0e0e08a2859f69ed0309f0",
    measurementId: "G-Y87FJNKBG0"
  } );


  const db = firebaseApp.firestore();
  export default db;

