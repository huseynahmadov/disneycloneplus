import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnq4B1GBJwIv6CT1g5EEKpUyIDkbneOhs",
  authDomain: "disneyplus-clone-ae3d6.firebaseapp.com",
  projectId: "disneyplus-clone-ae3d6",
  storageBucket: "disneyplus-clone-ae3d6.appspot.com",
  messagingSenderId: "832566218297",
  appId: "1:832566218297:web:9f571c7a1a206e969ec7e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
