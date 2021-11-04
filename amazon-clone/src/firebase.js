
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzUGUl0F5zg6uSBrgzUKayDs9AQt6yIEA",
    authDomain: "challenge-c1516.firebaseapp.com",
    projectId: "challenge-c1516",
    storageBucket: "challenge-c1516.appspot.com",
    messagingSenderId: "828516393136",
    appId: "1:828516393136:web:4594cafe30102e3ef1db75",
    measurementId: "G-QG5L57BW42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}; 