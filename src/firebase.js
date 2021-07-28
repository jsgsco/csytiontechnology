import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA3FxC2dQ-HzT0Q2EcDRLYNX56N4VE7ONc",
    authDomain: "csytion-dev.firebaseapp.com",
    projectId: "csytion-dev",
    storageBucket: "csytion-dev.appspot.com",
    messagingSenderId: "1098919867515",
    appId: "1:1098919867515:web:93ed7e67ab82e497fddede"
  }

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }