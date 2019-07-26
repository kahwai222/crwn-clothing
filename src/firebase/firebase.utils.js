import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBW0Bg_uCwZj-Cf9-u-L9bqGKxjnOmZV8",
  authDomain: "expensify-22b58.firebaseapp.com",
  databaseURL: "https://expensify-22b58.firebaseio.com",
  projectId: "expensify-22b58",
  storageBucket: "",
  messagingSenderId: "666713026053",
  appId: "1:666713026053:web:72ba47df5008a976"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
