import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB--OqOwOmofa8E-UATAuMHPbpLhwN1Hto",
    authDomain: "crud-2ebde.firebaseapp.com",
    projectId: "crud-2ebde",
    storageBucket: "crud-2ebde.appspot.com",
    messagingSenderId: "930552772314",
    appId: "1:930552772314:web:9a68ab2cee440b59bc17e3"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  