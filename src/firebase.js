import firebase, { firestore } from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBi9sxrA5dOXXoShlG_uOT_vcF8xAlJhJU",
    authDomain: "hackathon-arrangement.firebaseapp.com",
    projectId: "hackathon-arrangement",
    storageBucket: "hackathon-arrangement.appspot.com",
    messagingSenderId: "538446525640",
    appId: "1:538446525640:web:7eab94793f2c59f05ea1fd",
    measurementId: "G-1414JPX0RV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;