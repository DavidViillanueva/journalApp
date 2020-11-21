import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDI3Jll4v2lp4pvYG_gmcdHBxYkMpWqXC0",
    authDomain: "journalapp-30b7a.firebaseapp.com",
    databaseURL: "https://journalapp-30b7a.firebaseio.com",
    projectId: "journalapp-30b7a",
    storageBucket: "journalapp-30b7a.appspot.com",
    messagingSenderId: "612811386986",
    appId: "1:612811386986:web:df94c79259cb063ec01a13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}