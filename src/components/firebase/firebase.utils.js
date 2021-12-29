import firebase from 'firebase/compat/app';  //get the functionality of that firebase library
import 'firebase/compat/firestore';          //get the database
import 'firebase/compat/auth';               //get the auth functionality

const config={
    apiKey: "AIzaSyBVIV6C42KOLNRCTQOAA2KsgntGcKQK0IU",
    authDomain: "crown-db-cf88b.firebaseapp.com",
    projectId: "crown-db-cf88b",
    storageBucket: "crown-db-cf88b.appspot.com",
    messagingSenderId: "51703730202",
    appId: "1:51703730202:web:881334c44ae2b359dcc1a3",
    measurementId: "G-5QB0CM1JD5"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();  //use for authentication
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();  // give access to class GoogleAuthProvider frpm auth library
  provider.setCustomParameters({prompt:'select_account'});  //trigger the google popup whenever we are using GoogleAuthProvider class
  export const signInWithGoogle = () => auth.signInWithPopup(provider) //trigger the popup ehenevr this function is called

  export default firebase