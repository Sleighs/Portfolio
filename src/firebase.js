import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDM8mIKG75bihhtAtwpEpCAcH5FA9Zm2IM",
  authDomain: "resume-bbd43.firebaseapp.com",
  databaseURL: "https://resume-bbd43-default-rtdb.firebaseio.com",
  projectId: "resume-bbd43",
  storageBucket: "resume-bbd43.appspot.com",
  messagingSenderId: "899941858131",
  appId: "1:899941858131:web:44e23ae6642e4ccb36ffa6",
  measurementId: "G-17LKMEH19D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
