import * as firebase from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBZbLn27eQ93ez9PvjPuBPnrgytyyhv7-o",
  authDomain: "final-project-a9c14.firebaseapp.com",
  projectId: "final-project-a9c14",
  storageBucket: "final-project-a9c14.appspot.com",
  messagingSenderId: "184697336077",
  appId: "1:184697336077:web:1b8aeb7bbf74e87c6c8044"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)