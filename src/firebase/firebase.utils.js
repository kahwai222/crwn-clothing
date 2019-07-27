import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCIzAkAho8-Bzb5fuOj5ORQpaY7OtKESMQ",
  authDomain: "crwn-db-fdda0.firebaseapp.com",
  databaseURL: "https://crwn-db-fdda0.firebaseio.com",
  projectId: "crwn-db-fdda0",
  storageBucket: "",
  messagingSenderId: "526882785014",
  appId: "1:526882785014:web:c4544eafc4d2ea1d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapshot = await userRef.get();
  
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
