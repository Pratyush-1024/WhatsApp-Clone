import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8TlIyp3_k9asJRIb_0px1N4scJq2y0jE",
  authDomain: "whatsapp-clone-48d09.firebaseapp.com",
  projectId: "whatsapp-clone-48d09",
  storageBucket: "whatsapp-clone-48d09.appspot.com",
  messagingSenderId: "984407168838",
  appId: "1:984407168838:web:ef25814055ed135e323747",
  measurementId: "G-HH8KQ43DLS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }; 

export default firebaseApp;
