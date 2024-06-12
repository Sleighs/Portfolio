import firebase from "firebase";
import firebaseInfo from "./Resources/firebaseKey";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: firebaseInfo.apiKey,
  authDomain: firebaseInfo.authDomain,
  databaseURL: firebaseInfo.databaseURL,
  projectId: firebaseInfo.projectId,
  storageBucket: firebaseInfo.storageBucket,
  messagingSenderId: firebaseInfo.messagingSenderId,
  appId: firebaseInfo.appId,
  measurementId: firebaseInfo.measurementId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//const analytics = getAnalytics(firebaseApp);

export { db };