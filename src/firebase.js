
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmUuqDHzPBsqjNiq2sROD1JiGO_QsX0Hw",
  authDomain: "linkedin-clone-3a91b.firebaseapp.com",
  projectId: "linkedin-clone-3a91b",
  storageBucket: "linkedin-clone-3a91b.appspot.com",
  messagingSenderId: "679716726153",
  appId: "1:679716726153:web:3e6e492932e001f9c1ad58"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, storage, provider };

export default db;
