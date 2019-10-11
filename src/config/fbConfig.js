import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfgTga_3_VqWH7Ic89Qg5Gt3rTz0VgXTQ",
    authDomain: "board-app-beced.firebaseapp.com",
    databaseURL: "https://board-app-beced.firebaseio.com",
    projectId: "board-app-beced",
    storageBucket: "",
    messagingSenderId: "949476251729",
    appId: "1:949476251729:web:4dca81434c6edcfb1e0070"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
