import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvM7yTk-wdIDMPgJklmfcssq7edYuj0Q0",
    authDomain: "chat-app-ayushgml.firebaseapp.com",
    projectId: "chat-app-ayushgml",
    storageBucket: "chat-app-ayushgml.appspot.com",
    messagingSenderId: "380985465559",
    appId: "1:380985465559:web:dd3ac1083d2a7d0cc0ae92",
    measurementId: "G-TN64BDTQHC"
};

let app

if(firebase.apps.length === 0){
    app = firebase.initializeApp( firebaseConfig )
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }; 