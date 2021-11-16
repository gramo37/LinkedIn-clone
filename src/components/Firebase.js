import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyApH1YaYNuH-KkiiKDjYWIHoi6q7BJMIlk",
  authDomain: "linkedin-clone-e5a92.firebaseapp.com",
  projectId: "linkedin-clone-e5a92",
  storageBucket: "linkedin-clone-e5a92.appspot.com",
  messagingSenderId: "840879964251",
  appId: "1:840879964251:web:2f039f020488458f10bf7e",
  measurementId: "G-FJTB1JRFMT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
