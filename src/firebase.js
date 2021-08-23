import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCK4PhNHio8p6qXsMY2nF9ef9ulaqcebiQ",
    authDomain: "bongo-4188a.firebaseapp.com",
    projectId: "bongo-4188a",
    storageBucket: "bongo-4188a.appspot.com",
    messagingSenderId: "474517155335",
    appId: "1:474517155335:web:1f097f3c2cdaa9e1b1c4a2",
    measurementId: "G-X9JGVN9554"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };