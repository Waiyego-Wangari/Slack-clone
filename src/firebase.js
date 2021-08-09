import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ6Eat7MA7zaDoJHAi6A70MX7-LNlpV6M",
  authDomain: "slack-clone-eb90b.firebaseapp.com",
  projectId: "slack-clone-eb90b",
  storageBucket: "slack-clone-eb90b.appspot.com",
  messagingSenderId: "1070423982559",
  appId: "1:1070423982559:web:92e982afa7760cd1c3446a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
